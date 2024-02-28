package com.project.perfumes.service;

import com.project.perfumes.dto.CartDto;

import java.util.List;

public interface CartService{
    CartDto createCart(Long uId, Long pId);

    List<Object[]> getCartDetails(Long uId);

    CartDto updateQuantityValue(Long pId, CartDto cartDto);

    void deleteCartProduct(Long pId, Long id);

    boolean checkCart(Long uId, Long pId);

    List<Integer> getQuantity(Long uId);
}
