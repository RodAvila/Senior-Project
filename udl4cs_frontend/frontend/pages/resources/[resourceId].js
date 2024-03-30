import React from "react";
import Navbar from "../../components/Navbar";
import { useRouter } from 'next/router';
import CommentBox from "../../components/CommentBox";
import Image from 'next/image'

export default function ResourceId({ resource }) {
    //TODO need to update this later with resource attributes like likes, and num comments
    //TODO need to do API call to get and structure comments
    const {id, resourceName, resourceDesc, topic, audience, resourceType, resourceLink, csta, gradeLevel, imageLink, uploadDate, module} = resource
    return (
        <>
            <Navbar/>
            <br/>
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
                    <div className="row">
                        <div className="col-md-10">
                            <h1 style={{fontSize: '32px', marginBottom: '10px', color: '#333'}}>{resourceName}</h1>
                        </div>
                        <div className="col-md-2" style={{textAlign: 'right'}}>
                            <a href="/resources" style={{borderRadius: '16px!important'}}
                               className="btn btn-secondary border-spacing-0.5" role="button">Go Back</a>
                        </div>
                    </div>
                    <br/>
                    <div className="col-md-12">
                        <p style={{fontSize: '16px', color: '#555', marginBottom: '20px'}}>{resourceDesc}</p>
                        <Image src={"/cover.png"} className='card-img-top'
                               width={500}
                               height={600}/>
                        <br />
                        <br />
                        <h2 style={{fontSize: '20px', marginBottom: '10px', color: '#333'}}>{topic}</h2>
                        <br/>
                        <h3 style={{fontSize: '20px', marginBottom: '10px', color: '#333'}}>Audience:
                            For {audience}</h3>
                        <p style={{fontSize: '16px', color: '#555', marginBottom: '20px'}}>Resource
                            Type: {resourceType}</p>
                        <p style={{fontSize: '16px', color: '#555', marginBottom: '20px'}}>Resource Link: <a
                            href={resourceLink}>{resourceLink}</a></p>
                        <p style={{fontSize: '16px', color: '#555', marginBottom: '20px'}}>CSTA: {csta}</p>
                        <p style={{fontSize: '16px', color: '#555', marginBottom: '20px'}}>Grade Level: {gradeLevel}</p>
                        <button className="btn btn-block btn-primary me-1"
                                style={{
                                    width: 'fit-content',
                                    borderRadius: '16px!important'
                                }}
                        ><i className="bi bi-hand-thumbs-up"></i> Like
                        </button>
                        <a className="btn btn-block btn-secondary"
                           style={{
                               width: 'fit-content',
                               borderRadius: '16px!important'
                           }}>
                            <i class="bi bi-chat"></i> Comment
                        </a>
                        <br/>

                        <br/>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'start',
                            alignItems: 'center',
                            fontSize: '14px',
                            color: '#777',
                            marginBottom: '16px'
                        }}>
                            <div style={{marginRight: '10px'}}>
                                <span>Likes: {0}</span>
                            </div>
                            <div>
                                <span>Comments: {0}</span>
                            </div>
                        </div>
                        <br />
                        <div><CommentBox resourceId={id}/></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps({params}) {
    const {resourceId} = params;
    //TODO we should make the URLS some sort of global/static variable that can be called from anywhere
    const RESOURCE_API_BASE_URL = "http://localhost:8080/resources";
    try {
        const response = await fetch(RESOURCE_API_BASE_URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const resources = await response.json();
        //TODO update this to use newer back end where we can get based on id this is temporary
        const resource = resources.find(item => item.id == resourceId);
        return {
            props: {
              resource
            },
        }
    } catch (error) {
        console.error("Error fetching data", error);
        return {
            props: {
              resource: {},
            },
        }
    }
}