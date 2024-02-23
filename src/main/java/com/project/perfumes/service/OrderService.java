package com.project.perfumes.service;

import com.project.perfumes.dto.OrderDto;
import com.project.perfumes.entity.CartEntity;

import java.util.List;

public interface OrderService{
    void createOrderList(OrderDto orderDto);
}
