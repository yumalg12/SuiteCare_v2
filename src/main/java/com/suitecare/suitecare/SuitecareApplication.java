package com.suitecare.suitecare;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class SuitecareApplication {

	public static void main(String[] args) {
		SpringApplication.run(SuitecareApplication.class, args);
	}

}
