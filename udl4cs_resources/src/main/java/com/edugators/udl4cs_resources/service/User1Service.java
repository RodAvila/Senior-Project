package com.edugators.udl4cs_resources.service;
import com.edugators.udl4cs_resources.model.User1;
import com.edugators.udl4cs_resources.repository.User1Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class User1Service {

    @Autowired
    User1Repository user1Repository;


    public List<User1> getAlluser1s() {
        List<User1> user1s = new ArrayList<User1>();
        user1Repository.findAll().forEach(user1 -> user1s.add(user1));
        return user1s;
    }

    public User1 getuser1ById(int id)
    {
        return user1Repository.findById(id).get();
    }
    public void saveuser1(User1 user1)
    {
        user1Repository.save(user1);
    }
}
