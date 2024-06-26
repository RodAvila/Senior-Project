import React, {useEffect, useState} from "react";
import Navbar from "../../components/Navbar";
import { useRouter } from 'next/router';
import { useAuth } from '@/AuthContext';
import CommentBox from "../../components/CommentBox";
import Image from 'next/image';
import moment from "moment";
import EditResource from "../../components/EditResource";

export default function ResourceId({ resource }) {
    // Establishes the fields of resources with all components from JSON
    const {id, resourceName, resourceDesc, topic, audience, resourceType, resourceLink, csta, gradeLevel, imageLink, uploadDate, module, comments, likes, isPublic} = resource;

    // Router used to refresh data without refreshing page
    const router = useRouter();

    // Retrieve the user id from the token of the person logged in
    const { authId } = useAuth();

    // Refreshing the data on the page after form submissions
    const refreshData = () => {
        router.replace(router.asPath);
    }

    // Establishes Resource back-end API to retrieve resources
    const RESOURCE_API_BASE_URL = "http://localhost:8080/resources";

    // Establishes Like back-end API to post and retrieve likes
    const LIKE_BASE_API = "http://localhost:8080/resources/like/" + id + "/user1/" + authId;

    // Establishes Delete back-end API to delete resources
    const DELETE_BASE_API = "http://localhost:8080/resources/" + id + "/user1/" + authId;

    // Use state for resources, set upon fetching resource data
    const [resources, setResources] = useState(null);

    // Use stae for loading so that it tracks when fetching data
    const [loading, setLoading] = useState(true);

    // Fetch data about resources
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

    // Use effect to fetch resource data
    useEffect(() => {
        fetchData();
    }, [resource]);

    // Like information saved mapped to user use state
    const [like, setLike] = useState({
        id: resource.id,
        userId: authId
    });

    // Like function creates PUT request to like api to post like (likes/unlikes resource for given user)
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

    // Delete resource use state to store information about resource id to delete and user id who deletes
    const [deleteRes, setDeleteRes] = useState({
        id: resource.id,
        userId: authId
    })

    // Delete function creates DELETE request to delete a resource
    const deleteResourceFunc = async(e) => {
        fetch(DELETE_BASE_API, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(deleteRes),
        });
        refreshData();
    }

    // Resets like information for a certain user
    const reset = (e) => {
        e.preventDefault();
        setLike({
            id: resource.id,
            userId: authId
        });
    };

    return (
        <>
            <Navbar />
            <br />
            <div className="container d-flex align-items-center justify-content-center">
                <div className="col-lg-8 col-sm-12 col-12" style={{
                    borderRadius: '16px',
                    margin: 'auto',
                    padding: '20px',
                    backgroundColor: '#F9F9F9',
                    boxShadow: '0 0 10px rgba(234, 234, 234, 0.8)'
                }}>
                    { /*FOR ADMIN USERS ONLY */}
                    <div className="row">
                        <div className="col-md-10">
                            <h2 className="primary">{resource.resourceName}</h2>
                        </div>
                        <div className="col-md-2" style={{ textAlign: 'right' }}>
                            <a href="/resources" style={{ borderRadius: '16px!important' }}
                               className="btn btn-secondary border-spacing-0.5" role="button">Go Back</a>
                        </div>
                        { /*FOR ADMIN USERS ONLY */}
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-12">
                            <div style={{
                                display: 'flex',
                                justifyContent: 'start',
                                alignItems: 'center',
                                fontSize: '16px',
                                color: '#777',
                                marginBottom: '16px'
                            }}>
                                <div style={{ marginRight: '10px' }}>
                                    <span>Likes: {resource.numLikes}</span>
                                </div>
                                <div>
                                    <span>Comments: {resource.numComments}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-md-9">
                            {resource.resourceDesc &&
                                <p style={{ fontSize: '16px', color: 'black', marginBottom: '20px' }}>
                                    <b>Summary: </b>{resource.resourceDesc}</p>}
                            {resource.topic && <p style={{ fontSize: '16px', color: 'black', marginBottom: '20px' }}>
                                <b>Topic: </b>{resource.topic}</p>}
                            {resource.audience && <p style={{ fontSize: '16px', color: 'black', marginBottom: '20px' }}>
                                <b>Audience: </b>{resource.audience}</p>}
                            {resource.resourceType &&
                                <p style={{ fontSize: '16px', color: 'black', marginBottom: '20px' }}>
                                    <b>Resource Type: </b>{resource.resourceType}</p>}
                            {resource.resourceLink && <p style={{
                                fontSize: '16px',
                                color: 'black',
                                marginBottom: '20px',
                                wordWrap: "break-word"
                            }}>
                                <b>Resource Link: </b><a target="_blank" href={resource.resourceLink}
                                                         className="position-relative link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover text-wrap">{resource.resourceLink}</a>
                            </p>}
                            {resource.csta && <p style={{ fontSize: '16px', color: 'black', marginBottom: '20px' }}>
                                <b>CSTA: </b>{resource.csta}</p>}
                            {resource.csta && <p style={{ fontSize: '16px', color: 'black', marginBottom: '20px' }}>
                                <a target="_blank" href="https://csteachers.org/teacherstandards/interactive/"
                                   className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"><i>🛈 Learn more about CSTA
                                    Standards</i></a></p>}
                            {resource.gradeLevel && <p style={{ fontSize: '16px', color: 'black', marginBottom: '20px' }}>
                                <b>Grade Level: </b>{resource.gradeLevel}</p>}
                            {resource.tags && resource.tags.length > 0 &&
                                <div style={{ fontSize: '16px', color: 'black', marginBottom: '20px' }}>
                                    <b>Tags: </b>{resource.tags.map(txt => <span
                                    style={{ whiteSpace: "nowrap ", display: "inline-block", margin: '3px 3px 3px 3px' }}><span
                                    style={{
                                        border: "1px solid #0B1A73",
                                        paddingBottom: '3px',
                                        color: "white",
                                        backgroundColor: "#0B1A73",
                                        borderRadius: "10px"
                                    }}> &nbsp; {txt.tag.tagName} &nbsp; </span> &nbsp;</span>)}</div>}
                            {resource.uploadDate && <p style={{ fontSize: '16px', color: '#555', marginBottom: '20px' }}>
                                <i>Uploaded {moment(resource.uploadDate).format("MM/DD/YYYY, h:mm a")}</i></p>}
                            <div>
                                {isPublic ? (
                                    <a style={{ borderRadius: '16px!important' }}
                                        className="btn btn-secondary border-spacing-0.5"
                                        data-bs-toggle="modal" data-bs-target="#editresource" role="button">Edit Resource</a>
                                ) : (
                                    <a style={{ borderRadius: '16px!important' }}
                                        className="btn btn-secondary border-spacing-0.5"
                                            data-bs-toggle="modal" data-bs-target="#editresource" role="button">Approve Resource</a>
                                )}
                                <EditResource resource={resource} refetchData={refreshData}></EditResource>
                                &nbsp;
                                <a style={{ borderRadius: '16px!important' }}
                                   className="btn btn-danger border-spacing-0.5"
                                   data-bs-toggle="modal" data-bs-target="#deleteResource" role="button">Delete Resource</a>
                                <div className="modal fade" id="deleteResource" tabindex="-1" aria-labelledby="deleteResourceLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="deleteResourceLabel">Delete
                                                    Resource</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                        aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <p>Are you sure you want to delete this resource?</p>
                                                <p><b>{resource.resourceName}</b></p>
                                                <p><i>{resource.resourceDesc}</i></p>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary"
                                                        data-bs-dismiss="modal" onClick={refreshData}>Close
                                                </button>
                                                <a href="/resources" type="button" className="btn btn-primary"
                                                   onClick={deleteResourceFunc}>Confirm Delete
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div id="imageDiv" style={{ width: '100%', height: '100%', position: 'relative' }}>
                                {resource.imageLink && <Image src={resource.imageLink} className='card-img-top'
                                                              layout='fill'
                                                              objectFit='contain' />}
                                {!resource.imageLink && <Image src={'/Resources_icon.png'} className='card-img-top' layout='fill'
                                                               objectFit='contain' />}
                            </div>
                        </div>
                    </div>
                    <br />
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
                                        borderRadius: '16px!important',
                                    }}
                                    onClick={likeFunc}
                            ><i className="bi bi-hand-thumbs-up"></i> Like
                            </button>
                            <a href="#inputCommentBox" className="btn btn-block btn-light btn-outline-dark"
                               style={{
                                   width: 'fit-content',
                                   borderRadius: '16px!important'
                               }}>
                                <i className="bi bi-chat"></i> Comment
                            </a>
                            <br />

                            <br />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <br />
                        <div>
                            <div style={{ maxWidth: '90%', margin: 'auto', padding: '16px', borderRadius: '16px', backgroundColor: '#EAEAEA', boxShadow: '0 0 10px rgba(234, 234, 234, 0.8)' }}>
                                <h4 style={{ textAlign: 'left', color: '#000000', marginBottom: '20px', fontStyle: 'normal', fontWeight: '400', fontSize: '26px', lineHeight: '35px' }}>Comments</h4>
                                {resource.comments.map((commentItem, index) => {
                                    return (
                                        <div key={`${commentItem.comment}_{commentItem.uploadDate}`} style={{ backgroundColor: '#FFFFFF', width: '100%', marginBottom: '10px', paddingTop: '10px', paddingBottom: '0.5px', paddingLeft: '10px', paddingRight: '10px', borderRadius: '16px', boxShadow: '0 0 10px rgba(234, 234, 234, 0.8)' }}>
                                            {/*{(commentItem.user).map((userItem, index2) => {*/}
                                            {/*    <p key={`${userItem.firstName}_{userItem.lastName}`}>*/}
                                            {/*        {userItem.firstName} + ' ' + {userItem.lastName}*/}
                                            {/*    </p>*/}
                                            {/*})}*/}
                                            <b>{commentItem.user.firstName} {commentItem.user.lastName}</b> <i>Uploaded {moment(commentItem.uploadDate).format("MM/DD/YYYY, h:mm a")}</i>
                                            <p>{commentItem.comment}</p>
                                        </div>
                                    );
                                })}
                                <br />
                                <CommentBox refreshData={refreshData} resourceId={resource.id} />
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