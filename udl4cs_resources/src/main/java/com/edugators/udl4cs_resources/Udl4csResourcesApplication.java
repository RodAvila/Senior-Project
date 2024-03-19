package com.edugators.udl4cs_resources;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class Udl4csResourcesApplication {

	public static void main(String[] args) {
		SpringApplication.run(Udl4csResourcesApplication.class, args);
	}

}
