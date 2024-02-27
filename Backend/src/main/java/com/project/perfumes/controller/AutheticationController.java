package com.project.perfumes.controller;

import com.project.perfumes.dto.JwtAutenticationResponse;
import com.project.perfumes.dto.SignUpRequest;
import com.project.perfumes.dto.SigninRequest;
import com.project.perfumes.entity.User;
import com.project.perfumes.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AutheticationController{
    private final AuthenticationService authenticationService;

    @PostMapping("/signup")
    public boolean signup(@RequestBody SignUpRequest signUpRequest){
        if(authenticationService.verifyUniqueEmail(signUpRequest)){
            return false;
        }
        else{
            authenticationService.signup(signUpRequest);
            return true;
        }
    }

    @PostMapping("/signin")
    public ResponseEntity<JwtAutenticationResponse> signin(@RequestBody SigninRequest signinRequest){
        if(!authenticationService.signinVerify(signinRequest)){
            System.out.println("faild");
            System.out.println(ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null));
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        }
        else{
            System.out.println("okeeee");
            return ResponseEntity.ok(authenticationService.signin(signinRequest));
        }
    }
}
