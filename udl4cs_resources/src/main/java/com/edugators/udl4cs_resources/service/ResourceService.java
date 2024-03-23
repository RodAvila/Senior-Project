package com.edugators.udl4cs_resources.service;

import com.edugators.udl4cs_resources.model.Resource;
import com.edugators.udl4cs_resources.repository.ResourceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.List;

@Service
public class ResourceService {
    @Autowired
    ResourceRepository resourceRepository;

    public List<Resource> getAllResources() {
        List<Resource> resources = new ArrayList<Resource>();
        resourceRepository.findAll().forEach(resource -> resources.add(resource));
        return resources;
    }


    public void saveResource(Resource resource) {
        resourceRepository.save(resource);
    }

    public Resource getResourceById(int id) {
        return resourceRepository.findById(id).get();
    }

    public void delete(int id)
    {
        resourceRepository.deleteById(id);
    }
}
