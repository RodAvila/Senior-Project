package com.edugators.udl4cs_resources.service;

import com.edugators.udl4cs_resources.model.Resource;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class ResourceService implements ResourceServiceInterface {
    private List<Resource> resourceRepository;
    int count = 0;

    public ResourceService(List<Resource> resourceRepository) {
        this.resourceRepository = resourceRepository;
    }

    @Override
    public List<Resource> getAllResources() {
        return resourceRepository;
    }

    @Override
    public Resource saveResource(Resource resource) {
        resource.setId(count);
        count++;
        resourceRepository.add(resource);
        return resource;
    }
}
