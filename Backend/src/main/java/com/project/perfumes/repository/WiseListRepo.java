package com.project.perfumes.repository;
import com.project.perfumes.dto.WiseListDto;
import com.project.perfumes.entity.CartEntity;
import com.project.perfumes.entity.ProductEntity;
import com.project.perfumes.entity.WiseListEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface WiseListRepo extends JpaRepository<WiseListEntity, Long> {
    @Query("SELECT w FROM WiseListEntity w WHERE w.uId = :uId and w.pId = :pId")
    Optional<WiseListEntity> findSameItems(Long uId, Long pId);
    @Query("SELECT p FROM ProductEntity p JOIN WiseListEntity w ON p.pId = w.pId WHERE w.uId = :uId")
    List<ProductEntity> findAllProducts(Long uId);
}