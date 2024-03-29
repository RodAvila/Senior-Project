import React from 'react';

export default function SearchResultItem({ result }) {
    return <div className="searchItem" onClick={(e)=>alert(`You clicked the resource ${result.resourceName}`)}>{result.resourceName}</div>;
};