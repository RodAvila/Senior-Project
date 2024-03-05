package com.edugators.udl4cs_resources.model;

public class User {
    private int id;
    private String firstName;
    private String lastName;
    private String role;
    private String email;
    private String username;
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
