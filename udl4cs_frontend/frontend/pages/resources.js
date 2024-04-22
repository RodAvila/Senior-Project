import Link from 'next/link'
import AddResource from "../components/AddResource"
import ResourceCard from '../components/ResourceCard';
import { React, useState } from "react";
import Navbar from "../components/Navbar";
import Search from '../components/Search';
import SearchResults from '../components/SearchResults';
import { openAsBlob } from 'fs';

const divStyle = {
    backgroundColor: '#0576b8',
    opacity: 0.9
};

export default function Resources() {
    const [results, setResults] = useState([]);
    return (
        <>
            <Navbar></Navbar>
            <div className="py-5" style={{ borderBottom: '2px solid #0576b8', padding: '50px', backgroundColor: '#0576b8' }} >
                <Search setResults={setResults}></Search>
                <SearchResults results={results}></SearchResults>
            </div>
            <div className="container my-3 ">

                <ResourceCard></ResourceCard>

            </div>


        </>
    )
}