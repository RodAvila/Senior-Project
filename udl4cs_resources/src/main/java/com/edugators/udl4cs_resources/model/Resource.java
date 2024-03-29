package com.edugators.udl4cs_resources.model;

import jakarta.persistence.*;

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

    @Column(name = "NUMLIKES")
    private Integer numLikes;

    @Column(name = "NUMCOMMENTS")
    private Integer numComments;

    public Resource(String resourceName, String topic, String resourceDesc, String audience, String resourceType,
                    String resourceLink, String CSTA, String gradeLevel, String imageLink, String uploadDate,
                    String module, int numLikes, int numComments) {
        super();
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
        this.numLikes = numLikes;
        this.numComments = numComments;
    }


    public Resource() {

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

    public int getNumLikes() {
        return numLikes;
    }

    public int getNumComments() {
        return numComments;
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

    public void setNumLikes(int numLikes) {
        this.numLikes = numLikes;
    }

    public void setNumComments(int numComments) {
        this.numComments = numComments;
    }
}