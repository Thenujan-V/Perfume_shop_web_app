package com.project.perfumes.repository;

import com.project.perfumes.entity.OrderproductsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderProductsRepo extends JpaRepository<OrderproductsEntity, Long> {

}
