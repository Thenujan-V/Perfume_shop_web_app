package com.project.perfumes.controller;

import com.project.perfumes.entity.User;
import com.project.perfumes.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("api/v1/user")
@RequiredArgsConstructor
@CrossOrigin("*")
public class UserController {
    @Autowired
    private UserService userService;
    @GetMapping("/{uId}")
    private Optional<User> getUserDetails(@PathVariable Long uId){
        System.out.println(userService.findUsersDetails(uId));
        return userService.findUsersDetails(uId);
    }
}
