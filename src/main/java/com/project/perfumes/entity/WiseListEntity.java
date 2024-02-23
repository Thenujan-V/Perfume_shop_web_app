package com.project.perfumes.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;

@Entity
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Wiselist")
public class WiseListEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long wId;
    private Long pId;
    private Long uId;
    @Column(name = "created_at", nullable = false, updatable = false)
    @CreationTimestamp
    private Date createdAt;


}
