package com.project.perfumes.repository;

import com.project.perfumes.dto.ProductDto;
import com.project.perfumes.entity.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@EnableJpaRepositories
public interface ProductRepo extends JpaRepository<ProductEntity, Long> {
    @Query("SELECT p FROM ProductEntity p WHERE p.deliveryCharge = 0")
    List<ProductEntity> findFreeDeliveryProducts();

    @Query("SELECT DISTINCT p.brand FROM ProductEntity p")
    List<String> findAllBrands();

    @Query("SELECT DISTINCT p.category FROM ProductEntity p")
    List<String> findAllCategory();
    @Query("SELECT DISTINCT p.gender FROM ProductEntity p")
    List<String> findAllGender();
    @Query("SELECT DISTINCT p.size FROM ProductEntity p")
    List<String> findAllSize();
    @Query("SELECT p FROM ProductEntity p WHERE p.discount > 0")
    List<ProductEntity> discountProducts();
    @Query("SELECT p FROM ProductEntity p WHERE p.category = :category")
    List<ProductEntity> findAllByCategory(@Param("category") String category);
    @Query("SELECT p FROM ProductEntity p WHERE p.brand = :brand")
    List<ProductEntity> findByBrand(@Param("brand") String brand);
    @Query("SELECT p FROM ProductEntity p WHERE p.size = :size")
    List<ProductEntity> findBySize(@Param("size") String size);
    @Query("SELECT p FROM ProductEntity p ORDER BY p.buycount  DESC")
    List<ProductEntity> getbestSelles();

    @Query("SELECT p FROM ProductEntity p ORDER BY p.createdAt  DESC")
    List<ProductEntity> newArrivals();

}