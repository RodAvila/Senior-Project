package com.edugators.udl4cs_resources.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
@Table(name = "resource_tags")
public class ResourceTag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIgnore
    private int id;

    @ManyToOne
    private Tag tag;

    @ManyToOne
    @JsonIgnore
    private Resource resource;

    public ResourceTag(int id, Resource resource, Tag tag) {
        this.id = id;
        this.resource = resource;
        this.tag = tag;
    }

    public ResourceTag() {

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Resource getResource() {
        return resource;
    }

    public void setResource(Resource resource) {
        this.resource = resource;
    }

    public Tag getTag() {
        return tag;
    }

    public void setTag(Tag tag) {
        this.tag = tag;
    }
}
