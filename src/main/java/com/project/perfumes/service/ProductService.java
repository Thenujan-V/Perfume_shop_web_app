package com.project.perfumes.service;


import com.project.perfumes.dto.ProductDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ProductService {
    ProductDto createProducts(ProductDto productDto);

    List<ProductDto> getProducts();

    List<ProductDto> getFreeDelivery();

    List<String> getBrands();

    List<ProductDto> getDiscounts();

    List<ProductDto> getCategoryWishProducts(String category);

    List<ProductDto> getTypeWishProducts(String type);

    List<String> getTypes();

    List<String> getCategories();

    List<String> getGender();

    List<String> getSize();

    List<ProductDto> getBrandWishProducts(String brand);

    List<ProductDto> getSizeWishProducts(String size);
}
