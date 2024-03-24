import React, {useRef, useState} from 'react'


export default function Search({ setResults }) {
    const [input, setInput] = useState("");

    const fetchData = (value) => {
        fetch("http://localhost:8080/resources")
            .then((response)=>response.json())
            .then((json) => {
                const results = json.filter((resource) => {
                    return (
                        value &&
                        resource &&
                        resource.resourceName &&
                        resource.resourceName.toLowerCase().includes(value)
                    );
                });
                setResults(results);
            });
    }

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    }

    return (
        <div className="row align-items-center justify-content-center">
            <div className="col-md-5 col-sm-5">
                <div className="input-group">
                    <input className="form-control border-end-0 border"
                           type="search"
                           placeholder="Search resource"
                           aria-label="Search resource"
                           id="example-search-input"
                           value={input}
                           onChange={(e)=>handleChange(e.target.value)}
                    />
                    <button className="btn btn-outline-secondary border-spacing-0.5" type="button" id="button-addon2"><i class="bi bi-search"></i></button>
                </div>
            </div>
        </div>

    )
};