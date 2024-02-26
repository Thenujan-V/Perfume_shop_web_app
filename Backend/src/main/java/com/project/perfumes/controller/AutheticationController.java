package com.project.perfumes.controller;

import com.project.perfumes.dto.JwtAutenticationResponse;
import com.project.perfumes.dto.SignUpRequest;
import com.project.perfumes.dto.SigninRequest;
import com.project.perfumes.entity.User;
import com.project.perfumes.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AutheticationController {
    private final AuthenticationService authenticationService;

    @PostMapping("/signup")
    public ResponseEntity<User> signup(@RequestBody SignUpRequest signUpRequest){
        return ResponseEntity.ok(authenticationService.signup(signUpRequest));
    }

    @PostMapping("/signin")
    public ResponseEntity<JwtAutenticationResponse> signin(@RequestBody SigninRequest signinRequest){
        System.out.println(signinRequest.getEmail());
        return ResponseEntity.ok(authenticationService.signin(signinRequest));
    }
}
