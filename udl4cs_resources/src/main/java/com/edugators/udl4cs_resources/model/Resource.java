package com.edugators.udl4cs_resources.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class Resource {
    @Id
    private int id;
    private int numLikes;
    private int numComments;
    private String ResourceTitle;
    private String ResourceDesc;

    //public Resource(){}
    public Resource(int _id, int _numLikes, int _numComments, String _ResourceTitle, String _ResourceDescription) {
        super();
        this.id = _id;
        this.numLikes = _numLikes;
        this.numComments = _numComments;
        this.ResourceTitle = _ResourceTitle;
        this.ResourceDesc = _ResourceDescription;
    }

    public Resource() {

    }

    //public int getId() {
    //    return id;
    //}

    public int getNumComments() { return numComments; }

    public int getNumLikes() { return numLikes; }
    public String getResourceTitle() {
        return ResourceTitle;
    }

    public String getResourceDesc() {
        return ResourceDesc;
    }


    public void setResourceTitle(String _ResourceTitle) {
        this.ResourceTitle = _ResourceTitle;
    }

    public void setResourceDescription(String _ResourceDescription) {
        this.ResourceDesc = _ResourceDescription;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }
}
