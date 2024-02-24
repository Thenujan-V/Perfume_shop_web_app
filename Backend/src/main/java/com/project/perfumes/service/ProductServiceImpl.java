package com.project.perfumes.service;

import com.project.perfumes.dto.ProductDto;
import com.project.perfumes.entity.ProductEntity;
import com.project.perfumes.repository.ProductRepo;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductServiceImpl implements ProductService {
    @Autowired
    private ProductRepo productRepo;

    public ProductServiceImpl(ProductRepo productRepo) {
        this.productRepo = productRepo;
    }

    @Override
    public ProductDto createProducts(ProductDto productDto) {
        ProductEntity productEntity = new ProductEntity();
        BeanUtils.copyProperties(productDto, productEntity);
        productRepo.save(productEntity);

        return productDto;
    }

    @Override
    public List<ProductDto> getProducts() {
        List<ProductEntity> productEntities = productRepo.findAll();

        List<ProductDto> products = productEntities
                .stream()
                .<ProductDto>map(product -> new ProductDto(
                        product.getpId(),
                        product.getpName(),
                        product.getType(),
                        product.getCategory(),
                        product.getGender(),
                        product.getStatus(),
                        product.getBrand(),
                        product.getDescription(),
                        product.getImageURL(),
                        product.getPrice(),
                        product.getDiscount(),
                        product.getDeliveryCharge(),
                        product.getProductQuantity(),
                        product.getSize()
//                        product.getCreated_at(),
//                        product.getUpdated_at()
                        ))
                .collect(Collectors.toList());
        return products;
    }

    @Override
    public List<ProductDto> getFreeDelivery() {
        List<ProductEntity> productEntities = productRepo.findFreeDeliveryProducts();
        List<ProductDto> brnads = productEntities
                .stream()
                .map(freeDeleivery -> new ProductDto(
                        freeDeleivery.getpId(),
                        freeDeleivery.getpName(),
                        freeDeleivery.getType(),
                        freeDeleivery.getCategory(),
                        freeDeleivery.getGender(),
                        freeDeleivery.getStatus(),
                        freeDeleivery.getBrand(),
                        freeDeleivery.getDescription(),
                        freeDeleivery.getImageURL(),
                        freeDeleivery.getPrice(),
                        freeDeleivery.getDiscount(),
                        freeDeleivery.getDeliveryCharge(),
                        freeDeleivery.getProductQuantity(),
                        freeDeleivery.getSize()
//                        freeDeleivery.getCreated_at(),
//                        freeDeleivery.getUpdated_at()
                )).collect(Collectors.toList());
        return brnads;
    }

    @Override
    public List<String> getBrands() {
        return productRepo.findAllBrands();
    }

    @Override
    public List<ProductDto> getDiscounts() {
        List<ProductEntity> productEntities = productRepo.discountProducts();
        List<ProductDto> discounts = (List<ProductDto>) productEntities
                .stream()
                .map(discount -> new ProductDto(
                        discount.getpId(),
                        discount.getpName(),
                        discount.getType(),
                        discount.getCategory(),
                        discount.getGender(),
                        discount.getStatus(),
                        discount.getBrand(),
                        discount.getDescription(),
                        discount.getImageURL(),
                        discount.getPrice(),
                        discount.getDiscount(),
                        discount.getDeliveryCharge(),
                        discount.getProductQuantity(),
                        discount.getSize()
//                        discount.getCreated_at(),
//                        discount.getUpdated_at()
                )).collect(Collectors.toList());
        return discounts;
    }


    @Override
    public List<ProductDto> getCategoryWishProducts(String category) {
        List<ProductEntity> productEntities = productRepo.findAllByCategory(category);

        List<ProductDto> categoryProducts = (List<ProductDto>) productEntities
                .stream()
                .map(product -> new ProductDto(
                        product.getpId(),
                        product.getpName(),
                        product.getType(),
                        product.getCategory(),
                        product.getGender(),
                        product.getStatus(),
                        product.getBrand(),
                        product.getDescription(),
                        product.getImageURL(),
                        product.getPrice(),
                        product.getDiscount(),
                        product.getDeliveryCharge(),
                        product.getProductQuantity(),
                        product.getSize()
//                        product.getCreated_at(),
//                        product.getUpdated_at()
                )).collect(Collectors.toList());
        return categoryProducts;
    }

    @Override
    public List<ProductDto> getTypeWishProducts(String type) {
        List<ProductEntity> productEntities = productRepo.findByType(type);

        List<ProductDto> typeProducts = (List<ProductDto>) productEntities
                .stream()
                .map(product -> new ProductDto(
                        product.getpId(),
                        product.getpName(),
                        product.getType(),
                        product.getCategory(),
                        product.getGender(),
                        product.getStatus(),
                        product.getBrand(),
                        product.getDescription(),
                        product.getImageURL(),
                        product.getPrice(),
                        product.getDiscount(),
                        product.getDeliveryCharge(),
                        product.getProductQuantity(),
                        product.getSize()
//                        product.getCreated_at(),
//                        product.getUpdated_at()
                )).collect(Collectors.toList());
        return typeProducts;
    }
    @Override
    public List<ProductDto> getBrandWishProducts(String brand) {
        List<ProductEntity> productEntities = productRepo.findByBrand(brand);

        List<ProductDto> brandProducts = (List<ProductDto>) productEntities
                .stream()
                .map(product -> new ProductDto(
                        product.getpId(),
                        product.getpName(),
                        product.getType(),
                        product.getCategory(),
                        product.getGender(),
                        product.getStatus(),
                        product.getBrand(),
                        product.getDescription(),
                        product.getImageURL(),
                        product.getPrice(),
                        product.getDiscount(),
                        product.getDeliveryCharge(),
                        product.getProductQuantity(),
                        product.getSize()
//                        product.getCreated_at(),
//                        product.getUpdated_at()
                )).collect(Collectors.toList());
        return brandProducts;
    }

    @Override
    public List<ProductDto> getSizeWishProducts(String size) {
        List<ProductEntity> productEntities = productRepo.findBySize(size);

        List<ProductDto> sizeProducts = (List<ProductDto>) productEntities
                .stream()
                .map(product -> new ProductDto(
                        product.getpId(),
                        product.getpName(),
                        product.getType(),
                        product.getCategory(),
                        product.getGender(),
                        product.getStatus(),
                        product.getBrand(),
                        product.getDescription(),
                        product.getImageURL(),
                        product.getPrice(),
                        product.getDiscount(),
                        product.getDeliveryCharge(),
                        product.getProductQuantity(),
                        product.getSize()
//                        product.getCreated_at(),
//                        product.getUpdated_at()
                )).collect(Collectors.toList());
        return sizeProducts;
    }

    @Override
    public List<ProductEntity> getDetails(Long pId) {
        return productRepo.findAllById(Collections.singleton(pId));
    }

    @Override
    public List<String> getTypes() {
        return productRepo.findAllType();
    }

    @Override
    public List<String> getCategories() {
        return productRepo.findAllCategory();
    }

    @Override
    public List<String> getGender() {
        return productRepo.findAllGender();
    }

    @Override
    public List<String> getSize() {
        return productRepo.findAllSize();
    }




}
