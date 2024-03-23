package com.edugators.udl4cs_resources.controller;
import com.edugators.udl4cs_resources.model.Comment;
import com.edugators.udl4cs_resources.service.CommentService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CommentController {
    @Autowired
    CommentService commentService;

    /*public CommentController(CommentService commentService) {
        this.commentService = commentService;
        //commentService.saveComment(new Comment("John", "Doe", "Comment1", "1-1-24", "johndoe"));
        //commentService.saveComment(new Comment("Mary", "Doer", "Comment2", "2-2-24", "maryjoe"));
        //commentService.savecomment(new comments(2, "Juliet", "Doeseph", "Teacher", "jdoeseph@coe.edu", "julietdoe", "password12345"));
    }*/

    @PostMapping(value = "/comments", headers = "Accept=application/json")
    public void savecomment(@Valid @RequestBody Comment comment) {
        //Resource newResource = new Resource(0, 0, 0, resource.get("resourceTitle").toString(), resource.get("resourceDesc").toString());
        commentService.saveComment(comment);
    }
    @GetMapping(value = "/comments")
    public List<Comment> getAllcomments() {
        return commentService.getAllComments();
    }

    @GetMapping("/comments/{id}")
    private Comment getcomment(@PathVariable("id") int id)
    {
        return commentService.getCommentById(id);
    }
}