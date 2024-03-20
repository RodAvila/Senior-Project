package com.edugators.udl4cs_resources.service;

import com.edugators.udl4cs_resources.model.user1s;
import com.edugators.udl4cs_resources.repository.user1Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class user1Service {

    @Autowired
    user1Repository user1Repository;


    public List<user1s> getAlluser1s() {
        List<user1s> user1s = new ArrayList<user1s>();
        user1Repository.findAll().forEach(user1 -> user1s.add(user1));
        return user1s;
    }

    public user1s getuser1ById(int id)
    {
        return user1Repository.findById(id).get();
    }
    public void saveuser1(user1s user1)
    {
        user1Repository.save(user1);
    }
}
