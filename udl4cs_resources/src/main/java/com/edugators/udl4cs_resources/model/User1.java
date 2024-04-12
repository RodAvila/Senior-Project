package com.edugators.udl4cs_resources.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import java.util.Base64;

@Entity
@Table
public class User1 {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "FIRSTNAME")
    private String firstName;

    @Column(name = "LASTNAME")
    private String lastName;

    @Column(name = "ROLE")
    private String role;

    @Column(name = "EMAIL")
    private String email;

    @Column(name = "USERNAME")
    private String userName;

    @Column(name = "PASSWORD")
    private String password;

    @Transient
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String base64ImageData;

    @Column(name = "PFP")
    //@JsonIgnore
    private byte[] imageData = new byte[524288];

    public User1(int id, String firstName, String lastName, String role, String email, String userName, String password, String base64ImageData, byte[] imageData) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
        this.email = email;
        this.userName = userName;
        this.password = password;
        this.base64ImageData = base64ImageData;
        this.imageData = imageData;
    }

    public User1() {

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

    public String getRole() {
        return role;
    }

    public String getEmail() {
        return email;
    }

    public String getUserName() {
        return userName;
    }

    public String getPassword() {
        return password;
    }

    public void setId(int _id) {
        this.id = _id;
    }

    public void setFirstName(String _firstName) {
        this.firstName = _firstName;
    }

    public void setLastName(String _lastName) {
        this.lastName = _lastName;
    }

    public void setRole(String _role) {
        this.role = _role;
    }

    public void setEmail(String _email) {
        this.email = _email;
    }

    public void setUserName(String _username) {
        this.userName = _username;
    }

    public void setPassword(String _password) {
        this.password = _password;
    }

    public byte[] getImageData() {
        return imageData;
    }

    public void setImageData() {
        this.imageData = Base64.getDecoder().decode(this.base64ImageData);
    }

    public String getBase64ImageData() {
        return base64ImageData;
    }

    public void setBase64ImageData(String base64ImageData) {
        this.base64ImageData = base64ImageData;
    }

    @Override
    public boolean equals(Object obj) {
        if(!(obj instanceof User1)) {
            return false;
        }
        User1 u = (User1) obj;
        return this.id == u.getId();
    }
}
