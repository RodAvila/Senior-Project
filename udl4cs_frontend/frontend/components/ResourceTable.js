import { React, useState, useEffect } from "react";
import Resource from "./Resource";

const ResourceTable = ({ resource }) => {
    const RESOURCE_API_BASE_URL = "http://localhost:8080/resources";
    const [resources, setResources] = useState(null);
    const [loading, setLoading] = useState(true);

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
                const resources = await response.json();
                setResources(resources);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, [resource]);

    return (
        <div className="col-md-12">
            <table className="table">
                <thead className="bg-gray-50">
                <tr>
                    <th>Resource Id</th>
                    <th>Resource Likes</th>
                    <th>Resource Comments</th>
                    <th>Resource Title</th>
                    <th>Resource Description</th>
                </tr>
                </thead>
                {!loading && (
                    <tbody className="bg-white">
                    {resources.map((resource) => (
                        <Resource resource={resource} key={resource.id}/>
                    ))}
                    </tbody>
                )}
            </table>
        </div>
    )
}

export default ResourceTable;