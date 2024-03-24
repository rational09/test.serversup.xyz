package com.example.myspringbootapp;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.Instant;

@RestController
public class HelloController {

    @GetMapping("/springboot")
    public String hello() {
        long startTime = System.currentTimeMillis();

        // Perform any additional processing or logic here

        long endTime = System.currentTimeMillis();
        long responseTime = endTime - startTime;

        // Construct the response JSON with response time
        return "{\"Process\": \"SpringBoot\", \"Port\": \"9000\", \"Message\": \"SpringBoot says hello!\", \"ResponseTime\": \"" + responseTime + " ms\"}";
    }
}

