package com.edugators.udl4cs_resources.controller;
import com.edugators.udl4cs_resources.model.Resource;
import com.edugators.udl4cs_resources.service.ResourceService;

import org.springframework.web.bind.annotation.*;


import java.util.Arrays;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ResourceController {

    private final ResourceService resourceService;

    public ResourceController(ResourceService resourceService) {
        this.resourceService = resourceService;
        resourceService.saveResource(new Resource(0, 0, 0, "Resource 1", "A resource description"));
        resourceService.saveResource(new Resource(1, 0, 0, "Resource 2", "A resource description"));
        resourceService.saveResource(new Resource(2, 0, 0, "Resource 3", "A resource description"));
    }

    @PostMapping(value = "/resources", headers = "Accept=application/json")
    public Resource saveResource(@RequestBody Map<String, Object> resource) {
        Resource newResource = new Resource(0, 0, 0, resource.get("resourceTitle").toString(), resource.get("resourceDesc").toString());
        Resource returnedResource = resourceService.saveResource(newResource);
        return returnedResource;
    }

    @GetMapping(value = "/")
    public String index() {
        return "Hello there!";
    }

    @GetMapping(value = "/resources")
    public List<Resource> getAllResourcese() {
        return resourceService.getAllResources();
    }
}
