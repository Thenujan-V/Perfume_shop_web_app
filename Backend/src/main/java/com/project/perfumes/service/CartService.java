package com.project.perfumes.service;

import com.project.perfumes.dto.CartDto;
import com.project.perfumes.entity.ProductEntity;

import java.util.List;

public interface CartService{
    CartDto createCart(Long uId, Long pId);

    List<ProductEntity> getCartDetails(Long uId);

    CartDto updateQuantityValue(Long pId, CartDto cartDto);

    boolean deleteCartProduct(Long pId);

    boolean checkCart(Long uId, Long pId);
}
