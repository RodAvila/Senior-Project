import React from "react";
import {useState} from "react";
import ResourceTable from "./ResourceTable";


const AddResource = () => {
    const RESOURCE_API_BASE_URL = "http://localhost:8080/resources";

    const [resource, setResource] = useState({
        id: "",
        numLikes: "0",
        numComments: "0",
        resourceTitle: "",
        resourceDesc: ""
    });

    const [responseResource, setResponseResource] = useState({
        id: "",
        numLikes: "0",
        numComments: "0",
        resourceTitle: "",
        resourceDesc: ""
    });

    const handleChange = (event) => {
        const value = event.target.value;
        setResource({ ...resource, [event.target.name]: value });
    };

    const saveResource = async(e) => {
        e.preventDefault();
        console.log(JSON.stringify(resource));
        const response = await fetch(RESOURCE_API_BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(resource),
        });
        if (!response.ok) {
            throw new Error("Something went wrong");
        }
        const _resource = await response.json();
        setResponseResource(_resource);
        reset(e);
    };

    const reset = (e) => {
        e.preventDefault();
        setResource({
            id: "",
            numLikes: "0",
            numComments: "0",
            resourceTitle: "",
            resourceDesc: ""
        });
    };

    return (
        <>
            <div>
                {/*<br/>*/}
                {/*<div className="col-md-12">*/}

                {/*    <button type="button" className="btn btn-primary">*/}
                {/*        Add Resource (Should map to Modal)*/}
                {/*    </button>*/}
                {/*</div>*/}
                <br/>
                <h2>This is the form for adding a new resource</h2>
                <br/>
                <div className="form-group">
                    <label>Resource Title</label>
                    <input type="text"
                           name="resourceTitle"
                           value={resource.resourceTitle}
                           onChange={(e) => handleChange(e)}
                           className="form-control"
                           placeholder="Resource Title"></input>
                    <br/>
                    <label>Resource Description</label>
                    <input type="text"
                           name="resourceDesc"
                           value={resource.resourceDesc}
                           onChange={(e2) => handleChange(e2)}
                           className="form-control"
                           placeholder="Resource Description"></input>
                </div>
                <br/>
                    <button onClick={saveResource}
                        className="btn btn-success">
                        Add Resource
                    </button>
                <br/>
            </div>
            <br/>
            <hr />
            <br />
            <ResourceTable resource = {responseResource}></ResourceTable>
        </>
    );
};

export default AddResource;