package com.edugators.udl4cs_resources.model;


import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "Tag")
public class Tag {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @Column(name = "name")
    private String name;

    @ManyToMany(mappedBy = "tags")
    private List<Resource> taggedResources = new ArrayList<>();

    public Tag(String tagName){
        this.name = tagName;
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

    public void tagResource(Resource resource){
        taggedResources.add(resource);
    }

    public List<Resource> getResources() {
        return taggedResources;
    }
    public void setResources(List<Resource>resources){
        this.taggedResources = resources;
    }
}
