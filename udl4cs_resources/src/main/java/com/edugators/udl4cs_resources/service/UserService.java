package com.edugators.udl4cs_resources.service;

import com.edugators.udl4cs_resources.model.Resource;
import com.edugators.udl4cs_resources.model.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements UserServiceInterface {

    private List<User> userRepository;
    int count = 0;

    public UserService(List<User> userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository;
    }

    @Override
    public User saveUser(User user) {
        user.setId(count);
        count++;
        userRepository.add(user);
        return user;
    }
}
