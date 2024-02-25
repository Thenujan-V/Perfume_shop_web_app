package com.project.perfumes.service;

import com.project.perfumes.dto.CartDto;
import com.project.perfumes.entity.CartEntity;
import com.project.perfumes.entity.ProductEntity;
import com.project.perfumes.repository.CartRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartServiceImpl implements CartService {
    @Autowired
    private CartRepo cartRepo;

    public CartServiceImpl(CartRepo cartRepo) {
        this.cartRepo = cartRepo;
    }

    @Override
    public CartDto createCart(Long uId, Long pId) {
        CartEntity cartEntity = new CartEntity();
            cartEntity.setPId(pId);
            cartEntity.setUId(uId);
        cartRepo.save(cartEntity);
        return null;
    }

    @Override
    public List<ProductEntity> getCartDetails(Long uId) {
        return cartRepo.findAllProducts(uId);
    }

    @Override
    public CartDto updateQuantityValue(Long pId, CartDto cartDto) {
        CartEntity cartEntity = cartRepo.findById(pId).get();
        cartEntity.setQuantity(cartDto.getQuantity());

        cartRepo.save(cartEntity);
        return cartDto;
    }

    @Override
    public boolean deleteCartProduct(Long pId){
        CartEntity cartEntity = cartRepo.findById(pId).get();
        cartRepo.delete(cartEntity);
        return true;
    }

}
