package com.project.perfumes;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.web.bind.annotation.CrossOrigin;


@SpringBootApplication
@CrossOrigin("*")

//@EntityScan("com.project.perfumes.entity")
public class PerfumesApplication {

	public static void main(String[] args) {
		SpringApplication.run(PerfumesApplication.class, args);
	}

}
