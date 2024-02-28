package com.project.perfumes.repository;

import com.project.perfumes.entity.CartEntity;
import com.project.perfumes.entity.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CartRepo extends JpaRepository<CartEntity, Long> {
    @Query("SELECT c FROM CartEntity c WHERE c.uId = :uId and c.pId = :pId")
    Optional<CartEntity> findSameItems(Long uId, Long pId);
    @Query("SELECT p FROM ProductEntity p JOIN CartEntity c ON p.pId = c.pId WHERE c.uId = :uId")
    List<ProductEntity> findAllProducts(Long uId);

    @Query("SELECT c FROM CartEntity c WHERE c.uId = :uId")
    List<CartEntity> findProducts(Long uId);

    @Query("SELECT c.pId FROM CartEntity c WHERE c.uId = :uId")
    List<Integer> findPid(Long uId);
    @Query("SELECT c.quantity FROM CartEntity c WHERE c.uId = :uId")
    List<Integer> findQuantity(Long uId);
}
