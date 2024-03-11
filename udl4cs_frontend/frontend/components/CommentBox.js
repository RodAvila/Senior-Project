import React, { useState } from 'react';
import Image from 'next/image';

export function CommentBox() {
    const [comment, setComment] = useState('');

    const updateCommentState = (event) => {
        setComment(event.target.value);
    };

    const dynamicTextBoxArea = () => {
        const lines = comment.split('\n').length;
        return `${lines * 45}px`;
    };

    //TODO Change to actually call user image from back end for now using local file
    return (
        <form style={{ maxWidth: '60%', margin: 'auto', padding: '20px', borderRadius: '16px', backgroundColor: '#EAEAEA', boxShadow: '0 0 10px rgba(234, 234, 234, 0.8)' }}>
            <h2 style={{ textAlign: 'left', color: '#000000', marginBottom: '20px', fontStyle: 'normal', fontWeight: '400', fontSize: '26px', lineHeight: '35px' }}>Comments</h2>
            <div className="commentBoxRow d-flex flex-column">
                <div className="d-flex flex-row">
                    <div style={{ marginRight: '10px'}}>
                        <Image src="/exampleuser_photo.jpg"
                               alt="Profile"
                               width={40}
                               height={40}
                               objectFit="cover"
                               style={{ borderRadius: '50%' }}
                        />
                    </div>
                    <textarea
                        className="commentBody"
                        style={{ width: '100%', padding: '10px', borderRadius: '16px', marginBottom: '10px', height: dynamicTextBoxArea(), resize: 'none'}}
                        placeholder="Add a comment..."
                        value={comment}
                        onChange={updateCommentState}
                    ></textarea>
                </div>
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
