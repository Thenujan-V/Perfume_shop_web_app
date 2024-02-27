package com.project.perfumes.controller;

import com.project.perfumes.dto.ProductDto;
import com.project.perfumes.entity.ProductEntity;
import com.project.perfumes.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/products")
public class ProductController{

    @Autowired
    private ProductService productService;

    @PostMapping("/")
    public ProductDto createProducts(@RequestBody ProductDto productDto) {
        return productService.createProducts(productDto);
    }

    @GetMapping("/")
    public List<ProductDto> getAllProducts() {
        return productService.getProducts();
    }

    @GetMapping("/getwisecategory/{category}")
    public List<ProductDto> getProducts(@PathVariable String category) {
        System.out.println(category);
        return productService.getCategoryWishProducts(category);
    }

    @GetMapping("/getproductdetails/{pId}")
    public List<ProductEntity> getDetails(@PathVariable Long pId){
        return productService.getDetails(pId);
    }

    @GetMapping("/getwisebrand/{brand}")
    public List<ProductDto> getBrandWishProducts(@PathVariable String brand) {
        return productService.getBrandWishProducts(brand);
    }
    @GetMapping("/getwisesize/{size}")
    public List<ProductDto> getBrandWishSize(@PathVariable String size) {
        return productService.getSizeWishProducts(size);
    }
    @GetMapping("/bestselles")
    public List<ProductEntity> getBestSelles() {
        return productService.getBestSellesProducts();
    }
    @GetMapping("/newarrivals")
    public List<ProductEntity> newArrivals() {
        return productService.newArrivals();
    }
    @GetMapping("/freedelivery")
    public List<ProductDto> getFreeDelivery() {
        return productService.getFreeDelivery();
    }

    @GetMapping("/discounts")
    public List<ProductEntity> getDiscounts() {
        return productService.getDiscounts();
    }

    @GetMapping("/getbrands")
    public List<String> getBrands() {
        return productService.getBrands();
    }



    @GetMapping("/getcategory")
    public List<String> getCategories() {
        return productService.getCategories();
    }

    @GetMapping("/getgender")
    public List<String> getGender() {
        return productService.getGender();
    }


}


