package com.project.perfumes.service;

import com.project.perfumes.entity.User;
import com.project.perfumes.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{
    private final UserRepository userRepository;

    @Override
    public UserDetailsService userDetailsService() {
       return new UserDetailsService() {
           @Override
           public UserDetails loadUserByUsername(String username){
               return userRepository.findByEmail(username)
               .orElseThrow(() -> new UsernameNotFoundException("user not found"));
           }
       };
    }

    @Override
    public Optional<User> findUsersDetails(Long uId) {
        return userRepository.findById(uId);
    }
}
