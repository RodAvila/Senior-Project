package com.edugators.udl4cs_resources.model;

public class Resource {
    private int id;
    private String ResourceTitle;
    private String ResourceDesc;

    public Resource(int _id, String _ResourceTitle, String _ResourceDescription) {
        super();
        this.id = _id;
        this.ResourceTitle = _ResourceTitle;
        this.ResourceDesc = _ResourceDescription;
    }

    public int getId() {
        return id;
    }

    public String getResourceTitle() {
        return ResourceTitle;
    }

    public String getResourceDesc() {
        return ResourceDesc;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setResourceTitle(String _ResourceTitle) {
        this.ResourceTitle = _ResourceTitle;
    }

    public void setResourceDescription(String _ResourceDescription) {
        this.ResourceDesc = _ResourceDescription;
    }
}
