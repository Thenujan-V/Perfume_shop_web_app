package com.project.perfumes.controller;

import com.project.perfumes.dto.CartDto;
import com.project.perfumes.entity.ProductEntity;
import com.project.perfumes.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/cart")
@CrossOrigin("*")
public class CartController {
    @Autowired
    private CartService cartService;
    @PostMapping("/createcart/{uId}/{pId}")
    public ResponseEntity<String> createCart(@PathVariable Long uId, @PathVariable Long pId){
        if(cartService.checkCart(uId,pId)){
            return ResponseEntity.status(HttpStatus.OK).body("Cart already exists.");
        }
        else{
            CartDto createdCart = cartService.createCart(uId, pId);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdCart.toString());}
    }

    @GetMapping("/getcart/{uId}")
    public List<ProductEntity> getCartProduct(@PathVariable Long uId){
        System.out.println(cartService.getCartDetails(uId));
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
