import Link from 'next/link'
import AddResource from "../components/AddResource"
import ResourceCard from '../components/ResourceCard';
import { React } from "react";
import Navbar from "../components/Navbar";
import Search from '../components/Search';



export default function Resources() {
    return (
        <>
            <Navbar></Navbar>
            <Search></Search>

            <div className="container my-3 ">

                <ResourceCard></ResourceCard>

            </div>


        </>
    )
}