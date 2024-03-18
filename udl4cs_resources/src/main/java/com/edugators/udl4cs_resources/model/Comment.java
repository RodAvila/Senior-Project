package com.edugators.udl4cs_resources.model;

import javax.persistence.*;

@Entity
@Table(name = "Comment")
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "FIRSTNAME")
    private String firstName;

    @Column(name = "LASTNAME")
    private String lastName;

    @Column(name = "VALUE")
    private String value;

    @Column(name = "UPLOADDATE")
    private String uploadDate;

    @Column(name = "USERNAME")
    private String userName;

    public Comment(int id, String firstName, String lastName, String value, String uploadDate, String userName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.value = value;
        this.uploadDate = uploadDate;
        this.userName = userName;
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

    public String getValue() {
        return value;
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

    public void setValue(String value) {
        this.value = value;
    }

    public void setUploadDate(String uploadDate) {
        this.uploadDate = uploadDate;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
}