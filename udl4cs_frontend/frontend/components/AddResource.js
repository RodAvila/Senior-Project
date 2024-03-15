import React from "react";
import {useState} from "react";
import ResourceTable from "./ResourceTable";
import {CommentBox} from "./CommentBox";


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
            <div className="container d-flex align-items-center justify-content-center">
                <div className="col-lg-8 col-sm-12 col-12" style={{
                    borderRadius: '16px',
                    margin: 'auto',
                    padding: '20px',
                    backgroundColor: '#F9F9F9',
                    boxShadow: '0 0 10px rgba(234, 234, 234, 0.8)'
                }}>
                {/*<br/>*/}
                {/*<div className="col-md-12">*/}

                {/*    <button type="button" className="btn btn-primary">*/}
                {/*        Add Resource (Should map to Modal)*/}
                {/*    </button>*/}
                {/*</div>*/}
                <div class="row">
                    <div class="col-md-6">
                        <h1 style={{fontSize: '32px', marginBottom: '10px', color: '#333'}}>Add Resource</h1>
                    </div>
                    <div className="col-md-6" style={{textAlign: 'right'}}>
                        <a href="/resources" style={{borderRadius: '16px!important'}} className="btn btn-secondary border-spacing-0.5" role="button">Go Back</a>
                    </div>
                </div>
                    <br/>
                    <div class="col-md-12">
                        <form>
                            <div className="form-floating mb-3">
                                <input type="text"
                                       name="resourceTitle"
                                       value={resource.resourceTitle}
                                       onChange={(e) => handleChange(e)}
                                       className="form-control"
                                       style={{borderRadius: '16px!important'}}
                                       id="inputResourceTitle"
                                       placeholder="Resource Title"
                                       required></input>
                                <label htmlFor="inputResourceTitle">Add a title</label>
                            </div>
                            <br/>
                            <div className="form-group mb-3">
                            <textarea rows="5" type="text"
                                      name="resourceDesc"
                                      value={resource.resourceDesc}
                                      onChange={(e2) => handleChange(e2)}
                                      className="form-control"
                                      style={{borderRadius: '16px!important'}}
                                      id="inputResourceDesc"
                                      placeholder="Add a detailed Description"
                                      required></textarea>
                            </div>
                            <br/>
                            <div className="form-floating mb-3">
                                <input type="text"
                                       name="resourceTags"
                                       onChange={(e3) => handleChange(e3)}
                                       className="form-control"
                                       style={{borderRadius: '16px!important'}}
                                       id="inputResourceTags"
                                       placeholder="Add tags"
                                ></input>
                                <label htmlFor="inputResourceTags">Add tags</label>
                            </div>
                            <br/>
                            <div className="form-floating mb-3">
                                <input type="text"
                                       name="resourceLink"
                                       onChange={(e4) => handleChange(e4)}
                                       className="form-control"
                                       style={{borderRadius: '16px!important'}}
                                       id="inputUploadLink"
                                       placeholder="Upload Link"
                                ></input>
                                <label htmlFor="inputUploadLink">Upload Link</label>
                            </div>
                            <br />
                            <div className="form-group mb-3">
                                <input className="form-control form-control-lg"
                                       id="formFileLg"
                                       type="file"
                                       name="resourceFile"
                                       onChange={(e5) => handleChange(e5)}
                                       className="form-control"
                                       style={{borderRadius: '16px!important'}}
                                       id="inputFile"
                                       placeholder="Attach File"/>
                            </div>
                            <br/>
                            <div class="row">
                                <div class="col-md-4">
                                <button onClick={saveResource}
                                            className="btn btn-primary"
                                            style={{borderRadius: '16px!important'}}>
                                        Submit for Approval
                                    </button>
                                </div>
                            </div>
                        </form>
                        <br/>
                    </div>
                </div>
            </div>
            {/*<br/>*/}
            {/*<hr/>*/}
            {/*<br/>*/}
            {/*<ResourceTable resource={responseResource}></ResourceTable>*/}
        </>
    );
};

export default AddResource;