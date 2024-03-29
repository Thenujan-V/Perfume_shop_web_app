package com.project.perfumes.dto;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrderDto {
    private Long oId;
    private Long uId;
    private Date createdAt;
    private String userAddress;
    private String status;
    private String firstName;
    private String lastName;
    private Integer phoneNo;
    private String email;
}
