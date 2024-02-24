package com.project.perfumes.controller;

import com.project.perfumes.dto.OrderDto;
import com.project.perfumes.entity.CartEntity;
import com.project.perfumes.repository.CartRepo;
import com.project.perfumes.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/order")
@CrossOrigin("*")
public class OrderController {
    @Autowired
    private OrderService orderService;
    @PostMapping("/create/{cId}")
    public void createOrderList(){
        return orderService.createOrderList();
    }

}
