package com.edugators.udl4cs_resources.controller;
import com.edugators.udl4cs_resources.model.Resource;
import com.edugators.udl4cs_resources.model.User1;
import com.edugators.udl4cs_resources.service.ResourceService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.*;


import java.util.Arrays;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000") // Enables Cross-Origin Resource Sharing (CORS) for requests from a specific origin
@RestController // Indicates that this class is a REST controller
public class ResourceController {

    @Autowired

    Email email; //Creates object used to send email on resource creation
    ResourceService resourceService; // Autowires the ResourceService bean for handling resource-related operations

    @PostMapping(value = "/resources/user1/{id}") // Endpoint value for function below, this one is saving a new resource
    public void saveResource(@Valid @RequestBody Resource resource, @PathVariable("id") int userID) {
        resourceService.saveResource(resource, userID);
        email.sendEmail(resource.getResourceName(), resource.getId(), resource.getResourceDesc());
    }

    @GetMapping(value = "/resources")
    public List<Resource> getAllResources() {
        return resourceService.getAllResources();
    }

    @GetMapping("/resources/{id}")
    public Resource getResource(@PathVariable("id") int id)
    {
        return resourceService.getResourceById(id);
    }

    @DeleteMapping("/resources/{id}/user1/{userid}")
    public void deleteResource(@PathVariable("id") int id, @PathVariable("userid") int userID)
    {
        resourceService.deleteResource(id, userID);
    }

    @PutMapping("/resources/like/{id}/user1/{userid}")
    public void likResourceHandler(@PathVariable("id") int id, @PathVariable("userid") int userID)
    {
        resourceService.likeResource(id, userID);
    }

    @PutMapping(value = "/resources/{id}/user1/{userid}")
    public void updateResource(@RequestBody Resource resource, @PathVariable("id") int id, @PathVariable("userid") int userID) {
        resourceService.updateResource(resource, id, userID);
    }
}
