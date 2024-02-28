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
    @Column(columnDefinition = "DEFAULT 'available'")
    private String status;
    @Column(columnDefinition = "INT DEFAULT 0")
    private Integer buycount;
    @Column(length = 225)
    private String imageURL;
    private int price;
    private int discount;
    private int deliveryCharge;
    private int productQuantity;
    private int size;
    @Column(columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Date updated_at;
    @Column(name = "created_at", nullable = false, updatable = false)
    @CreationTimestamp
    private Date created_at;

    // Getter and Setter methods with corrected naming convention


}
