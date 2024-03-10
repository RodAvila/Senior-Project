import React from "react";
import Navbar from "../../components/Navbar";
import { useRouter } from 'next/router';

export default function ResourceId({ resource }) {
    const {id, resourceTitle, resourceDesc} = resource
    return (
        <>
            <Navbar></Navbar>
            <h1>{resourceTitle}</h1>
            <p>{resourceDesc}</p>
        </>
    )
}

export async function getServerSideProps({ params }) {
    const { resourceId } = params;
    const RESOURCE_API_BASE_URL = "http://localhost:8080/resources";
    try {
        const response = await fetch(RESOURCE_API_BASE_URL);
        const resources = await response.json();
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