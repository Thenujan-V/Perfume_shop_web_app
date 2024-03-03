package com.project.perfumes.service;

import com.project.perfumes.dto.WiseListDto;
import com.project.perfumes.entity.CartEntity;
import com.project.perfumes.entity.ProductEntity;
import com.project.perfumes.entity.WiseListEntity;
import com.project.perfumes.repository.WiseListRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WiseListServiceImpl implements WiseListService{
    @Autowired
    private WiseListRepo wiseListRepo;

    public WiseListServiceImpl(WiseListRepo wiseListRepo){this.wiseListRepo = wiseListRepo;}

    @Override
    public WiseListDto createWiseList(Long uId, Long pId) {
        WiseListEntity wiseListEntity = new WiseListEntity();
            wiseListEntity.setPId(pId);
            wiseListEntity.setUId(uId);

        wiseListRepo.save(wiseListEntity);

        WiseListDto wiseListDto = new WiseListDto();
        wiseListDto.setPId(pId);
        return wiseListDto;
    }

    @Override
    public List<ProductEntity> getAllWiseList(Long uId) {
        return wiseListRepo.findAllProducts(uId);
    }

    @Override
    public boolean checkWiselist(Long uId, Long pId) {
        Optional<WiseListEntity> wiseListEntityOptional = wiseListRepo.findSameItems(uId,pId);
        if(wiseListEntityOptional.isPresent()){
            System.out.println("true");
            return true;
        }
        else{
            System.out.println("false");
            return false;
        }
    }
}