package com.project.perfumes.controller;

import com.project.perfumes.dto.WiseListDto;
import com.project.perfumes.entity.ProductEntity;
import com.project.perfumes.service.WiseListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController // it handles HTTP requests and returns the response in a RESTful manner.
@CrossOrigin("*") // This allows the resources to be requested from another domain.
@RequestMapping("/api/v1/wishlist") // specifies the base URI path for the controller's endpoints.
public class WiseListController {

    // dependencies are objects that another object relies on to perform its
    // function
    @Autowired // used to inject an instance of the WiseListService into the controller. This
               // enables the controller to use the methods provided by the service.
    private WiseListService wiseListService;

    @PostMapping("/create/{uId}/{pId}")
    // HTTP POST requests with the specified URL pattern ("/create/{uId}/{pId}") to
    // the createWishList() method.
    public ResponseEntity<String> createWishList(@PathVariable Long uId, @PathVariable Long pId) {
        if (wiseListService.checkWiselist(uId, pId)) { //method checks if the product already exists in the wishlist for the given user 
            return ResponseEntity.status(HttpStatus.OK).body("Product already exists.");// If it does, it returns a response with status OK and a message indicating that the product already exists.
        } else {
            WiseListDto createdCart = wiseListService.createWiseList(uId, pId); If not, it creates a new entry in the wishlist using 
            return ResponseEntity.status(HttpStatus.CREATED).body(createdCart.toString());
            //returns a response with status CREATED and the created wishlist item.
        }
    }

    @GetMapping("/getlist/{uId}")
    public List<ProductEntity> getAllWishList(@PathVariable Long uId) {
        return wiseListService.getAllWiseList(uId); //method retrieves all wishlist items for the given user ID using wiseListService.getAllWiseList(uId)
    }//returns the list of ProductEntity objects representing the wishlist.

    public static class CartController {
        
    }
}
