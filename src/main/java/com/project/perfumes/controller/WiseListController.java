package com.project.perfumes.controller;

import com.project.perfumes.dto.WiseListDto;
import com.project.perfumes.service.WiseListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/wishlist")
public class WiseListController {

    @Autowired
    private WiseListService wiseListService;
//    @PostMapping("/create/{uId}/{pId}")
//    public WiseListDto createWishList(@RequestBody WiseListDto wiseListDto){
////        System.out.println(uId +" "+ pId);
//        return wiseListService.createWiseList(wiseListDto);
//    }

    @PostMapping("/create/{uId}/{pId}")
    public WiseListDto createWishList(@PathVariable Long uId, @PathVariable Long pId){
        return wiseListService.createWiseList(uId,pId);
    }
}

