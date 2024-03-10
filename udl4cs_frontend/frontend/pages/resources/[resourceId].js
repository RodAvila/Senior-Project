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
            <Navbar></Navbar>
            <h1>{resourceTitle}</h1>
            <p>{resourceDesc}</p>
            <p>Likes: {numLikes}</p>
            <p>Comments: {numComments}</p>
            <CommentBox></CommentBox>
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