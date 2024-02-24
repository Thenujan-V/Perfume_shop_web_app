package com.project.perfumes.repository;

import com.project.perfumes.entity.OrderEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepo extends JpaRepository<OrderEntity, Long>{
}
