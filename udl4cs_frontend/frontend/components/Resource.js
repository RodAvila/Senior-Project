import React from "react";
const Resource = ({ resource }) => {
    return (
        <tr key={resource.id}>
            <td>
                {resource.id}
            </td>
            <td>
                {resource.numLikes}
            </td>
            <td>
                {resource.numComments}
            </td>
            <td>
                {resource.resourceTitle}
            </td>
            <td>
                {resource.resourceDesc}
            </td>
        </tr>
    )
}

export default Resource;