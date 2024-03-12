import React from "react"

export default function Comment({ id, user, date, body }) {
    //TODO it would be good to add something so that dates appear differently depending on timezones of the user?
    return <>
        <div className="comment">
            <div className="head">
                <span className="name">{user}</span>
                <span className="date">{date}</span>
            </div>
        </div>
        <div className="body">{body}</div>
    </>
}