package com.edugators.udl4cs_resources.controller;

import com.edugators.udl4cs_resources.model.Tag;
import com.edugators.udl4cs_resources.service.TagService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000") // Enables Cross-Origin Resource Sharing (CORS) for requests from a specific origin
@RestController // Indicates that this class is a REST controller
public class TagController {

    @Autowired
    TagService tagService; // Autowires the TagService bean for handling tag-related operations

    @PostMapping(value = "/tags/user1/{id}") // Endpoint value for functions, this one is saving a new tag
    public void saveTag(@Valid @RequestBody Tag tag, @PathVariable("id") int userID) {
        tagService.saveTag(tag, userID);
    }

    @GetMapping(value = "/tags")
    public List<Tag> getAllTags() {
        return tagService.getAllTags();
    }

    @GetMapping("/tags/{id}")
    public Tag getTag(@PathVariable("id") int id)
    {
        return tagService.getTagById(id);
    }

    @DeleteMapping("/tags/{id}/user1/{userid}")
    public void deleteTag(@PathVariable("id") int id, @PathVariable("userid") int userID)
    {
        tagService.deleteTag(id, userID);
    }
}
