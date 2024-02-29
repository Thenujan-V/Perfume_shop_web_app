package com.project.perfumes.service;

import com.project.perfumes.dto.CartDto;
import com.project.perfumes.entity.OrderEntity;

import java.util.List;

public interface OrderService{

    List<OrderEntity> createOrderList(Long uId, CartDto cartDto);

    List<OrderEntity> createOrderProducts(Long uId, CartDto cartDto);

    List<Object[]> getItems(Long uId);
}
