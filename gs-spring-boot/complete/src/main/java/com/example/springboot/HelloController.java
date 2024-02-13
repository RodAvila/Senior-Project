package com.example.springboot;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class HelloController {

	@GetMapping("/")
	public String index() {
		return "tester.html";
	}

	@GetMapping("/test")
	public String index_test() { return "Test"; }
}
