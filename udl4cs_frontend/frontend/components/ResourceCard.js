import React, { useState, useEffect } from "react";
import Image from 'next/image'
import Link from "next/link";
import useResourceData from "../useResourceData"

const ResourceCard = ({ resource }) => {

    //const { resources, loading } = useResourceData();
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
        <>
            {!loading && (


                <section className="mt-5 px-3">
                    <div>
                        <div className="row">
                            <div className="col-md-6">
                                <h2 className="primary">Resources</h2>
                            </div>
                            <div className="col-md-6" style={{ textAlign: 'right' }}>
                                <a href="/addresource" className="btn btn-primary border-spacing-0.5" role="button">+
                                    Upload
                                    Resource</a>
                            </div>
                        </div>

                        <div className="row my-5 align-items-center justify-content-center g-5">
                            {resources.map((resource) => (
                                <div className="col-8 col-lg-4 col-xl-3" >
                                    <div className="card h-100" key={resource.id}>
                                        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                                            {resource.imageLink && <img src={resource.imageLink} className='card-img-top'
                                                layout='fill'
                                                objectFit='contain' />}
                                            {!resource.imageLink && <div style={{ paddingRight: '50px', paddingLeft: '50px', paddingTop: '50px', paddingBottom: '50px' }}><img src={"/Resources_icon.png"} className='card-img-top' layout='fill'
                                                objectFit='contain' /></div>}
                                        </div>
                                        <div className="card-body scrollable">
                                            <h5 className="card-title">{resource.resourceName}</h5>
                                            {resource.resourceDesc ? (
                                                <p className="card-text">{resource.resourceDesc}</p>
                                            ) : (
                                                <p className="card-text">No description provided</p>
                                            )}
                                        </div>

                                        <div className="card-footer">
                                            {/*<span className="badge rounded-pill text-bg-primary outline-1 ">Tags</span>*/}
                                            <Link href={`/resources/${encodeURIComponent(resource.id)}`}
                                            >
                                                <button className="btn btn-primary">View more</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )
            }
        </>
    )
}

export default ResourceCard