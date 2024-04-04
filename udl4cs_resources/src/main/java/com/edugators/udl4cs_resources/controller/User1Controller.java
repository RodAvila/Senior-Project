package com.edugators.udl4cs_resources.controller;
import com.edugators.udl4cs_resources.model.User1;
import com.edugators.udl4cs_resources.model.Resource;
import com.edugators.udl4cs_resources.service.ResourceService;
import com.edugators.udl4cs_resources.service.User1Service;


import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class User1Controller {
    @Autowired
    User1Service user1Service;

    @PostMapping(value = "/user1")
    public void saveuser1(@Valid @RequestBody User1 user1) {
        user1Service.saveuser1(user1);
    }

    @GetMapping(value = "/user1")
    public List<User1> getAlluser1s() {
        return user1Service.getAlluser1s();
    }

    @GetMapping("/user1/{id}")
    public User1 getuser1(@PathVariable("id") int id)
    {
        return user1Service.getuser1ById(id);
    }

    @PutMapping(value = "/user1/{id}", headers = "Accept=application/json")
    public void updateUser1(@RequestBody User1 user, @PathVariable("id") int id) {
        user1Service.updateuser1(user, id);
    }

    @DeleteMapping("/user1/{id}")
    public void deleteUser1(@PathVariable("id") int id)
    {
        user1Service.deleteuser1(id);
    }
}