package com.project.perfumes.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;
@Data
@Entity
@Table(name = "product")
public class ProductEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pId;
    private String pName;
    private String category;
    private String description;
    private String brand;
    private String gender;
    @Column(nullable = true, columnDefinition = "VARCHAR(20) DEFAULT 'available'")
    private String status;

    @Column(nullable = true, columnDefinition = "INT DEFAULT 0")
    private Integer buycount;
    @Column(length = 225)
    private String imageURL;
    private int price;
    private int discount;
    private int deliveryCharge;
    private int productQuantity;
    private int size;
    @Column(nullable = true, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP")
    private Date updated_at;

    @Column(nullable = false, updatable = false)
    @CreationTimestamp
    private Date createdAt;

    // Getter and Setter methods with corrected naming convention


}