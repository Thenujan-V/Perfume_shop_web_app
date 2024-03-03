package com.project.perfumes.service;
import com.project.perfumes.dto.WiseListDto;
import com.project.perfumes.entity.ProductEntity;

import java.util.List;

public interface WiseListService {
    WiseListDto createWiseList(Long uId, Long pId);

    List<ProductEntity> getAllWiseList(Long uId);

    boolean checkWiselist(Long uId, Long pId);
}
