package com.edugators.udl4cs_resources.model;

import jakarta.persistence.*;


@Entity
@Table
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "FIRSTNAME")
    private String firstName;

    @Column(name = "LASTNAME")
    private String lastName;

    @Column(name = "COMMENT")
    private String comment;

    @Column(name = "UPLOADDATE")
    private String uploadDate;

    @Column(name = "USERNAME")
    private String userName;

    public Comment(String firstName, String lastName, String comment, String uploadDate, String userName) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.comment = comment;
        this.uploadDate = uploadDate;
        this.userName = userName;
    }

    public Comment() {

    }

    public int getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getComment() {
        return comment;
    }

    public String getUploadDate() {
        return uploadDate;
    }

    public String getUserName() {
        return userName;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public void setUploadDate(String uploadDate) {
        this.uploadDate = uploadDate;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
}