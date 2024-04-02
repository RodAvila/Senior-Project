package com.edugators.udl4cs_resources.model;

import jakarta.persistence.*;

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

    public User1(String _firstName, String _lastName, String _role, String _email, String _username, String _password) {
        super();
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.role = _role;
        this.email = _email;
        this.userName = _username;
        this.password = _password;
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

}
