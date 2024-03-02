package com.project.perfumes.service;

import com.project.perfumes.entity.User;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.HashMap;
import java.util.Map;

public interface JWTService{
    String extractUserName(String token);
    String generateToken(UserDetails userDetails,String role, Long id);
    boolean isTokenValid(String token, UserDetails userDetails);
    String generateRefreshToken(Map<String, Object> extraClaims, UserDetails userDetails);
}
