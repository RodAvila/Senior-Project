import React from "react";
import Navbar from "../../components/Navbar";
import { useRouter } from 'next/router';
import {CommentBox} from "../../components/CommentBox";

export default function ResourceId({ resource }) {
    //TODO need to update this later with resource attributes like likes, and num comments
    //TODO need to do API call to get and structure comments
    const {id, numLikes, numComments, resourceTitle, resourceDesc} = resource
    return (
        <>
            <Navbar />
            <br />
            <div style={{ maxWidth: '90%', margin: 'auto', padding: '20px', borderRadius: '16px', backgroundColor: '#F9F9F9', boxShadow: '0 0 10px rgba(234, 234, 234, 0.8)' }}>
                <h1 style={{ fontSize: '32px', marginBottom: '10px', color: '#333' }}>{resourceTitle}</h1>
                <p style={{ fontSize: '16px', color: '#555', marginBottom: '20px' }}>{resourceDesc}</p>
                <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', fontSize: '14px', color: '#777', marginBottom: '16px' }}>
                    <div style={{ marginRight: '10px' }}>
                        <span>Likes: {numLikes}</span>
                    </div>
                    <div>
                        <span>Comments: {numComments}</span>
                    </div>
                </div>
                <div> <CommentBox /> </div>
            </div>
        </>
    )
}

export async function getServerSideProps({ params }) {
    const { resourceId } = params;
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