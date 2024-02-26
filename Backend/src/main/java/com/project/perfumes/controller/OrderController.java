package com.project.perfumes.controller;

import com.project.perfumes.dto.CartDto;
import com.project.perfumes.entity.CartEntity;
import com.project.perfumes.entity.OrderEntity;
import com.project.perfumes.entity.ProductEntity;
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

    @PostMapping("/create/{uId}")
    private List<OrderEntity> createOrderList(@PathVariable Long uId,@RequestBody CartDto cartDto){
        orderService.createOrderList(uId, cartDto);
        orderService.createOrderProducts(uId,cartDto);
        return null;
    }
}
