package com.edugators.udl4cs_resources.service;
import com.edugators.udl4cs_resources.model.User1;
import com.edugators.udl4cs_resources.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class User1Service {

    @Autowired
    private User1Repository user1Repository;

    @Autowired
    private ResourceRepository resourceRepository;

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private LikesRepository likesRepository;

    @Autowired
    private ResourceTagRepository resourceTagRepository;


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
        User1 newUser = new User1();
        newUser.setFirstName(user1.getFirstName());
        newUser.setLastName(user1.getLastName());
        newUser.setRole(user1.getRole());
        newUser.setEmail(user1.getEmail());
        newUser.setUserName(user1.getUserName());
        newUser.setPassword(user1.getPassword());
        newUser.setBase64ImageData(user1.getBase64ImageData());
        newUser.setImageData();
        user1Repository.save(user1);
    }

    public void updateuser1(User1 user1, int id)
    {
        User1 oldUser = user1Repository.findById(id).get();

        if (user1.getFirstName() != null)
            oldUser.setFirstName(user1.getFirstName());

        if (user1.getLastName() != null)
            oldUser.setLastName(user1.getLastName());

        if (user1.getRole() != null)
            oldUser.setRole(user1.getRole());

        if (user1.getEmail() != null)
            oldUser.setEmail(user1.getEmail());

        if (user1.getUserName() != null)
            oldUser.setUserName(user1.getUserName());

        if (user1.getPassword() != null)
            oldUser.setPassword(user1.getPassword());

        if (user1.getBase64ImageData() != null)
        {
            oldUser.setBase64ImageData(user1.getBase64ImageData());
            oldUser.setImageData();
        }

        user1Repository.save(oldUser);
    }

    public void deleteuser1(int id)
    {
        commentRepository.deleteByUser(id);
        likesRepository.deleteByUser(id);
        resourceRepository.deleteResourceTagsByUser(id);
        resourceRepository.deleteByUser(id);
        user1Repository.delete(user1Repository.findById(id).get());
    }
}
