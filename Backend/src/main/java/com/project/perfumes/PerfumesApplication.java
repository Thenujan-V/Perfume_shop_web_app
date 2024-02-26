package com.project.perfumes;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;


@SpringBootApplication
//@EntityScan("com.project.perfumes.entity")
public class PerfumesApplication {

	public static void main(String[] args) {
		SpringApplication.run(PerfumesApplication.class, args);
	}

}
