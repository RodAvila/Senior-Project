import React from 'react';
import Link from "next/link";

export default function SearchResultItem({ result }) {
    // Each individual resource search item that is returned comes through as a link to its individual resource page
    return <div class="searchItem"><Link style={{color: "black", textDecoration: "none"}} href={`/resources/${encodeURIComponent(result.id)}`}
    >{result.resourceName}</Link></div>;
};