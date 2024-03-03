package com.project.perfumes.controller;
import com.project.perfumes.dto.WiseListDto;
import com.project.perfumes.entity.ProductEntity;
import com.project.perfumes.service.WiseListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/wishlist")
public class WiseListController {

    @Autowired
    private WiseListService wiseListService;
    
    @PostMapping("/create/{uId}/{pId}")
    public ResponseEntity<String> createWishList(@PathVariable Long uId, @PathVariable Long pId){
        if(wiseListService.checkWiselist(uId,pId)){
            return ResponseEntity.status(HttpStatus.OK).body("Product already exists.");
        }
        else{
            WiseListDto createdCart = wiseListService.createWiseList(uId,pId);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdCart.toString());
        }
    }
    
    @GetMapping("/getlist/{uId}")
    public List<ProductEntity> getAllWishList(@PathVariable Long uId){
        return wiseListService.getAllWiseList(uId);
    }

    public static class CartController {
    }
}
