import Link from 'next/link'
import AddResource from "../components/AddResource"
import ResourceCard from '../components/ResourceCard';
import {React, useState} from "react";
import Navbar from "../components/Navbar";
import Search from '../components/Search';
import SearchResults from '../components/SearchResults';



export default function Resources() {
    const [results, setResults] = useState([]);
    return (
        <>
            <Navbar></Navbar>
            <div className="py-5 border-bottom">
                <Search setResults = {setResults}></Search>
                <SearchResults results = {results}></SearchResults>
            </div>
            <div className="container my-3 ">

                <ResourceCard></ResourceCard>

            </div>


        </>
    )
}