import React, {useRef, useState} from 'react';
import SearchResultItem from "../components/SearchResultItem"


export default function SearchResults({ results }) {
    // Return all search items as SearchResultItem components
    return (
        <div className="row align-items-center justify-content-center">
            <div className="col-md-6 col-sm-6">
                {results.length > 0 &&
                    <div className="results-list">
                        {
                            results.map((result, id) => {
                                return <SearchResultItem result={result} key={id}/>;
                            })}
                    </div>
                }
            </div>
        </div>
    );
};