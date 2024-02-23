package com.project.perfumes.service;

import com.project.perfumes.dto.WiseListDto;
import com.project.perfumes.entity.WiseListEntity;
import com.project.perfumes.repository.WiseListRepo;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WiseListServiceImpl implements WiseListService{
    @Autowired
    private WiseListRepo wiseListRepo;

    public WiseListServiceImpl(WiseListRepo wiseListRepo){this.wiseListRepo = wiseListRepo;}

    @Override
    public WiseListDto createWiseList(Long uId, Long pId) {
        System.out.println(uId +" "+ pId);

        WiseListEntity wiseListEntity = new WiseListEntity(
            uId,pId
        );
        wiseListRepo.save(wiseListEntity);
        return null;
    }


}
