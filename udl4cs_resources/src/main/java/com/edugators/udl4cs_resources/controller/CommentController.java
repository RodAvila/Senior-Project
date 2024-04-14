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

    @PostMapping(value = "/comments/resources/{resourceID}/user1/{userID}")
    public void savecomment(@Valid @RequestBody Comment comment, @PathVariable("resourceID") int rID, @PathVariable("userID") int userID) {
        commentService.saveComment(comment, rID, userID);
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

    @DeleteMapping("/comments/{id}/resources/{resourceID}/user1/{userID}")
    public void deleteComment(@PathVariable("id") int id, @PathVariable("resourceID") int rID, @PathVariable("userID") int userID)
    {
        commentService.deleteComment(id, rID, userID);
    }
}

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

    @PostMapping(value = "/comments/resources/{resourceID}/user1/{userID}")
    public void savecomment(@Valid @RequestBody Comment comment, @PathVariable("resourceID") int rID, @PathVariable("userID") int userID) {
        commentService.saveComment(comment, rID, userID);
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

    @DeleteMapping("/comments/{id}/resources/{resourceID}/user1/{userID}")
    public void deleteComment(@PathVariable("id") int id, @PathVariable("resourceID") int rID, @PathVariable("userID") int userID)
    {
        commentService.deleteComment(id, rID, userID);
    }
}
