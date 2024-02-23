package com.project.perfumes.service;

import com.project.perfumes.dto.OrderDto;
import com.project.perfumes.entity.CartEntity;
import com.project.perfumes.repository.CartRepo;
import com.project.perfumes.repository.OrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService{
    @Autowired
    private OrderRepo orderRepo;
    @Autowired
    private CartRepo cartRepo;
    @Override
    public void createOrderList(OrderDto orderDto) {

        return null;
    }
}
