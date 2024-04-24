package com.edugators.udl4cs_resources.service;
import com.edugators.udl4cs_resources.model.Tag;
import com.edugators.udl4cs_resources.repository.TagRepository;
import com.edugators.udl4cs_resources.repository.ResourceRepository;
import com.edugators.udl4cs_resources.repository.User1Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.List;
import com.edugators.udl4cs_resources.model.Resource;
import com.edugators.udl4cs_resources.model.User1;

/*
This class provides functionalities for managing tags within
a Spring Boot application. It offers methods for retrieving all tags,
retrieving a tag by its ID, deleting a tag (restricted to admin users),
and saving a new tag. The class leverages Spring Boot's dependency injection
mechanism (@Autowired) to integrate instances of repositories and services
required for database operations and business logic.
*/

@Service
public class TagService {

    // Autowired TagRepository for CRUD operations on Tag entities
    @Autowired
    private TagRepository tagRepository;

    // Autowired User1Service for accessing User1-related functionalities
    @Autowired
    private User1Service user1Service;

    // Function to retrieve all tags from the database
    public List<Tag> getAllTags() {
        List<Tag> tags = new ArrayList<Tag>();
        // Retrieve all tags from the repository and add them to the list
        tagRepository.findAll().forEach(tag -> tags.add(tag));
        return tags;
    }

    // Function to retrieve a tag by its ID
    public Tag getTagById(int id) {
        return tagRepository.findById(id).get();
    }

    // Function to delete a tag by its ID and user ID
    public void deleteTag(int id, int userid) {
        // Retrieve user by ID
        User1 user = user1Service.getuser1ById(userid);
        // Retrieve tag by ID
        Tag tag = getTagById(id);
        // Check if the user is an admin
        if (user.getRole().equalsIgnoreCase("Admin"))
            // Delete the tag
            tagRepository.delete(tag);
    }

    // Function to save a new tag
    public void saveTag(Tag tag, int userID) {
        // Create a new tag instance
        Tag newTag = new Tag();
        // Set the tag name
        newTag.setTagName(tag.getTagName());
        // Save the new tag to the database
        tagRepository.save(newTag);
    }
}
