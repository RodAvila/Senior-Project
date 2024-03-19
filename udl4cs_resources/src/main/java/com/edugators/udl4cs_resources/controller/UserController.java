package com.edugators.udl4cs_resources.controller;
import com.edugators.udl4cs_resources.model.Resource;
import com.edugators.udl4cs_resources.model.User;
import com.edugators.udl4cs_resources.service.ResourceService;
import com.edugators.udl4cs_resources.service.UserService;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    @Autowired
    private PasswordEncoder passwordEncoder;
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
        userService.saveUser(new User(0, "John", "Doe", "Teacher", "jdoe@coe.edu", "johndoe", "password123"));
        userService.saveUser(new User(1, "Mary", "Doer", "Professor", "mdoer@coe.edu", "maryjoe", "password1234"));
        userService.saveUser(new User(2, "Juliet", "Doeseph", "Teacher", "jdoeseph@coe.edu", "julietdoe", "password12345"));
    }

    @PostMapping(value = "/users", headers = "Accept=application/json")
    public User saveUser(@RequestBody Map<String, Object> user) {
        String plainPassword = user.get("password").toString();
        String encodedPassword = passwordEncoder.encode(plainPassword);
        User newUser = new User(0, user.get("firstName").toString(), user.get("lastName").toString(), user.get("role").toString(), user.get("email").toString(), user.get("username").toString(), encodedPassword);
        User returnedUser = userService.saveUser(newUser);
        //Create JWT Token
        return returnedUser;
    }

    @GetMapping(value = "/users")
    public List<User> getAllUsers() {
        //Post JWT Token to front-end
        return userService.getAllUsers();
    }
}
