package com.project.perfumes.controller;

import com.project.perfumes.dto.CartDto;
import com.project.perfumes.entity.ProductEntity;
import com.project.perfumes.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/cart")
public class CartController {
    @Autowired
    private CartService cartService;
    @PostMapping("/createcart/{uId}/{pId}")
    public CartDto createCart(@PathVariable Long uId, @PathVariable Long pId){
        return cartService.createCart(uId,pId);
    }

    @GetMapping("/getcart/{uId}")
    public List<ProductEntity> getCartProduct(@PathVariable Long uId){
        return cartService.getCartDetails(uId);
    }

    @PutMapping("/updatequantity/{pId}")
    public CartDto updateQuantity(@PathVariable Long pId, @RequestBody CartDto cartDto){
        return cartService.updateQuantityValue(pId, cartDto);
    }

    @DeleteMapping("deletecartitem/{pId}")
    public boolean deleteProduct(@PathVariable Long pId){
        return cartService.deleteCartProduct(pId);
    }
}
