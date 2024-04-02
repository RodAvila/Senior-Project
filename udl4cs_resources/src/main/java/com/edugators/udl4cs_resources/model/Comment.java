package com.edugators.udl4cs_resources.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;


@Entity
@Table(name = "Comment")
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "COMMENT")
    private String comment;

    @Column(name = "UPLOADDATE")
    private String uploadDate;

    @ManyToOne
    @JsonIgnore
    private Resource resource;

    @ManyToOne
    private User1 user;


    public Comment() {

    }

    public Comment(int id, String comment, String uploadDate, Resource resource, User1 user) {
        super();
        this.id = id;
        this.comment = comment;
        this.uploadDate = uploadDate;
        this.resource = resource;
        this.user = user;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public String getUploadDate() {
        return uploadDate;
    }

    public void setUploadDate(String uploadDate) {
        this.uploadDate = uploadDate;
    }

    public Resource getResource() {
        return resource;
    }

    public void setResource(Resource resource) {
        this.resource = resource;
    }

    public User1 getUser() {
        return user;
    }

    public void setUser(User1 user) {
        this.user = user;
    }
}