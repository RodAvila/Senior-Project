package com.edugators.udl4cs_resources.controller;
import com.edugators.udl4cs_resources.model.Resource;
import com.edugators.udl4cs_resources.service.ResourceService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.*;


import java.util.Arrays;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ResourceController {

    @Autowired
    ResourceService resourceService;

//    public ResourceController(ResourceService resourceService) {
//        this.resourceService = resourceService;
////        resourceService.saveResource(new Resource(0, 0, 0, "Resource 1", "A resource description"));
////        resourceService.saveResource(new Resource(1, 0, 0, "Resource 2", "A resource description"));
////        resourceService.saveResource(new Resource(2, 0, 0, "Resource 3", "A resource description"));
//    }

    @PostMapping(value = "/resources", headers = "Accept=application/json")
    public void saveResource(@Valid @RequestBody Resource resource) {
        //Resource newResource = new Resource(0, 0, 0, resource.get("resourceTitle").toString(), resource.get("resourceDesc").toString());
        resourceService.saveResource(resource);
    }

    @GetMapping(value = "/resources")
    public List<Resource> getAllResources() {
        return resourceService.getAllResources();
    }

    @GetMapping("/resource/{id}")
    private Resource getResource(@PathVariable("id") int id)
    {
        return resourceService.getResourceById(id);
    }
}
