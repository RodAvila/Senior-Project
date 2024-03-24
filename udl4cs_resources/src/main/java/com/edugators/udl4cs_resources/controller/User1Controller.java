package com.edugators.udl4cs_resources.controller;
import com.edugators.udl4cs_resources.model.User1;
import com.edugators.udl4cs_resources.service.User1Service;


import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class User1Controller {
    @Autowired
    User1Service user1Service;
    @Autowired
    PasswordEncoder passwordEncoder;

//    public User1Controller(User1Service user1Service) {
//        this.user1Service = user1Service;
////        user1Service.saveuser1(new user1s("John", "Doe", "Teacher", "jdoe@coe.edu", "johndoe", "password123"));
////        user1Service.saveuser1(new user1s("Mary", "Doer", "Professor", "mdoer@coe.edu", "maryjoe", "password1234"));
////        //user1Service.saveuser1(new user1s(2, "Juliet", "Doeseph", "Teacher", "jdoeseph@coe.edu", "julietdoe", "password12345"));
//    }

    @PostMapping(value = "/user1", headers = "Accept=application/json")
    public void saveuser1(@Valid @RequestBody User1 user1) {
        //Resource newResource = new Resource(0, 0, 0, resource.get("resourceTitle").toString(), resource.get("resourceDesc").toString());
        String plainPassword = user1.getPassword();
        user1.setPassword(passwordEncoder.encode(plainPassword).toString());
        user1Service.saveuser1(user1);
    }


   /* public User1Controller(User1Service user1Service) {
        this.user1Service = user1Service;
        //user1Service.saveuser1(new User1("John", "Doe", "Teacher", "jdoe@coe.edu", "johndoe", "password123"));
        //user1Service.saveuser1(new User1("Mary", "Doer", "Professor", "mdoer@coe.edu", "maryjoe", "password1234"));
        //user1Service.saveuser1(new User1(2, "Juliet", "Doeseph", "Teacher", "jdoeseph@coe.edu", "julietdoe", "password12345"));
    }*/
    @GetMapping(value = "/user1")
    public List<User1> getAlluser1s() {
        return user1Service.getAlluser1s();
    }

    @GetMapping("/user1/{id}")
    private User1 getuser1(@PathVariable("id") int id)
    {
        return user1Service.getuser1ById(id);
    }
}
