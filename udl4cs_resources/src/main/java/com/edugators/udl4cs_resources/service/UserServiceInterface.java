package com.edugators.udl4cs_resources.service;
import com.edugators.udl4cs_resources.model.User;
import java.util.List;

public interface UserServiceInterface {
    List<User> getAllUsers();

    User saveUser(User user);
}
