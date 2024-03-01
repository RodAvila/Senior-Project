import {useEffect, useState} from "react";
import {getRequest} from "../service/resourceservice";
//import APIService from '../service/resourceservice'


export default function Resources() {

    async function getAllResources() {
        const allResources = await getRequest("/resources");
        setResourceList(allResources)
    }
    return (
        <>
            Here are our resources
        </>
    )
}