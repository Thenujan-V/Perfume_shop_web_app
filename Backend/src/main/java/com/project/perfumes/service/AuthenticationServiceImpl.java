package com.project.perfumes.service;

import com.project.perfumes.dto.JwtAutenticationResponse;
import com.project.perfumes.dto.SignUpRequest;
import com.project.perfumes.dto.SigninRequest;
import com.project.perfumes.entity.Role;
import com.project.perfumes.entity.User;
import com.project.perfumes.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService{
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JWTService jwtService;
    public User signup(SignUpRequest signUpRequest){
        User user = new User();

        user.setEmail(signUpRequest.getEmail());
        user.setFirstName(signUpRequest.getFirstName());
        user.setSecondName(signUpRequest.getLastName());
        user.setAddress(signUpRequest.getAddress());
        user.setPhoneno(signUpRequest.getPhoneNumber());
        user.setRole(Role.USER);
        user.setPassword(passwordEncoder.encode(signUpRequest.getPassword()));

        return userRepository.save(user);
    }

    public JwtAutenticationResponse signin(SigninRequest signinRequest){
        Authentication auth=authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(signinRequest.getEmail(),
                signinRequest.getPassword()));
        System.out.println(auth.isAuthenticated());

        User user = userRepository.findByEmail(signinRequest.getEmail()).orElseThrow(() -> new IllegalArgumentException("invalid email or password"));
        System.out.println((auth.getAuthorities().stream().findAny().get()));
        System.out.println(user.getId());
        String jwt = jwtService.generateToken(user, String.valueOf(auth.getAuthorities().stream().findAny().get()), user.getId());
        String refreshToken = jwtService.generateRefreshToken(new HashMap<>(), user);

        JwtAutenticationResponse jwtAutenticationResponse = new JwtAutenticationResponse();

        jwtAutenticationResponse.setToken(jwt);
        jwtAutenticationResponse.setRefreshToken(refreshToken);

        return jwtAutenticationResponse;
    }

    @Override
    public boolean verifyUniqueEmail(SignUpRequest signUpRequest) {
        String userEmail = signUpRequest.getEmail();
        boolean emailExists = userRepository.existsByEmail(userEmail);

        return emailExists;
    }

    @Override
    public boolean signinVerify(SigninRequest signinRequest) {
        String userEmail = signinRequest.getEmail();
        Optional<User> userOptional = userRepository.findByEmail(userEmail);
        if (userOptional.isPresent()) {
            User user = userOptional.get();

            BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
            return passwordEncoder.matches(signinRequest.getPassword(),user.getPassword());
        }
        else{
            return false;
        }



    }
}
