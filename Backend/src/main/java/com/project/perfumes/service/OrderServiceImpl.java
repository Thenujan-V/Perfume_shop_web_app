package com.project.perfumes.service;

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
        System.out.println(CartDto.getuId());
            orderEntity.setUId(CartDto.getuId());
            orderEntity.setProductDetails(CartDto.getProductDetails());
        orderRepo.save(orderEntity);
        return null;
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
