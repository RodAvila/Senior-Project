package com.edugators.udl4cs_resources.model;

import jakarta.persistence.*;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table
public class Resource {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "RESOURCENAME")
    private String resourceName;

    @Column(name = "TOPIC")
    private String topic;

    @Column(name = "RESOURCEDESC")
    private String resourceDesc;

    @Column(name = "AUDIENCE")
    private String audience;

    @Column(name = "RESOURCETYPE")
    private String resourceType;

    @Column(name = "RESOURCELINK")
    private String resourceLink;

    @Column(name = "CSTA")
    private String CSTA;

    @Column(name = "GRADELEVEL")
    private String gradeLevel;

    @Column(name = "IMAGELINK")
    private String imageLink;

    @Column(name = "UPLOADDATE")
    private String uploadDate;

    @Column(name = "MODULE")
    private String module;

    @ManyToOne
    private User1 user;

    @OneToMany(mappedBy = "resource", orphanRemoval = true)
    private List<Likes> likes = new ArrayList<>();

    @OneToMany(mappedBy = "resource", orphanRemoval = true)
    private List<Comment> comments = new ArrayList<>();

    /*@Transient
    private int numLikes;

    @Transient
    private int numComments; */

    public Resource() {

    }

    public Resource(int id, String resourceName, String topic, String resourceDesc, String audience, String resourceType,
                    String resourceLink, String CSTA, String gradeLevel, String imageLink, String uploadDate, String module, User1 user,
                    List<Likes> likedUsers, List<Comment> comments) {
        this.id = id;
        this.resourceName = resourceName;
        this.topic = topic;
        this.resourceDesc = resourceDesc;
        this.audience = audience;
        this.resourceType = resourceType;
        this.resourceLink = resourceLink;
        this.CSTA = CSTA;
        this.gradeLevel = gradeLevel;
        this.imageLink = imageLink;
        this.uploadDate = uploadDate;
        this.module = module;
        this.user = user;
        this.likes = likedUsers;
        this.comments = comments;
    }

    public int getId() {
        return id;
    }

    public String getResourceName() {
        return resourceName;
    }

    public String getTopic() {
        return topic;
    }

    public String getResourceDesc() {
        return resourceDesc;
    }

    public String getAudience() {
        return audience;
    }

    public String getResourceType() {
        return resourceType;
    }

    public String getResourceLink() {
        return resourceLink;
    }

    public String getCSTA() {
        return CSTA;
    }

    public String getGradeLevel() {
        return gradeLevel;
    }

    public String getImageLink() {
        return imageLink;
    }

    public String getUploadDate() {
        return uploadDate;
    }

    public String getModule() {
        return module;
    }


    public void setId(int id) {
        this.id = id;
    }

    public void setResourceName(String resourceName) {
        this.resourceName = resourceName;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public void setResourceDesc(String resourceDesc) {
        this.resourceDesc = resourceDesc;
    }

    public void setAudience(String audience) {
        this.audience = audience;
    }

    public void setResourceType(String resourceType) {
        this.resourceType = resourceType;
    }

    public void setResourceLink(String resourceLink) {
        this.resourceLink = resourceLink;
    }

    public void setCSTA(String CSTA) {
        this.CSTA = CSTA;
    }

    public void setGradeLevel(String gradeLevel) {
        this.gradeLevel = gradeLevel;
    }

    public void setImageLink(String imageLink) {
        this.imageLink = imageLink;
    }

    public void setUploadDate(String uploadDate) {
        this.uploadDate = uploadDate;
    }

    public void setModule(String module) {
        this.module = module;
    }

    public User1 getUser() {
        return user;
    }

    public void setUser(User1 user1) {
        this.user = user1;
    }

    public List<Likes> getLikes() {
        return likes;
    }

    public void setLikes(List<Likes> likedUsers) {
        this.likes = likedUsers;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }

   /* public void setNumLikes(int resourceID) {
        this.numLikes = ((Number)entityManager.createQuery("select count(like) from Likes like where Likes.resource.id = :resourceID")
                .setParameter("resourceID", resourceID).getSingleResult()).intValue();
    }

    public int getNumLikes(int numLikes) {
        this.numLikes = numLikes;
    }

    public int getNumComments() {
        return numComments;
    }

    public void setNumComments(int numComments) {
        this.numComments = numComments;
    } */
}