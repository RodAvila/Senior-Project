import React from 'react';
import AddResource from '../components/AddResource';
import {ACTION_NAVIGATE} from "next/dist/client/components/router-reducer/router-reducer-types";
import Navbar from '../components/Navbar';

const addresource = () => {
    // Returns navbar and add resource component when redirected to /addresource
    return (
        <>
            <Navbar />
            <br />
            <AddResource></AddResource>
        </>
    )
}

export default addresource