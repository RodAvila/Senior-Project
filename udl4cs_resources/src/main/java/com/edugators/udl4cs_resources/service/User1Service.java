package com.edugators.udl4cs_resources.service;
import com.edugators.udl4cs_resources.model.User1;
import com.edugators.udl4cs_resources.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

/*
This class manages user-related functionalities within a
Spring Boot application. It offers methods for retrieving all users,
retrieving a user by their ID, saving a new user, updating user
information, deleting a user and associated data, and finding a user by
their username. The class effectively utilizes Spring Boot's dependency
injection mechanism (@Autowired) to integrate instances of repositories
required for database operations and business logic.
*/

@Service
public class User1Service {

    // Autowired User1Repository for CRUD operations on User1 entities
    @Autowired
    private User1Repository user1Repository;

    // Autowired ResourceRepository for accessing resource-related functionalities
    @Autowired
    private ResourceRepository resourceRepository;

    // Autowired CommentRepository for accessing comment-related functionalities
    @Autowired
    private CommentRepository commentRepository;

    // Autowired LikesRepository for accessing like-related functionalities
    @Autowired
    private LikesRepository likesRepository;

    // Autowired ResourceTagRepository for accessing resource tag-related functionalities
    @Autowired
    private ResourceTagRepository resourceTagRepository;

    // Function to retrieve all users from the database
    public List<User1> getAlluser1s() {
        List<User1> user1s = new ArrayList<User1>();
        // Retrieve all users from the repository and add them to the list
        user1Repository.findAll().forEach(user1 -> user1s.add(user1));
        return user1s;
    }

    // Function to retrieve a user by their ID
    public User1 getuser1ById(int id) {
        return user1Repository.findById(id).get();
    }

    // Function to save a new user
    public void saveuser1(User1 user1) {
        // Create a new user instance
        User1 newUser = new User1();
        // Set user properties
        newUser.setFirstName(user1.getFirstName());
        newUser.setLastName(user1.getLastName());
        newUser.setRole(user1.getRole());
        newUser.setEmail(user1.getEmail());
        newUser.setUserName(user1.getUserName());
        newUser.setPassword(user1.getPassword());
        newUser.setImageLink(user1.getImageLink());
        // Save the new user to the database
        user1Repository.save(newUser);
    }

    // Function to update a user's information
    public void updateuser1(User1 user1, int id) {
        // Retrieve the existing user by their ID
        User1 oldUser = user1Repository.findById(id).get();

        // Update user properties if provided
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

        if (user1.getImageLink() != null)
            oldUser.setImageLink(user1.getImageLink());

        // Save the updated user to the database
        user1Repository.save(oldUser);
    }

    // Function to delete a user and associated data by their ID
    public void deleteuser1(int id) {
        // Delete comments by the user
        commentRepository.deleteByUser(id);
        // Delete likes by the user
        likesRepository.deleteByUser(id);
        // Delete resource tags associated with resources owned by the user
        resourceRepository.deleteResourceTagsByUser(id);
        // Delete resources owned by the user
        resourceRepository.deleteByUser(id);
        // Delete the user
        user1Repository.delete(user1Repository.findById(id).get());
    }

    // Function to find a user by their username
    public User1 findByUsername(String username) {
        return user1Repository.findByUsername(username);
    }
}
