import React, {useEffect} from "react";
import {useState} from "react";
import { useAuth } from '@/AuthContext';
import Image from 'next/image';
import SearchResultItem from "./SearchResultItem";

const CommentBox = ({ resourceId, refreshData }) => {
    const { authId } = useAuth();

    const COMMENT_BASE_API = "http://localhost:8080/comments/resources/" + resourceId + "/user1/" + authId;

    const [comment, setComment] = useState({
        comment: ""
    });

    const [responseComment, setResponseComment] = useState({
        comment: ""
    });

    const handleChange = (event) => {
        const value = event.target.value;
        setComment({ ...comment, [event.target.name]: value });
    };

    const saveComment = async(e) => {
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
        reset(e);
        refreshData();
    };

    const reset = (e) => {
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
