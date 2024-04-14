package com.edugators.udl4cs_resources.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table
public class Tag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "name")
    private String name;

    public Tag(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public Tag() {

    }
    public int getId() {
        return id;
    }

    public String getTagName() {
        return name;
    }

    public void setTagName(String tagName) {
        this.name = tagName;
    }
}