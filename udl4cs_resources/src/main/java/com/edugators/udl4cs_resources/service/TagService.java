package com.edugators.udl4cs_resources.service;
import com.edugators.udl4cs_resources.model.Tag;
import com.edugators.udl4cs_resources.repository.TagRepository;
import com.edugators.udl4cs_resources.repository.ResourceRepository;
import com.edugators.udl4cs_resources.repository.User1Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.List;
import com.edugators.udl4cs_resources.model.Resource;
import com.edugators.udl4cs_resources.model.User1;

@Service
public class TagService {

    @Autowired
    private TagRepository tagRepository;

    @Autowired
    private User1Service user1Service;


    public List<Tag> getAllTags() {
        List<Tag> tags = new ArrayList<Tag>();
        tagRepository.findAll().forEach(tag -> tags.add(tag));
        return tags;
    }

    public Tag getTagById(int id) {
        return tagRepository.findById(id).get();
    }

    public void deleteTag(int id, int userid)
    {
        User1 user = user1Service.getuser1ById(userid);
        Tag tag = getTagById(id);
        if (user.getRole().equalsIgnoreCase("Admin"))
            tagRepository.delete(tag);
    }

    public void saveTag(Tag tag, int userID) {
        Tag newTag = new Tag();
        newTag.setTagName(tag.getTagName());
        tagRepository.save(newTag);
    }
}