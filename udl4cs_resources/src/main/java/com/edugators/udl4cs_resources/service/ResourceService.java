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
        resourceRepository.save(newResource);
    }

    public Resource getResourceById(int id) {
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
        } catch (DataIntegrityViolationException e) {
            unlikeResource(id, userid);
        }
    }

    public void unlikeResource(int resourceid, int userid)
    {
        Likes existingLike = likesRepository.findByUserAndResource(resourceid, userid);
        if (existingLike != null)
            likesRepository.delete(existingLike);
    }

    //TODO: Implement getNumLikes and getNumComments
    //TODO: change uploadDateTime for database and source code
    //TODO: Figure out best way for url pathing, possible likeComment functionality

}
