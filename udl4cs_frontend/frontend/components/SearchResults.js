import React, {useRef, useState} from 'react';
import SearchResultItem from "../components/SearchResultItem"


export default function SearchResults({ results }) {
    return (
        <div className="row align-items-center justify-content-center">
            <div className="col-md-5 col-sm-5">
                <div className="results-list">
                    {
                        results.map((result, id) => {
                            return <SearchResultItem result={result} key={id}/>;
                        })}
                </div>
            </div>
        </div>
    );
};