package com.project.perfumes.service;

import com.project.perfumes.entity.User;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.Optional;

public interface UserService {
    UserDetailsService userDetailsService();

    Optional<User> findUsersDetails(Long uId);
}
