package com.edugators.udl4cs_resources.service;
import com.edugators.udl4cs_resources.model.*;
import com.edugators.udl4cs_resources.repository.*;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;


import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

/*
This class serves as a service layer within a Spring Boot application,
focusing on managing resources. It offers functionalities for retrieving,
saving, updating, and deleting resources, as well as liking and unliking
them. Additionally, it handles associations between resources, tags, and users.
The class effectively employs Spring Boot's dependency injection (@Autowired)
to seamlessly integrate instances of repositories and services required for
database interactions and business logic.
*/

@Service
public class ResourceService {

    // Autowired ResourceRepository for CRUD operations on Resource entities
    @Autowired
    private ResourceRepository resourceRepository;

    // Autowired LikesRepository for CRUD operations on Likes entities
    @Autowired
    private LikesRepository likesRepository;

    // Autowired User1Service for accessing User1-related functionalities
    @Autowired
    private User1Service userService;

    // Autowired User1Repository for CRUD operations on User1 entities
    @Autowired
    private User1Repository user1Repository;

    // Autowired TagRepository for CRUD operations on Tag entities
    @Autowired
    private TagRepository tagRepository;

    // Autowired ResourceTagRepository for CRUD operations on ResourceTag entities
    @Autowired
    private ResourceTagRepository resourceTagRepository;

    // Function to retrieve all resources from the database
    public List<Resource> getAllResources() {
        List<Resource> resources = new ArrayList<Resource>();
        // Retrieve all resources
        resourceRepository.findAll().forEach(Resource::setNumLikes);
        resourceRepository.findAll().forEach(Resource::setNumComments);
        resourceRepository.findAll().forEach(resource -> resources.add(resource));
        return resources;
    }

    // Function to save a new resource to the database
    @Transactional
    public void saveResource(Resource resource, int userid) {
        // Retrieve user by ID
        User1 user = userService.getuser1ById(userid);
        Iterable<Tag> tagIterable;
        List<Tag> tags = new ArrayList<>();

        // Create a new resource instance
        Resource newResource = new Resource();

        // Set properties of the new resource
        newResource.setResourceName(resource.getResourceName());
        newResource.setTopic(resource.getTopic());
        newResource.setResourceDesc(resource.getResourceDesc());
        newResource.setAudience(resource.getAudience());
        newResource.setResourceType(resource.getResourceType());
        newResource.setResourceLink(resource.getResourceLink());
        newResource.setCSTA(resource.getCSTA());
        newResource.setGradeLevel(resource.getGradeLevel());
        newResource.setImageLink(resource.getImageLink());
        newResource.setUploadDate(resource.getUploadDate());
        newResource.setModule(resource.getModule());
        newResource.setUser(user);
        newResource.setUploadDate(LocalDateTime.now());
        newResource.setIsPublic(resource.getIsPublic());

        // If resource has associated tags
        if (resource.getTagIds() != null) {
            // Retrieve tags by IDs
            tagIterable = tagRepository.findAllById(resource.getTagIds());
            for (Tag tag : tagIterable) {
                tags.add(tag);
            }

            // Create and save ResourceTag associations
            for (Tag tag : tags) {
                ResourceTag resourceTag = new ResourceTag();
                resourceTag.setTag(tag);
                resourceTag.setResource(newResource);
                newResource.getTags().add(resourceTag);
                resourceTagRepository.save(resourceTag);
            }
        }

        // Save the new resource to the database
        resourceRepository.save(newResource);
    }

    // Function to retrieve a resource by its ID
    public Resource getResourceById(int id) {
        // Retrieve resource by ID and set the number of likes and comments
        resourceRepository.findById(id).get().setNumLikes();
        resourceRepository.findById(id).get().setNumComments();
        return resourceRepository.findById(id).get();
    }

    // Function to delete a resource by its ID and user ID
    public void deleteResource(int id, int userid) {
        // Retrieve resource by ID
        Resource r = getResourceById(id);
        // Retrieve user by ID
        User1 u = userService.getuser1ById(userid);

        // Check if the user is authorized to delete the resource
        if (r.getUser().getId() == u.getId() || r.getUser().getRole().equalsIgnoreCase("Admin")) {
            // Delete resource tags and the resource itself
            resourceTagRepository.deleteByResource(id);
            resourceRepository.delete(r);
        }
    }

    // Function to like a resource
    public void likeResource(int id, int userid) {
        // Retrieve user by ID
        User1 user = userService.getuser1ById(userid);
        // Retrieve resource by ID
        Resource resource = getResourceById(id);

        try {
            // Create a new Likes instance and save it
            Likes newLikes = new Likes();
            newLikes.setUser(user);
            newLikes.setResource(resource);
            likesRepository.save(newLikes);

            // Add the like to the resource
            resource.getLikes().add(newLikes);
            resourceRepository.save(resource);
        } catch (DataIntegrityViolationException e) {
            // If a like already exists, remove it
            unlikeResource(id, userid);
        }
    }

    // Function to unlike a resource
    public void unlikeResource(int resourceid, int userid) {
        // Retrieve existing like
        Likes existingLike = likesRepository.findByUserAndResource(resourceid, userid);
        // Retrieve resource by ID
        Resource resource = getResourceById(resourceid);

        if (existingLike != null) {
            // Delete the like
            likesRepository.delete(existingLike);

            // Remove the like from the resource
            resource.getLikes().remove(existingLike);
            resourceRepository.save(resource);
        }
    }

    // Function to update a resource
    public void updateResource(Resource resource, int id, int userID) {
        // Retrieve existing resource
        Resource oldResource = resourceRepository.findById(id).get();

        // Check if the user is authorized to update the resource & Update resource properties if provided
        if (oldResource.getUser().getId() == userID || oldResource.getUser().getRole().equals("Admin")) {

            if (resource.getResourceName() != null)
                oldResource.setResourceName(resource.getResourceName());

            if (resource.getTopic() != null)
                oldResource.setTopic(resource.getTopic());

            if (resource.getResourceDesc() != null)
                oldResource.setResourceDesc(resource.getResourceDesc());

            if (resource.getAudience() != null)
                oldResource.setAudience(resource.getAudience());

            if(resource.getResourceType() != null)
                oldResource.setResourceType(resource.getResourceType());

            if (resource.getResourceLink() != null)
                oldResource.setResourceLink(resource.getResourceLink());

            if (resource.getCSTA() != null)
                oldResource.setCSTA(resource.getCSTA());

            if (resource.getGradeLevel() != null)
                oldResource.setGradeLevel(resource.getGradeLevel());

            if (resource.getImageLink() != null)
                oldResource.setImageLink(resource.getImageLink());

            if (resource.getModule() != null)
                oldResource.setModule(resource.getModule());

            oldResource.setIsPublic(true);

            // If new tags are provided
            if (resource.getTagIds() != null) {
                // Clear existing tags
                resourceTagRepository.deleteByResource(oldResource.getId());
                oldResource.getTags().clear();

                // Retrieve new tags
                Iterable<Tag> tagIterable = tagRepository.findAllById(resource.getTagIds());
                List<Tag> tags = new ArrayList<>();
                for (Tag tag : tagIterable) {
                    tags.add(tag);
                }

                // Create and save ResourceTag associations using the list of tags gathered above
                for (Tag tag : tags) {
                    ResourceTag resourceTag = new ResourceTag();
                    resourceTag.setTag(tag);
                    resourceTag.setResource(oldResource);
                    oldResource.getTags().add(resourceTag);
                    resourceTagRepository.save(resourceTag);
                }
            }

            // Save the updated resource
            resourceRepository.save(oldResource);
        }
    }
}

