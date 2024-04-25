package com.edugators.udl4cs_resources.service;
import com.edugators.udl4cs_resources.model.Comment;
import com.edugators.udl4cs_resources.repository.CommentRepository;
import com.edugators.udl4cs_resources.repository.ResourceRepository;
import com.edugators.udl4cs_resources.repository.User1Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import com.edugators.udl4cs_resources.model.Resource;
import com.edugators.udl4cs_resources.model.User1;

/*
This class represents a service layer in a Spring Boot application for
managing comments. It provides functions for retrieving, saving, and deleting comments,
along with their associations with resources and users. The class utilizes Spring Boot's
dependency injection mechanism (@Autowired) to inject instances of repositories and services
needed for database operations and business logic.
*/

@Service
public class CommentService {

    // Autowired CommentRepository for CRUD operations on Comment entities
    @Autowired
    private CommentRepository commentRepository;

    // Autowired ResourceRepository for CRUD operations on Resource entities
    @Autowired
    private ResourceRepository resourceRepository;

    // Autowired User1Repository for CRUD operations on User1 entities
    @Autowired
    private User1Repository user1Repository;

    // Autowired ResourceService for accessing Resource-related functionalities
    @Autowired
    private ResourceService resourceService;

    // Autowired User1Service for accessing User1-related functionalities
    @Autowired
    private User1Service user1Service;

    // Function to retrieve all comments from the database
    public List<Comment> getAllComments() {
        List<Comment> comments = new ArrayList<Comment>();
        // Retrieve all comments using CommentRepository and add them to the list
        commentRepository.findAll().forEach(comment -> comments.add(comment));
        return comments;
    }

    // Function to save a new comment associated with a resource and a user
    public void saveComment(Comment comment, int resourceID, int userID) {

        // Retrieve user by ID using User1Service
        User1 user = user1Service.getuser1ById(userID);

        // Retrieve resource by ID using ResourceService
        Resource resource = resourceService.getResourceById(resourceID);

        // Create a new comment instance
        Comment newComment = new Comment();

        // Set user, resource, comment text, and upload date for the new comment
        newComment.setUser(user);
        newComment.setResource(resource);
        newComment.setComment(comment.getComment());
        newComment.setUploadDate(LocalDateTime.now());

        // Save the new comment to the database using CommentRepository
        commentRepository.save(newComment);

        // Add the new comment to the list of comments associated with the resource
        resource.getComments().add(newComment);

        // Update the resource in the database with the new comment
        resourceRepository.save(resource);
    }

    // Function to retrieve a comment by its ID
    public Comment getCommentById(int id) {
        return commentRepository.findById(id).get();
    }

    // Function to delete a comment by its ID, resource ID, and user ID
    public void deleteComment(int id, int rid, int userid) {
        // Retrieve user by ID using User1Service
        User1 user = user1Service.getuser1ById(userid);

        // Retrieve resource by ID using ResourceService
        Resource r = resourceService.getResourceById(rid);

        // Retrieve comment by ID using getCommentById function
        Comment c = getCommentById(id);

        // Check if the user is the owner of the comment, the owner of the resource, or an admin
        if (c.getUser().getId() == user.getId() || r.getUser().getId() == user.getId() || r.getUser().getRole().equalsIgnoreCase("Admin")) {
            // Delete the comment from the database using CommentRepository
            commentRepository.delete(c);

            // Remove the comment from the list of comments associated with the resource
            r.getComments().remove(c);

            // Update the resource in the database without the deleted comment
            resourceRepository.save(r);
        }
    }
}
