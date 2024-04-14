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

@Service
public class ResourceService {
    @Autowired
    private ResourceRepository resourceRepository;

    @Autowired
    private LikesRepository likesRepository;

    @Autowired
    private User1Service userService;

    @Autowired
    private User1Repository user1Repository;

    @Autowired
    private TagRepository tagRepository;

    @Autowired
    private ResourceTagRepository resourceTagRepository;

    public List<Resource> getAllResources() {
        List<Resource> resources = new ArrayList<Resource>();
        resourceRepository.findAll().forEach(Resource::setNumLikes);
        resourceRepository.findAll().forEach(Resource::setNumComments);
        resourceRepository.findAll().forEach(resource -> resources.add(resource));
        return resources;
    }

    @Transactional
    public void saveResource(Resource resource, int userid) {
        User1 user = userService.getuser1ById(userid);
        Iterable<Tag> tagIterable;
        List<Tag> tags = new ArrayList<>();


        Resource newResource = new Resource();
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

        if (resource.getTagIds() != null)
        {
            //Gathers tagsIds from json
            tagIterable = tagRepository.findAllById(resource.getTagIds());
            for (Tag tag : tagIterable) {
                tags.add(tag);
            }

            //Populates Resource_Tag Table
            for (Tag tag : tags) {
                ResourceTag resourceTag = new ResourceTag();
                resourceTag.setTag(tag);
                resourceTag.setResource(newResource);
                newResource.getTags().add(resourceTag);
                resourceTagRepository.save(resourceTag);
            }
        }

        resourceRepository.save(newResource);
    }

    public Resource getResourceById(int id) {
        resourceRepository.findById(id).get().setNumLikes();
        resourceRepository.findById(id).get().setNumComments();
        return resourceRepository.findById(id).get();
    }

    public void deleteResource(int id, int userid)
    {
        Resource r = getResourceById(id);
        User1 u = userService.getuser1ById(userid);

        if (r.getUser().getId() == u.getId() || r.getUser().getRole().equalsIgnoreCase("Admin"))
        {
            resourceTagRepository.deleteByResource(id);
            resourceRepository.delete(r);
        }
    }

    public void likeResource(int id, int userid)
    {
        User1 user = userService.getuser1ById(userid);
        Resource resource = getResourceById(id);

        try {
            Likes newLikes = new Likes();
            newLikes.setUser(user);
            newLikes.setResource(resource);
            likesRepository.save(newLikes);

            resource.getLikes().add(newLikes);
            resourceRepository.save(resource);
        } catch (DataIntegrityViolationException e) {
            unlikeResource(id, userid);
        }
    }

    public void unlikeResource(int resourceid, int userid)
    {
        Likes existingLike = likesRepository.findByUserAndResource(resourceid, userid);
        Resource resource = getResourceById(resourceid);

        if (existingLike != null)
        {
            likesRepository.delete(existingLike);

            resource.getLikes().remove(existingLike);
            resourceRepository.save(resource);
        }
    }

    public void updateResource(Resource resource, int id, int userID)
    {
        Resource oldResource = resourceRepository.findById(id).get();

        if (oldResource.getUser().getId() == userID || oldResource.getUser().getRole().equals("Admin"))
        {
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

            if (resource.getTagIds() != null)
            {
                resourceTagRepository.deleteByResource(oldResource.getId());
                oldResource.getTags().clear();

                //Gathers tagsIds from json
                Iterable<Tag> tagIterable = tagRepository.findAllById(resource.getTagIds());
                List<Tag> tags = new ArrayList<>();
                for (Tag tag : tagIterable) {
                    tags.add(tag);
                }

                //Populates Resource_Tag Table
                for (Tag tag : tags) {
                    ResourceTag resourceTag = new ResourceTag();
                    resourceTag.setTag(tag);
                    resourceTag.setResource(oldResource);
                    oldResource.getTags().add(resourceTag);
                    resourceTagRepository.save(resourceTag);
                }
            }

            resourceRepository.save(oldResource);
        }
    }

    //TODO: user deletion: user has to be aware of r's l's c's (list of each) and cascade all
}
