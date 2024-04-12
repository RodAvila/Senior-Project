package com.edugators.udl4cs_resources.service;

import com.edugators.udl4cs_resources.model.Likes;
import com.edugators.udl4cs_resources.model.Resource;
import com.edugators.udl4cs_resources.model.User1;
import com.edugators.udl4cs_resources.repository.LikesRepository;
import com.edugators.udl4cs_resources.repository.ResourceRepository;
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
            resourceRepository.delete(r);
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

    //TODO: user deletion: user has to be aware of r's l's c's (list of each) and cascade all
}
