package com.edugators.udl4cs_resources.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.PathVariable;

import java.time.LocalDateTime;
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

    @Column(name = "ISPUBLIC")
    private Boolean isPublic;

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
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private LocalDateTime uploadDate;

    @Column(name = "MODULE")
    private String module;

    @ManyToOne
    private User1 user;

    @OneToMany(mappedBy = "resource", orphanRemoval = true)
    @JsonIgnore
    private List<Likes> likes = new ArrayList<>();

    @OneToMany(mappedBy = "resource", orphanRemoval = true)
    private List<Comment> comments = new ArrayList<>();

    @OneToMany(mappedBy = "resource", orphanRemoval = true)
    private List<ResourceTag> tags = new ArrayList<>();

    @Transient
    private Iterable<Integer> tagIds;

    @Transient
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private int numLikes;

    @Transient
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private int numComments;

    public Resource() {

    }

    public Resource(int id, String resourceName, String topic, String resourceDesc, String audience,
                    String resourceType, String resourceLink, String CSTA, String gradeLevel,
                    String imageLink, LocalDateTime uploadDate, String module, User1 user,
                    List<Likes> likes, List<Comment> comments, List<ResourceTag> tags, int numLikes, int numComments) {
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
        this.likes = likes;
        this.comments = comments;
        this.tags = tags;
        this.numLikes = numLikes;
        this.numComments = numComments;
        this.isPublic = false;
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

    public LocalDateTime getUploadDate() {
        return uploadDate;
    }

    public String getModule() {
        return module;
    }

    public Boolean getIsPublic(){return isPublic;}

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

    public void setUploadDate(LocalDateTime uploadDate) {
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

   public void setNumLikes() {
        this.numLikes = this.likes.size();
    }

    public int getNumLikes() {
        return numLikes;
    }

    public int getNumComments() {
        return numComments;
    }

    public void setNumComments() {
        this.numComments = this.comments.size();
    }

    public List<ResourceTag> getTags(){
        return tags;
    }

    public void setTags(List<ResourceTag> tags){
        this.tags = tags;
    }

    public Iterable<Integer> getTagIds() {
        return tagIds;
    }

    public void setTagIds(Iterable<Integer> tagIds) {
        this.tagIds = tagIds;
    }

    public void setIsPublic(Boolean isPublic){this.isPublic = isPublic;}
}