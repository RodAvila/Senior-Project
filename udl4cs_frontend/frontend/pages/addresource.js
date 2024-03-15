import React from 'react';
import AddResource from '../components/AddResource';
import {ACTION_NAVIGATE} from "next/dist/client/components/router-reducer/router-reducer-types";
import Navbar from '../components/Navbar';

const addresource = () => {
    return (
        <div>
            <Navbar />
            <br />
            <AddResource></AddResource>
        </div>
    )
}

export default addresource