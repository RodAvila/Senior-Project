package com.edugators.udl4cs_resources.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ResourceController {
    @GetMapping(value = "/")
    public String index() {
        return "Hello there!";
    }

    @GetMapping(value = "/resources")
    public List<Resource> getAllResourcese() {
        return Arrays.asList(
            new Resource(1, "Resource 1", "A resource description"),
            new Resource(2, "Resource 2", "A resource description"),
            new Resource(3, "Resource 3", "A resource description")
        );
    }
}

class Resource {
    private int id;
    private String ResourceTitle;
    private String ResourceDescription;

    public Resource(int _id, String _ResourceTitle, String _ResourceDescription) {
        super();
        this.id = _id;
        this.ResourceTitle = _ResourceTitle;
        this.ResourceDescription = _ResourceDescription;
    }

    public int getId() {
        return id;
    }

    public String getResourceTitle() {
        return ResourceTitle;
    }

    public String getResourceDesc() {
        return ResourceDescription;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setResourceTitle(String _ResourceTitle) {
        this.ResourceTitle = _ResourceTitle;
    }

    public void setResourceDescription(String _ResourceDescription) {
        this.ResourceDescription = _ResourceDescription;
    }
}
