package com.edugators.udl4cs_resources.controller;
import com.edugators.udl4cs_resources.model.Resource;
import com.edugators.udl4cs_resources.service.ResourceService;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.Arrays;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3000/addresource"})
public class ResourceController {

    @Autowired ResourceService resourceService;

    public ResourceController(ResourceService resourceService) {
        this.resourceService = resourceService;
        resourceService.saveResource(new Resource("ResourceName1","Topic1","Description1","Audience1","Link1","CSTASTANDARD1","GRADELEVEL1","IMAGELINK1","UPLOADDATE1","UPLOADDATE1", "MODULE1", 1, 1));
        resourceService.saveResource(new Resource("ResourceName2","Topic2","Description2","Audience2","Link2","CSTASTANDARD2","GRADELEVEL2","IMAGELINK2","UPLOADDATE2","UPLOADDATE2", "MODULE2", 2, 2));
        //resourceService.saveResource(new Resource(2, 0, 0, "Resource 3", "A resource description"));
    }

    @PostMapping(value = "/resources", headers = "Accept=application/json")
    public void saveResource(@Valid @RequestBody Resource resource) {
        //Resource newResource = new Resource(0, 0, 0, resource.get("resourceTitle").toString(), resource.get("resourceDesc").toString());
        resourceService.saveResource(resource);
    }

    @GetMapping(value = "/")
    public String index() {
        return "Hello there!";
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
