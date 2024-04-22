import React, {useEffect} from "react";
import {useState} from "react";
import { useAuth } from '@/AuthContext';
import Image from 'next/image';
import SearchResultItem from "./SearchResultItem";

// CommentBox plugin focuses on posting new comments for resources added by user
const CommentBox = ({ resourceId, refreshData }) => {

    // Retrieve the user ID that is currently logged in using token data
    const { authId } = useAuth();

    // Establish URL for database API holding comments data tied to the currently logged-in user
    const COMMENT_BASE_API = "http://localhost:8080/comments/resources/" + resourceId + "/user1/" + authId;

    // Initialize comment attribute to empty
    const [comment, setComment] = useState({
        comment: ""
    });

    // Re-initialize comment attribute to empty after server response
    const [responseComment, setResponseComment] = useState({
        comment: ""
    });

    // Handle input changes to comment box, updating value on every input
    const handleChange = (event) => {
        const value = event.target.value;
        setComment({ ...comment, [event.target.name]: value });
    };

    // Saves comment posted by user when user submits comment
    const saveComment = async(e) => {

        // Prevent page refresh after form submission
        e.preventDefault();

        const response = await fetch(COMMENT_BASE_API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(comment),
        });
        if (!response.ok) {
            throw new Error("Something went wrong");
        }
        // Calls reset attributes of comment after posting
        reset(e);

        // Calls a passed-in refresh data function of the parent page '[resourceId].js' so that comment is updated without a page refresh
        refreshData();
    };

    // Reset comment data to empty after posting data to server
    const reset = (e) => {
        // Prevent page refresh after reset
        e.preventDefault();

        setComment({
            comment: ""
        });
    };


    //TODO Change to actually call user image from back end for now using local file
    return (
        <form>
            <div className="commentBoxRow d-flex flex-column">
                <div className="d-flex flex-row" style={{padding: '1x'}}>
                    <div style={{marginRight: '10px'}}>
                        <Image src="/exampleuser_photo.jpg"
                               alt="Profile"
                               width={40}
                               height={40}
                               objectFit="cover"
                               style={{borderRadius: '50%'}}
                        />
                    </div>
                    <textarea rows="5" type="text"
                              name="comment"
                              value={comment.comment}
                              onChange={(e2) => handleChange(e2)}
                              className="form-control"
                              style={{borderRadius: '16px!important'}}
                              id="inputCommentBox"
                              placeholder="Add a comment..."
                              required></textarea>
                </div>
                <br />
                <div className="d-flex align-items-center justify-content-end">
                    <button
                        type="button"
                        className="postButton"
                        onClick={saveComment}
                        style={{borderRadius: '16px', width: '33%', padding: '5px', cursor: 'pointer'}}>
                        Comment
                    </button>
                </div>
            </div>
        </form>
    );
}
export default CommentBox;
