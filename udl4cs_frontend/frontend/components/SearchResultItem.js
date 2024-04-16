import React from 'react';
import Link from "next/link";

export default function SearchResultItem({ result }) {
    return <div class="searchItem"><Link style={{color: "black", textDecoration: "none"}} href={`/resources/${encodeURIComponent(result.id)}`}
    >{result.resourceName}</Link></div>;
};