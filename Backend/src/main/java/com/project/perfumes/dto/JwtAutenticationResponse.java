package com.project.perfumes.dto;

import lombok.Data;

@Data
public class JwtAutenticationResponse {
    private String token;
    private String refreshToken;


}
