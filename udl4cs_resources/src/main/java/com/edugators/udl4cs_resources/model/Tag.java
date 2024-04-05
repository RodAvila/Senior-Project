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
    @Column(name = "Tag")
    private String tagName;

    @ManyToMany(mappedBy = "tags")
    private List<Resource> taggedResources = new ArrayList<>();

    public Tag(String tagName){
        this.tagName = tagName;
    }

    public Tag() {

    }

    public void tagResource(Resource resource){
        taggedResources.add(resource);
    }
}
