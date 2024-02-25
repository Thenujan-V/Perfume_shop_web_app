package com.project.perfumes.service;

import com.project.perfumes.dto.CartDto;
import com.project.perfumes.entity.OrderEntity;

import java.util.List;

public interface OrderService{
    List<OrderEntity> createOrderList(CartDto CartDto);

    String amountDetails(Long uId);
}
