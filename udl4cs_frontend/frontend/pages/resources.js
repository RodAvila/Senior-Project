import Link from 'next/link'
import AddResource from "../components/AddResource"
import {React} from "react";
import Navbar from "../components/Navbar";


export default function Resources() {
    return (
        <>
            <Navbar></Navbar>
            <div className="container">
                <AddResource></AddResource>
            </div>
        </>
    )
}