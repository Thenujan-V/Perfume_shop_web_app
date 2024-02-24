package com.project.perfumes.repository;

import com.project.perfumes.entity.CartEntity;
import com.project.perfumes.entity.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CartRepo extends JpaRepository<CartEntity, Long> {
    @Query("SELECT p FROM ProductEntity p JOIN CartEntity c ON p.pId = c.pId WHERE c.uId = :uId")
    List<ProductEntity> findAllProducts(Long uId);
}
