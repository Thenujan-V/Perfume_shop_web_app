package com.project.perfumes.repository;

import com.project.perfumes.entity.CartEntity;
import com.project.perfumes.entity.OrderEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OrderRepo extends JpaRepository<OrderEntity, Long> {
}
