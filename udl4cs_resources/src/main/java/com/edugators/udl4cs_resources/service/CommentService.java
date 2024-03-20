package com.edugators.udl4cs_resources.service;

import com.edugators.udl4cs_resources.model.Comment;
import com.edugators.udl4cs_resources.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.List;

@Service
public class CommentService {
    @Autowired
    CommentRepository commentRepository;



    public List<Comment> getAllComments() {
        List<Comment> comments = new ArrayList<Comment>();
        commentRepository.findAll().forEach(comment -> comments.add(comment));
        return comments;
    }


    public void saveComment(Comment comment) {
        commentRepository.save(comment);
    }

    public Comment getCommentById(int id) {
        return commentRepository.findById(id).get();
    }

}

