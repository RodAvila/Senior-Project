package com.edugators.udl4cs_resources.model;

import jakarta.persistence.*;

@Entity
@Table
public class user1s {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;
    private String firstName;
    private String lastName;
    private String role;
    private String email;
    private String username;
    private String password;

    public user1s(String _firstName, String _lastName, String _role, String _email, String _username, String _password) {
        super();
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.role = _role;
        this.email = _email;
        this.username = _username;
        this.password = _password;
    }

    public user1s() {

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

    public String getuser1name() {
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

    public void setuser1name(String _username) {
        username = _username;
    }

    public void setPassword(String _password) {
        password = _password;
    }

}
