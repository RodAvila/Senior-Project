package com.edugators.udl4cs_resources.controller;
import com.edugators.udl4cs_resources.model.Resource;
import com.edugators.udl4cs_resources.model.Users;
import com.edugators.udl4cs_resources.service.ResourceService;
import com.edugators.udl4cs_resources.service.UserService;


import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    @Autowired
    UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
        userService.saveUser(new Users(0, "John", "Doe", "Teacher", "jdoe@coe.edu", "johndoe", "password123"));
        userService.saveUser(new Users(1, "Mary", "Doer", "Professor", "mdoer@coe.edu", "maryjoe", "password1234"));
        userService.saveUser(new Users(2, "Juliet", "Doeseph", "Teacher", "jdoeseph@coe.edu", "julietdoe", "password12345"));
    }

    @PostMapping(value = "/users", headers = "Accept=application/json")
    public void saveUser(@Valid @RequestBody Users user) {
        //Resource newResource = new Resource(0, 0, 0, resource.get("resourceTitle").toString(), resource.get("resourceDesc").toString());
        userService.saveUser(user);
    }
    @GetMapping(value = "/users")
    public List<Users> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/users/{id}")
    private Users getUser(@PathVariable("id") int id)
    {
        return userService.getUserById(id);
    }
}

