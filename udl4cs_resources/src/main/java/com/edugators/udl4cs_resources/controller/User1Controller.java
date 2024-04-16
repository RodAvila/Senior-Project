package com.edugators.udl4cs_resources.controller;

import com.edugators.udl4cs_resources.model.User1;
import com.edugators.udl4cs_resources.service.User1Service;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class User1Controller {
    @Autowired
    User1Service user1Service;
    @Autowired
    PasswordEncoder passwordEncoder;

    @PostMapping(value = "/user1", headers = "Accept=application/json")
    public void saveuser1(@Valid @RequestBody User1 user1) {
        String plainPassword = user1.getPassword();
        user1.setPassword(passwordEncoder.encode(plainPassword));
        user1Service.saveuser1(user1);
    }

    @GetMapping(value = "/user1")
    public List<User1> getAlluser1s() {
        return user1Service.getAlluser1s();
    }

    @GetMapping("/user1/{id}")
    public User1 getuser1(@PathVariable("id") int id) {
        return user1Service.getuser1ById(id);
    }

    @PutMapping(value = "/user1/{id}")
    public void updateUser1(@RequestBody User1 user, @PathVariable("id") int id) {
        user1Service.updateuser1(user, id);
    }

    @DeleteMapping("/user1/{id}")
    public void deleteUser1(@PathVariable("id") int id) {
        user1Service.deleteuser1(id);
    }
}
