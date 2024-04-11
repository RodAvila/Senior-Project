package com.edugators.udl4cs_resources.controller;
import com.edugators.udl4cs_resources.model.Resource;
import com.edugators.udl4cs_resources.model.Tag;
import com.edugators.udl4cs_resources.repository.ResourceRepository;
import com.edugators.udl4cs_resources.service.ResourceService;
import com.edugators.udl4cs_resources.service.TagService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class TagController {

    @Autowired
    TagService tagService;

    @Autowired
    ResourceService resourceService;
    @Autowired
    ResourceRepository resourceRepository;
    @PostMapping(value = "/tags/user1/{id}")
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

    @GetMapping(value = "/resource/{id}/tags")
    public List<Resource> findResourcesByTagID(@PathVariable("id") int id){
        return resourceRepository.findResourcesByTagsId(id);
    }

    @GetMapping(value = "/resources/{id}/tags")
    public List<Resource> findResourcesByTagName(@PathVariable("id") String name){
        return resourceRepository.findResourcesByTagsName(name);
    }
}
