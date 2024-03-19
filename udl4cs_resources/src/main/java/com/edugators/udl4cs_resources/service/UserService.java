package com.edugators.udl4cs_resources.service;

import com.edugators.udl4cs_resources.model.Users;
import com.edugators.udl4cs_resources.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;


    public List<Users> getAllUsers() {
        List<Users> users = new ArrayList<Users>();
        userRepository.findAll().forEach(user -> users.add(user));
        return users;
    }

    public Users getUserById(int id)
    {
        return userRepository.findById(id).get();
    }
    public void saveUser(Users user)
    {
        userRepository.save(user);
    }
}
