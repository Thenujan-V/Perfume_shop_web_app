package com.project.perfumes.service;

import com.project.perfumes.dto.CartDto;
import com.project.perfumes.entity.CartEntity;
import com.project.perfumes.repository.CartRepo;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Transactional
@Service
public class CartServiceImpl implements CartService {
    @Autowired
    private CartRepo cartRepo;

    public CartServiceImpl(CartRepo cartRepo) {
        this.cartRepo = cartRepo;
    }

    @Override
    public boolean checkCart(Long uId, Long pId) {
       Optional<CartEntity> cartEntityOptional = cartRepo.findSameItems(uId,pId);
       if(cartEntityOptional.isPresent()){
           System.out.println("true");
           return true;
       }
       else{
           System.out.println("false");
           return false;
       }
    }

    @Override
    public List<Integer> getQuantity(Long uId) {
        return cartRepo.findQuantity(uId);
    }

    @Override
    public CartDto createCart(Long uId, Long pId) {
        CartEntity cartEntity = new CartEntity();
            cartEntity.setPId(pId);
            cartEntity.setUId(uId);
            cartEntity.setQuantity(1);
        cartRepo.save(cartEntity);

        CartDto cartDto = new CartDto();
        cartDto.setPId(cartEntity.getPId());
        cartDto.setuId(cartEntity.getUId());
        cartDto.setQuantity(cartEntity.getQuantity());

        return cartDto;
    }

    @Override
    public List<Object[]> getCartDetails(Long uId) {
        return cartRepo.findAllProducts(uId);
    }

    @Override
    public CartDto updateQuantityValue(Long pId, Long id, CartDto cartDto) {
        Integer newQuantity = cartDto.getQuantity();
        cartRepo.updateQuantity(pId,id,newQuantity);
        return null;
    }

    @Override
    public void deleteCartProduct(Long uId, Long pId){
//        CartEntity cartEntity = cartRepo.findById(pId).get();
        cartRepo.deleteCartItem(uId,pId);
    }



}
