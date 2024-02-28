package com.project.perfumes.service;

import com.project.perfumes.dto.JwtAutenticationResponse;
import com.project.perfumes.dto.SignUpRequest;
import com.project.perfumes.dto.SigninRequest;
import com.project.perfumes.entity.User;

public interface AuthenticationService {
    User signup(SignUpRequest signUpRequest);
    JwtAutenticationResponse signin(SigninRequest signinRequest);

    boolean verifyUniqueEmail(SignUpRequest signUpRequest);

    boolean signinVerify(SigninRequest signinRequest);
}
