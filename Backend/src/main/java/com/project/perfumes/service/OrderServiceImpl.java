package com.project.perfumes.service;

import com.project.perfumes.dto.CartDto;
import com.project.perfumes.dto.OrderDto;
import com.project.perfumes.entity.CartEntity;
import com.project.perfumes.entity.OrderEntity;
import com.project.perfumes.entity.OrderproductsEntity;
import com.project.perfumes.repository.CartRepo;
import com.project.perfumes.repository.OrderProductsRepo;
import com.project.perfumes.repository.OrderRepo;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class OrderServiceImpl implements OrderService{
    @Autowired
    private OrderRepo orderRepo;


    private CartRepo cartRepo;
    @Autowired
    private OrderProductsRepo orderProductsRepo;

    @Override
    public List<OrderEntity> createOrderList(Long uId, CartDto cartDto) {
        OrderEntity orderEntity = new OrderEntity();
        orderEntity.setUId(uId);
        orderRepo.save(orderEntity);

        return null;
    }

    @Override
    public List<OrderEntity> createOrderProducts(Long uId, CartDto cartDto) {
        OrderproductsEntity orderproductsEntity = new OrderproductsEntity();
        OrderEntity orderEntity = new OrderEntity();

        List<CartEntity> cartItems =  cartRepo.findProducts(uId);
        List <Integer> oID = orderRepo.findOid(uId);
        List <Integer> pID = cartRepo.findPid(uId);
        List <Integer> quantity = cartRepo.findQuantity(uId);


        for(int i=0;i < pID.toArray().length; i++){
            OrderproductsEntity orderproductsEntity1 = new OrderproductsEntity();

            orderproductsEntity1.setOId(Long.valueOf(oID.get(0)));
            orderproductsEntity1.setPId(Long.valueOf(pID.get(i)));
            orderproductsEntity1.setQuantity(Integer.valueOf(quantity.get(i)));

            System.out.println("oid    :" + Long.valueOf(oID.get(0)));
            System.out.println("pid    :" + Long.valueOf(pID.get(i)));
            System.out.println("quantity    :" + Integer.valueOf(quantity.get(i)));

            orderProductsRepo.save(orderproductsEntity1);
        }


        return null;
    }

    @Override
    public List<Object[]> getItems(Long uId) {
        List<Integer> OrderId =  orderRepo.findOid(uId);
        return orderRepo.getAllOrderdItems(OrderId.get(0));
    }

    @Override
    public List<OrderDto> setUserDetails(Long uId, Long oId, OrderDto orderDto) {
        String firstName = orderDto.getFirstName();
//        String lastName = orderDto.getLastName();
        String address = orderDto.getUserAddress();
        String mail = orderDto.getEmail();
        Integer phoneNo = orderDto.getPhoneNo();
        System.out.println("111111");
        orderRepo.setUserDetails(uId, oId, firstName, address, mail, phoneNo);

        return null;
    }

    @Override
    public List<Object[]> getOrdersDetails(Long uId) {
        OrderproductsEntity orderproductsEntity = new OrderproductsEntity();
        OrderEntity orderEntity = new OrderEntity();



        return null;
    }
}
