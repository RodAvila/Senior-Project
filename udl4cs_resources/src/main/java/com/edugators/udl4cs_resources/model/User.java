package com.edugators.udl4cs_resources.model;

import javax.persistence.*;

@Entity
@Table(name = "User")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
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
    private String username;

    @Column(name = "PASSWORD")
    private String password;

    public User(int _id, String _firstName, String _lastName, String _role, String _email, String _username, String _password) {
        id = _id;
        firstName = _firstName;
        lastName = _lastName;
        role = _role;
        email = _email;
        username = _username;
        password = _password;
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

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public void setId(int _id) {
        id = _id;
    }

    public void setFirstName(String _firstName) {
        firstName = _firstName;
    }

    public void setLastName(String _lastName) {
        lastName = _lastName;
    }

    public void setRole(String _role) {
        role = _role;
    }

    public void setEmail(String _email) {
        email = _email;
    }

    public void setUsername(String _username) {
        username = _username;
    }

    public void setPassword(String _password) {
        password = _password;
    }

}