package com.project.perfumes.repository;

import com.project.perfumes.entity.OrderEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OrderRepo extends JpaRepository<OrderEntity, Long> {
    @Query("SELECT o.oId FROM OrderEntity o WHERE o.uId = :uId")
    List<Integer> findOid(Long uId);

    @Query("SELECT o,p FROM OrderproductsEntity o JOIN ProductEntity p ON o.pId = p.pId where o.oId  = :OrderId")
    List<Object[]> getAllOrderdItems(Integer OrderId);
}

