import React, { useState, useEffect } from "react";
import {Form} from "react-bootstrap";
import {Typeahead} from "react-bootstrap-typeahead";
import { useAuth } from '@/AuthContext';
import * as PropTypes from "prop-types";
import 'react-bootstrap-typeahead/css/Typeahead.css';
import Link from "next/link";
import BootstrapModalManager from "react-bootstrap/BootstrapModalManager";

// Establishes the REACT plugin called typeahead (used for creating dynamic inputs for resource tags)
Typeahead.propTypes = {
    onChange: PropTypes.func,
    multiple: PropTypes.bool,
    options: PropTypes.arrayOf(PropTypes.string),
    id: PropTypes.string,
    placeholder: PropTypes.string,
    labelKey: PropTypes.string,
    selected: PropTypes.arrayOf(PropTypes.any)
};

// Edit Resource component which opens in a modal window and includes form to edit any resource attribute, allowing users to save updated information dynamically
export default function EditResource({ resource, refetchData }) {
    // Retrieve the user ID that is currently logged in using token data
    const { authId } = useAuth();

    // Establish relevant URLS to the database API for resources and updating resources
    const RESOURCE_API_BASE_URL = "http://localhost:8080/resources/" + resource.id;
    const UPDATE_RESOURCE_API_BASE_URL = "http://localhost:8080/resources/" + resource.id + "/user1/" + authId;

    // resourceUp holds the state of the current resource attributes that will be updated
    const [resourceUp, setResourceUp] = useState(resource);

    // Keep track of when data fetching is loading (and to only display data when fully loaded)
    const [loading, setLoading] = useState(true);

    // Establish relevant URL to the database API for tag information
    const TAGS_API_BASE_URL = "http://localhost:8080/tags";

    // Keep track of tags from database
    const [tags, setTags] = useState(null);

    // Keeps track of all tags selected from the tag input
    const [multiSelections, setMultiSelections] = useState([]);

    // Fetches all the tags from the database, updating the tag input options
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
    }, []);

    // Fetches data from the resources API, setting up the initial resource attributes for all the resourceUp attributes
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(RESOURCE_API_BASE_URL, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                const resourceUp = await response.json();
                setResourceUp(resourceUp);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();

        // If the resource has tags, initialize the multi-selections of the tag input to include the already added tags
        if (resource.tags.length != 0)
            setMultiSelections(resourceUp.tags.map(el => el.tag.tagName));
    }, []);

    // Handle change on any input attributes of the resource updating form (attributes are linked by the 'name' attribute in inputs)
    const handleChange = (event) => {
        const value = event.target.value;
        setResourceUp({ ...resourceUp, [event.target.name]: value });
    }

    // Save new updated resource to the database
    const saveResource = async(e) => {
        // Prevent page refresh after form submission
        e.preventDefault();

        // Create an array of tagId's based on the inputs in the tag multi-selection input (API takes tagId's rather than tag names)
        const tagIds = [];
        for (let i = 0; i < multiSelections.length; i++) {
            for (let j = 0; j < tags.length; j++) {
                if (tags[j].tagName == multiSelections[i]) {
                    tagIds.push(tags[j].id);
                }
            }
        }

        // Update the resource's tagIds to reflect current tag multi-selection input data
        resourceUp.tagIds = tagIds;

        // Put response to update the resource using all of its attributes
        const response = await fetch(UPDATE_RESOURCE_API_BASE_URL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(resourceUp),
        });
        if (!response.ok) {
            throw new Error("Something went wrong");
        }

        // Calls passed-in refetch data function to fetch data again in the parent component '[resourceId].js' to prevent needing to refresh the page
        refetchData();
    };




    return (
        <>

            {!loading && (
                <div class="modal fade" id="editresource" tabindex="-1" aria-labelledby="editResourceLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <Form>
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="editResourceLabel">Edit Resource</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                    <div className="form-floating mb-3">
                                        <input type="text"
                                               name="resourceName"
                                               value={resourceUp.resourceName}
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
                                               value={resourceUp.topic}
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
                                               value={resourceUp.audience}
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
                                               value={resourceUp.gradeLevel}
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
                                          value={resourceUp.resourceDesc}
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
                                    <div className="form-floating mb-3">
                                        <input type="text"
                                               name="csta"
                                               value={resourceUp.csta}
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
                                               value={resourceUp.resourceLink}
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
                                               value={resourceUp.imageLink}
                                               onChange={(e9) => handleChange(e9)}
                                               className="form-control"
                                               style={{borderRadius: '16px!important'}}
                                               id="inputImageLink"
                                               placeholder="Upload Image Link"
                                        ></input>
                                        <label htmlFor="inputUploadLink">Upload Image Link</label>
                                    </div>
                                    <br/>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={refetchData}>Close</button>
                                <button type="button" class="btn btn-primary" onClick={saveResource}>Save changes</button>
                            </div>
                        </div>
                        </Form>
                    </div>
                </div>
            )}
        </>

    )
}