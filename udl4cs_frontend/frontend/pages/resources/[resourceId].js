import React, {useEffect, useState} from "react";
import Navbar from "../../components/Navbar";
import { useRouter } from 'next/router';
import CommentBox from "../../components/CommentBox";
import Image from 'next/image';
import moment from "moment";

export default function ResourceId({ resource }) {
    const {id, resourceName, resourceDesc, topic, audience, resourceType, resourceLink, csta, gradeLevel, imageLink, uploadDate, module, comments, likes} = resource;
    //TODO need to update this later with resource attributes like likes, and num comments
    //TODO need to do API call to get and structure comments
    const router = useRouter();

    const refreshData = () => {
        router.replace(router.asPath);
    }

    const RESOURCE_API_BASE_URL = "http://localhost:8080/resources";
    const LIKE_BASE_API = "http://localhost:8080/resources/like/" + id + "/user1/1";
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

    const [like, setLike] = useState({
        id: resource.id,
        userId: "1"
    });

    const [responseLike, setResponseLike] = useState({
        id: resource.id,
        userId: "1"
    });

    const likeFunc = async(e) => {
        fetch(LIKE_BASE_API, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(like),
        });
        refreshData();
    };

    const reset = (e) => {
        e.preventDefault();
        setLike({
            id: resource.id,
            userId: "1"
        });
    };

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
                            <h1 style={{fontSize: '32px', marginBottom: '10px', color: '#333'}}>{resource.resourceName}</h1>
                        </div>
                        <div className="col-md-2" style={{textAlign: 'right'}}>
                            <a href="/resources" style={{borderRadius: '16px!important'}}
                               className="btn btn-secondary border-spacing-0.5" role="button">Go Back</a>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-12">
                            <div style={{
                                display: 'flex',
                                justifyContent: 'start',
                                alignItems: 'center',
                                fontSize: '14px',
                                color: '#777',
                                marginBottom: '16px'
                            }}>
                                <div style={{marginRight: '10px'}}>
                                    <span>Likes: {resource.numLikes}</span>
                                </div>
                                <div>
                                    <span>Comments: {resource.numComments}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <div id="imageDiv" style={{width: '100%', height: '100%', position: 'relative'}}>
                                {resource.imageLink && <Image src={resource.imageLink} className='card-img-top'
                                                              layout='fill'
                                                              objectFit='contain'/>}
                                {!resource.imageLink && <Image src={'/Resources_icon.png'} className='card-img-top' layout='fill'
                                                               objectFit='contain'/>}
                            </div>
                        </div>
                        <div className="col-md-9">
                            {resource.resourceDesc && <p style={{fontSize: '16px', color: '#555', marginBottom: '20px'}}>
                                <b>Summary: </b>{resource.resourceDesc}</p>}
                            {resource.topic && <p style={{fontSize: '16px', color: '#555', marginBottom: '20px'}}>
                                <b>Topic: </b>{resource.topic}</p>}
                            {resource.audience && <p style={{fontSize: '16px', color: '#555', marginBottom: '20px'}}>
                                <b>Audience: </b>{resource.audience}</p>}
                            {resource.resourceType && <p style={{fontSize: '16px', color: '#555', marginBottom: '20px'}}>
                                <b>Resource Type: </b>{resource.resourceType}</p>}
                            {resource.resourceLink && <p style={{
                                fontSize: '16px',
                                color: '#555',
                                marginBottom: '20px',
                                wordWrap: "break-word"
                            }}>
                                <b>Resource Link: </b><a target="_blank" href={resource.resourceLink}
                                                         className="position-relative link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover text-wrap">{resource.resourceLink}</a>
                            </p>}
                            {resource.csta && <p style={{fontSize: '16px', color: '#555', marginBottom: '20px'}}>
                                <b>CSTA: </b>{resource.csta}</p>}
                            {resource.csta && <p style={{fontSize: '16px', color: '#555', marginBottom: '20px'}}>
                                <a target="_blank" href="https://csteachers.org/k12standards/interactive/"
                                   className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"><i>Learn
                                    more about CSTA Standards</i></a></p>}
                            {resource.gradeLevel && <p style={{fontSize: '16px', color: '#555', marginBottom: '20px'}}>
                                <b>Grade Level: </b>{resource.gradeLevel}</p>}
                            {resource.uploadDate && <p style={{fontSize: '16px', color: '#555', marginBottom: '20px'}}>
                                <i>Uploaded {moment(resource.uploadDate).format("DD/MM/YYYY, h:mm a")}</i></p>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12" style={{
                            display: 'flex',
                            justifyContent: 'start',
                            alignItems: 'center',
                            marginBottom: '16px'
                        }}
                        >
                            <button className="btn btn-block btn-primary me-1"
                                    style={{
                                        width: 'fit-content',
                                        borderRadius: '16px!important'
                                    }}
                                    onClick={likeFunc}
                            ><i className="bi bi-hand-thumbs-up"></i> Like
                            </button>
                            <a className="btn btn-block btn-secondary"
                               style={{
                                   width: 'fit-content',
                                   borderRadius: '16px!important'
                               }}>
                                <i className="bi bi-chat"></i> Comment
                            </a>
                            <br/>

                            <br/>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <br/>
                        <div>
                            <div style={{ maxWidth: '90%', margin: 'auto', padding: '16px', borderRadius: '16px', backgroundColor: '#EAEAEA', boxShadow: '0 0 10px rgba(234, 234, 234, 0.8)' }}>
                                <h4 style={{ textAlign: 'left', color: '#000000', marginBottom: '20px', fontStyle: 'normal', fontWeight: '400', fontSize: '26px', lineHeight: '35px' }}>Comments</h4>
                            {resource.comments.map((commentItem, index) => {
                                return (
                                    <div key={`${commentItem.comment}_{commentItem.uploadDate}`} style={{backgroundColor: '#FFFFFF', width: '100%', marginBottom: '10px', paddingTop: '10px', paddingBottom: '0.5px', paddingLeft: '10px', paddingRight: '10px', borderRadius: '16px', boxShadow: '0 0 10px rgba(234, 234, 234, 0.8)' }}>
                                        {/*{(commentItem.user).map((userItem, index2) => {*/}
                                        {/*    <p key={`${userItem.firstName}_{userItem.lastName}`}>*/}
                                        {/*        {userItem.firstName} + ' ' + {userItem.lastName}*/}
                                        {/*    </p>*/}
                                        {/*})}*/}
                                        <b>{commentItem.user.firstName} {commentItem.user.lastName}</b> <i>Uploaded {moment(commentItem.uploadDate).format("DD/MM/YYYY, h:mm:ss a")}</i>
                                        <p>{commentItem.comment}</p>
                                    </div>
                                );
                            })}
                                <br />
                            <CommentBox refreshData={refreshData} resourceId={resource.id}/>
                            </div>
                        </div>
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