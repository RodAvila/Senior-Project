import React, {useEffect} from "react";
import {useState} from "react";
import ResourceTable from "./ResourceTable";
import {CommentBox} from "./CommentBox";
import { Form } from "react-bootstrap";
import { Typeahead } from 'react-bootstrap-typeahead';
import * as PropTypes from "prop-types";
import 'react-bootstrap-typeahead/css/Typeahead.css';


Typeahead.propTypes = {
    onChange: PropTypes.func,
    multiple: PropTypes.bool,
    options: PropTypes.arrayOf(PropTypes.string),
    id: PropTypes.string,
    placeholder: PropTypes.string,
    labelKey: PropTypes.string,
    selected: PropTypes.arrayOf(PropTypes.any)
};

const AddResource = ({ tag }) => {
    const RESOURCE_API_BASE_URL = "http://localhost:8080/resources/user1/1";
    const TAGS_API_BASE_URL = "http://localhost:8080/tags";

    const [loading, setLoading] = useState(true);
    const [tags, setTags] = useState(null);


    const [multiSelections, setMultiSelections] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(TAGS_API_BASE_URL, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                const tags = await response.json();
                setTags(tags);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, [tag]);

    const tagValues =[{  }];

    const [resource, setResource] = useState({
        resourceName: "",
        topic: "",
        resourceDesc: "",
        audience: "",
        resourceType: "",
        resourceLink: "",
        csta: "",
        gradeLevel: "",
        imageLink: "",
        uploadDate: "",
        module: "",
        tagIds: []
    });

    const [responseResource, setResponseResource] = useState({
        resourceName: "",
        topic: "",
        resourceDesc: "",
        audience: "",
        resourceType: "",
        resourceLink: "",
        csta: "",
        gradeLevel: "",
        imageLink: "",
        uploadDate: "",
        module: "",
        tagIds: []
    });

    const handleChange = (event) => {
        const value = event.target.value;
        setResource({ ...resource, [event.target.name]: value });
    };

    const saveResource = async(e) => {
        e.preventDefault();
        for (let i = 0; i < multiSelections.length; i++) {
            for (let j = 0; j < tags.length; j++) {
                if (tags[j].tagName == multiSelections[i]) {
                    resource.tagIds.push(tags[j].id);
                }
            }
        }
        const response = await fetch(RESOURCE_API_BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(resource),
        });
        setMultiSelections([]);
        if (!response.ok) {
            throw new Error("Something went wrong");
        }
        reset(e);
    };

    const reset = (e) => {
        e.preventDefault();
        setResource({
            resourceName: "",
            topic: "",
            resourceDesc: "",
            audience: "",
            resourceType: "",
            resourceLink: "",
            csta: "",
            gradeLevel: "",
            imageLink: "",
            uploadDate: "",
            module: "",
            tagIds: []
        });
    };

    return (
        <>
            {!loading && (
                <div className="container d-flex align-items-center justify-content-center">
                    <div className="col-lg-8 col-sm-12 col-12" style={{
                        borderRadius: '16px',
                        margin: 'auto',
                        padding: '20px',
                        backgroundColor: '#F9F9F9',
                        boxShadow: '0 0 10px rgba(234, 234, 234, 0.8)'
                    }}>
                    <div className="row">
                        <div className="col-md-6">
                            <h1 style={{fontSize: '32px', marginBottom: '10px', color: '#333'}}>Add Resource</h1>
                        </div>
                        <div className="col-md-6" style={{textAlign: 'right'}}>
                            <a href="/resources" style={{borderRadius: '16px!important'}} className="btn btn-secondary border-spacing-0.5" role="button">Go Back</a>
                        </div>
                    </div>
                        <br/>
                        <div className="col-md-12">
                            <Form>
                                <div className="form-floating mb-3">
                                    <input type="text"
                                           name="resourceName"
                                           value={resource.resourceName}
                                           onChange={(e) => handleChange(e)}
                                           className="form-control"
                                           style={{borderRadius: '16px!important'}}
                                           id="inputresourceName"
                                           placeholder="Resource Title"
                                           required></input>
                                    <label htmlFor="inputresourceName">Add a title</label>
                                </div>
                                <br/>
                                <div className="form-floating mb-3">
                                    <input type="text"
                                           name="topic"
                                           value={resource.topic}
                                           onChange={(e6) => handleChange(e6)}
                                           className="form-control"
                                           style={{borderRadius: '16px!important'}}
                                           id="inputResourceTopic"
                                           placeholder="Resource Topic"
                                           required></input>
                                    <label htmlFor="inputResourceTopic">Add topic of the resource</label>
                                </div>
                                <br/>
                                <div className="form-floating mb-3">
                                    <input type="text"
                                           name="audience"
                                           value={resource.audience}
                                           onChange={(e7) => handleChange(e7)}
                                           className="form-control"
                                           style={{borderRadius: '16px!important'}}
                                           id="inputResourceAudience"
                                           placeholder="Resource Audience"
                                           required></input>
                                    <label htmlFor="inputResourceAudience">Add audience of the resource</label>
                                </div>
                                <br/>
                                <div className="form-floating mb-3">
                                    <input type="text"
                                           name="gradeLevel"
                                           value={resource.gradeLevel}
                                           onChange={(e8) => handleChange(e8)}
                                           className="form-control"
                                           style={{borderRadius: '16px!important'}}
                                           id="inputResourceGrade"
                                           placeholder="Resource Grade Level"
                                           required></input>
                                    <label htmlFor="inputResourceGrade">Add grade level of resource</label>
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
                                    <Form.Group className="mt-3">
                                        <Typeahead
                                            id="basic-typeahead-multiple"
                                            labelKey="name"
                                            multiple
                                            onChange={setMultiSelections}
                                            options={tags.map(el => el.tagName)}
                                            placeholder="Choose tags..."
                                            selected={multiSelections}
                                        />
                                    </Form.Group>
                                </div>
                                <br/>
                                <a target="_blank" href="https://csteachers.org/k12standards/interactive/"
                                   className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"><i>🛈 Learn more about CSTA
                                    Standards</i></a>
                                <br />
                                <br />
                                <div className="form-floating mb-3">
                                    <input type="text"
                                           name="csta"
                                           value={resource.csta}
                                           onChange={(e10) => handleChange(e10)}
                                           className="form-control"
                                           style={{borderRadius: '16px!important'}}
                                           id="inputcsta"
                                           placeholder="Resource CSTA"
                                           required></input>
                                    <label htmlFor="inputResourceGrade">Add CSTA K-12 Standard for resource</label>
                                </div>
                                <br/>
                                <div className="form-floating mb-3">
                                    <input type="text"
                                           name="resourceLink"
                                           value={resource.resourceLink}
                                           onChange={(e4) => handleChange(e4)}
                                           className="form-control"
                                           style={{borderRadius: '16px!important'}}
                                           id="inputUploadLink"
                                           placeholder="Upload Link"
                                    ></input>
                                    <label htmlFor="inputUploadLink">Upload Link</label>
                                </div>
                                <br/>
                                <div className="form-floating mb-3">
                                    <input type="text"
                                           name="imageLink"
                                           value={resource.imageLink}
                                           onChange={(e9) => handleChange(e9)}
                                           className="form-control"
                                           style={{borderRadius: '16px!important'}}
                                           id="inputImageLink"
                                           placeholder="Upload Image Link"
                                    ></input>
                                    <label htmlFor="inputUploadLink">Upload Image Link</label>
                                </div>
                                <br/>
                                <div className="row">
                                    <div className="col-md-4">
                                        <button onClick={saveResource}
                                                className="btn btn-primary"
                                                style={{borderRadius: '16px!important'}}>
                                            Submit for Approval
                                        </button>
                                    </div>
                                </div>
                            </Form>
                            <br/>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default AddResource;