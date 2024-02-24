package com.project.perfumes.dto;

import jakarta.persistence.Column;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;

public class OrderDto {
    private Long oId;
    private Long pId;
    private Long uId;
    private Date createdAt;
    private Integer quantity;
    private String status;
}
