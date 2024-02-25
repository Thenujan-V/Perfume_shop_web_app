package com.project.perfumes.service;

import com.fasterxml.jackson.databind.util.JSONPObject;
import com.project.perfumes.dto.CartDto;
import com.project.perfumes.entity.OrderEntity;
import com.project.perfumes.repository.OrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService{
    @Autowired
    private OrderRepo orderRepo;

    @Override
    public List<OrderEntity> createOrderList(CartDto CartDto) {
        OrderEntity orderEntity = new OrderEntity();
        orderEntity.setUId(CartDto.getuId());
            orderEntity.setProductDetails(CartDto.getProductDetails().toString());
        orderRepo.save(orderEntity);
        return null;
    }

    @Override
    public String amountDetails(Long uId) {
        OrderEntity orderEntity = new OrderEntity();
        String orderEntities = orderRepo.findProductDetails(uId);
        System.out.println("pId "+orderEntities.split("=")[0]);
        System.out.println("Quantity "+orderEntities.split("=")[1]);

        return orderEntities;
    }
//    @Autowired
//    private CartRepo cartRepo;


//    @Override
//    public List<OrderEntity> createOrderList(Long uId) {
//        List<CartEntity> carts = cartRepo.findAllCartItems(uId);
//        System.out.println(carts);
//        for(CartEntity cartEntity : carts) {
//            OrderEntity orderEntity = new OrderEntity();
//            orderEntity.setPId(cartEntity.getPId());
//            orderEntity.setUId(uId);
//            orderEntity.setQuantity(cartEntity.getQuantity());
//            orderRepo.save(orderEntity);
//            cartRepo.delete(cartEntity);
//        }

//        return null;
//    }
}
