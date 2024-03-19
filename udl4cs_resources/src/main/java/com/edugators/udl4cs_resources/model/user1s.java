package com.edugators.udl4cs_resources.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class user1s {
    @Id
    private int id;
    private String firstName;
    private String lastName;
    private String role;
    private String email;
    private String user1name;
    private String password;

    public user1s(int _id, String _firstName, String _lastName, String _role, String _email, String _user1name, String _password) {
        super();
        this.id = _id;
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.role = _role;
        this.email = _email;
        this.user1name = _user1name;
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
        return user1name;
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

    public void setuser1name(String _user1name) {
        user1name = _user1name;
    }

    public void setPassword(String _password) {
        password = _password;
    }

}
