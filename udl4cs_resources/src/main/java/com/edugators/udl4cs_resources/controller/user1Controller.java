package com.edugators.udl4cs_resources.controller;
import com.edugators.udl4cs_resources.model.Resource;
import com.edugators.udl4cs_resources.model.user1s;
import com.edugators.udl4cs_resources.service.ResourceService;
import com.edugators.udl4cs_resources.service.user1Service;


import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class user1Controller {
    @Autowired
    user1Service user1Service;

    public user1Controller(user1Service user1Service) {
        this.user1Service = user1Service;
        user1Service.saveuser1(new user1s("John", "Doe", "Teacher", "jdoe@coe.edu", "johndoe", "password123"));
        user1Service.saveuser1(new user1s("Mary", "Doer", "Professor", "mdoer@coe.edu", "maryjoe", "password1234"));
        //user1Service.saveuser1(new user1s(2, "Juliet", "Doeseph", "Teacher", "jdoeseph@coe.edu", "julietdoe", "password12345"));
    }

    @PostMapping(value = "/user1s", headers = "Accept=application/json")
    public void saveuser1(@Valid @RequestBody user1s user1) {
        //Resource newResource = new Resource(0, 0, 0, resource.get("resourceTitle").toString(), resource.get("resourceDesc").toString());
        user1Service.saveuser1(user1);
    }
    @GetMapping(value = "/user1s")
    public List<user1s> getAlluser1s() {
        return user1Service.getAlluser1s();
    }

    @GetMapping("/user1s/{id}")
    private user1s getuser1(@PathVariable("id") int id)
    {
        return user1Service.getuser1ById(id);
    }
}

