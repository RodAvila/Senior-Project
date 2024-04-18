import React, {useEffect, useRef, useState} from 'react'
import {Typeahead} from "react-bootstrap-typeahead";
import {Form} from "react-bootstrap";


export default function Search({ setResults, tag }) {
    const [input, setInput] = useState("");
    const [multiSelections, setMultiSelections] = useState([]);

    const TAGS_API_BASE_URL = "http://localhost:8080/tags";

    const [loading, setLoading] = useState(true);
    const [tags, setTags] = useState(null);

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


    const fetchData = (value) => {
        fetch("http://localhost:8080/resources")
            .then((response)=>response.json())
            .then((json) => {
                const results = json.filter((resource) => {
                    return (
                        value &&
                        resource &&
                        resource.resourceName &&
                        resource.resourceName.toUpperCase().includes(value.toUpperCase()) &&
                            tagsExist(resource)
                    );
                });
                setResults(results);
            });
    }

    function tagsExist(resource) {
        if (multiSelections.length == 0) {
            return true;
        }

        var resourceTags = [];
        for (var i = 0; i < resource.tags.length; i++) {
            resourceTags.push(resource.tags[i].tag.tagName);
        }

        for (let i = 0 ; i < multiSelections.length; i++) {
            if (resourceTags.indexOf(multiSelections[i]) == -1)
                return false;
        }
        return true;
    }

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    }

    const handleFilterChange = () => {
        if (multiSelections.length != 0 && !input) {
            fetch("http://localhost:8080/resources")
                .then((response) => response.json())
                .then((json) => {
                    const results = json.filter((resource) => {
                        return (
                            tagsExist(resource)
                        );
                    });
                    setResults(results);
                });
        }
        if (input) {
            fetchData(input);
        }
    }

    return (
        <>
            {!loading &&(
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-4 col-sm-4">
                        <div className="input-group" id="search-box">
                            <input className="form-control border-end-0 border"
                                   type="search"
                                   placeholder="Search resource"
                                   aria-label="Search resource"
                                   id="example-search-input"
                                   value={input}
                                   onChange={(e) => handleChange(e.target.value)}
                            />

                            <button className="btn btn-outline-light border-spacing-0.5" type="button"
                                    id="button-addon2"><i className="bi bi-search"></i></button>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-2">
                        <div>
                            <Form.Group>
                                <Typeahead
                                    id="basic-typeahead-multiple"
                                    labelKey="name"
                                    multiple
                                    onInput={handleFilterChange()}
                                    onChange={setMultiSelections}
                                    options={tags.map(el => el.tagName)}
                                    placeholder="Filter with tags..."
                                    selected={multiSelections}
                                    style={{border: '1px solid #0576B8', borderRadius: '7px'}}
                                />
                            </Form.Group>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
};