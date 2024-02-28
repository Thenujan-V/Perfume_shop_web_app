package com.project.perfumes.service;


import com.project.perfumes.dto.ProductDto;
import com.project.perfumes.entity.ProductEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ProductService {
    ProductDto createProducts(ProductDto productDto);

    List<ProductDto> getProducts();

    List<ProductDto> getFreeDelivery();

    List<String> getBrands();

    List<ProductEntity> getDiscounts();

    List<ProductDto> getCategoryWishProducts(String category);
    List<String> getCategories();

    List<String> getGender();

    List<String> getSize();

    List<ProductDto> getBrandWishProducts(String brand);

    List<ProductDto> getSizeWishProducts(String size);

    List<ProductEntity> getDetails(Long pId);

    List<ProductEntity> getBestSellesProducts();

    List<ProductEntity> newArrivals();
}
