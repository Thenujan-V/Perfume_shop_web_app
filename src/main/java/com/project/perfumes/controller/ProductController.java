package com.project.perfumes.controller;

import com.project.perfumes.dto.ProductDto;
import com.project.perfumes.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping("/addproducts")
    public ProductDto createProducts(@RequestBody ProductDto productDto) {
        return productService.createProducts(productDto);
    }

    @GetMapping("/getProducts/")
    public List<ProductDto> getAllProducts() {
        return productService.getProducts();
    }

    @GetMapping("/getProducts/{category}")
    public List<ProductDto> getProducts(@PathVariable String category) {
        System.out.println(category);
        return productService.getCategoryWishProducts(category);
    }

    @GetMapping("/gettypeswishProducts/{type}")
    public List<ProductDto> getTypeWishProducts(@PathVariable String type) {
        System.out.println(type);
        return productService.getTypeWishProducts(type);
    }

    @GetMapping("/getfreedelivery")
    public List<ProductDto> getFreeDelivery() {
        return productService.getFreeDelivery();
    }

    @GetMapping("/getbrands")
    public List<String> getBrands() {
        return productService.getBrands();
    }

    @GetMapping("/gettypes")
    public List<String> getTypes() {
        return productService.getTypes();
    }

    @GetMapping("/getcategory")
    public List<String> getCategories() {
        return productService.getCategories();
    }

    @GetMapping("/getgender")
    public List<String> getGender() {
        return productService.getGender();
    }

    @GetMapping("/getdiscounts")
    public List<ProductDto> getDiscounts() {
        return productService.getDiscounts();
    }
}


