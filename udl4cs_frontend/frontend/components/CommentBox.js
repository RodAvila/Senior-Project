import React, { useState } from 'react';

export function CommentBox() {
    const [comment, setComment] = useState('');

    const updateCommentState = (event) => {
        setComment(event.target.value);
    };

    const dynamicTextBoxArea = () => {
        const lines = comment.split('\n').length;
        return `${lines * 40}px`;
    };

    return (
        <form style={{ maxWidth: '60%', margin: 'auto', padding: '20px', borderRadius: '16px', backgroundColor: '#EAEAEA', boxShadow: '0 0 10px rgba(234, 234, 234, 0.8)' }}>
            <h2 style={{ textAlign: 'left', color: '#000000', marginBottom: '20px', fontStyle: 'normal', fontWeight: '400', fontSize: '26px', lineHeight: '35px' }}>Comments</h2>
            <div className="commentBoxRow d-flex flex-column align-items-center">
                <textarea
                    className="commentBody"
                    style={{ width: '90%', padding: '10px', borderRadius: '16px', marginBottom: '10px', height: dynamicTextBoxArea(), resize: 'none'}}
                    placeholder="Add a comment..."
                    value={comment}
                    onChange={updateCommentState}
                ></textarea>
                <button
                    type="submit"
                    className="postButton"
                    style={{ borderRadius: '16px', width: '100%', padding: '10px', cursor: 'pointer' }}>
                    Comment
                </button>
            </div>
        </form>
    );
}
