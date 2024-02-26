package com.project.perfumes.dto;

import jakarta.persistence.Column;

import java.util.Date;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProductDto {
    private long pId;
    private String pName;
    private String category;
    private String description;
    private String brand;
    private String gender;
    private String status;
    private String imageURL;
    private int price;
    private int discount;
    private int deliveryCharge;
    private int productQuantity;
    private int size;
//    private Date updated_at;
//    private Date created_at;

//    public ProductDto(long pId, String pName, String category, String type, String description, String brand, String gender, String status, String imageURL, int price, int discount, int deliveryCharge, int productQuantity, int size) {
//
//        this.pId = pId;
//        this.pName = pName;
//        this.category = category;
//        this.description = description;
//        this.brand = brand;
//        this.gender = gender;
//        this.status = status;
//        this.imageURL = imageURL;
//        this.price = price;
//        this.discount = discount;
//        this.deliveryCharge = deliveryCharge;
//        this.productQuantity = productQuantity;
//        this.size = size;
//        this.updated_at = updated_at;
//        this.created_at = created_at;
//    }

//    public long getpId() {
//        return pId;
//    }
//
//    public void setpId(long pId) {
//        this.pId = pId;
//    }
//
//    public String getpName() {
//        return pName;
//    }
//
//    public void setpName(String pName) {
//        this.pName = pName;
//    }
//
//    public String getCategory() {
//        return category;
//    }
//
//    public void setCategory(String category) {
//        this.category = category;
//    }
//
//    public String getDescription() {
//        return description;
//    }
//
//    public void setDescription(String description) {
//        this.description = description;
//    }
//
//    public String getBrand() {
//        return brand;
//    }
//
//    public void setBrand(String brand) {
//        this.brand = brand;
//    }
//
//    public String getGender() {
//        return gender;
//    }
//
//    public void setGender(String gender) {
//        this.gender = gender;
//    }
//
//    public String getStatus() {
//        return status;
//    }
//
//    public void setStatus(String status) {
//        this.status = status;
//    }
//
//    public String getImageURL() {
//        return imageURL;
//    }
//
//    public void setImageURL(String imageURL) {
//        this.imageURL = imageURL;
//    }
//
//    public int getPrice() {
//        return price;
//    }
//
//    public void setPrice(int price) {
//        this.price = price;
//    }
//
//    public int getDiscount() {
//        return discount;
//    }
//
//    public void setDiscount(int discount) {
//        this.discount = discount;
//    }
//
//    public int getDeliveryCharge() {
//        return deliveryCharge;
//    }
//
//    public void setDeliveryCharge(int deliveryCharge) {
//        this.deliveryCharge = deliveryCharge;
//    }
//
//    public int getProductQuantity() {
//        return productQuantity;
//    }
//
//    public void setProductQuantity(int productQuantity) {
//        this.productQuantity = productQuantity;
//    }
//
//    public int getSize() {
//        return size;
//    }
//
//    public void setSize(int size) {
//        this.size = size;
//    }


}
