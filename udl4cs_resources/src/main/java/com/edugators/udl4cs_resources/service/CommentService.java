package com.edugators.udl4cs_resources.service;
import com.edugators.udl4cs_resources.model.Comment;
import com.edugators.udl4cs_resources.repository.CommentRepository;
import com.edugators.udl4cs_resources.repository.ResourceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.List;
import com.edugators.udl4cs_resources.model.Resource;
import com.edugators.udl4cs_resources.model.User1;

@Service
public class CommentService {
    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private ResourceRepository resourceRepository;

    @Autowired
    private ResourceService resourceService;

    @Autowired
    private User1Service user1Service;

    public List<Comment> getAllComments() {
        List<Comment> comments = new ArrayList<Comment>();
        commentRepository.findAll().forEach(comment -> comments.add(comment));
        return comments;
    }

    public void saveComment(Comment comment, int resourceID, int userID) {

        User1 user = user1Service.getuser1ById(userID);

        Resource resource = resourceService.getResourceById(resourceID);

        Comment newComment = new Comment();

        newComment.setUser(user);
        newComment.setResource(resource);
        newComment.setComment(comment.getComment());
        newComment.setUploadDate(comment.getUploadDate());

        resource.getComments().add(newComment);

        resourceRepository.save(resource);
        commentRepository.save(newComment);
    }

    public Comment getCommentById(int id) {
        return commentRepository.findById(id).get();
    }

    public void deleteComment(int id, int rid, int userid)
    {
        User1 user = user1Service.getuser1ById(userid);
        Resource r = resourceService.getResourceById(rid);
        Comment c = getCommentById(id);


        if (c.getUser().getId() == user.getId() || r.getUser().getId() == user.getId() || r.getUser().getRole().equalsIgnoreCase("Admin"))
            commentRepository.delete(c);
    }
}