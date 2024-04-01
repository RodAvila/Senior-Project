import React, { useState } from 'react';
import Image from 'next/image';

const CommentBox = ({ resourceId }) => {
    const [comment, setComment] = useState('');

    const updateCommentState = (event) => {
        setComment(event.target.value);
    };

    const dynamicTextBoxArea = () => {
        const lines = comment.split('\n').length;
        return lines === 1 ? '60px' : `${lines * 25 + 12}px`;
    };


    //TODO Change to actually call user image from back end for now using local file
    return (
        <form style={{ maxWidth: '90%', margin: 'auto', padding: '16px', borderRadius: '16px', backgroundColor: '#EAEAEA', boxShadow: '0 0 10px rgba(234, 234, 234, 0.8)' }}>
            <h4 style={{ textAlign: 'left', color: '#000000', marginBottom: '20px', fontStyle: 'normal', fontWeight: '400', fontSize: '26px', lineHeight: '35px' }}>Comments</h4>
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
                              name="resourceDesc"
                              value={comment}
                              onChange={updateCommentState}
                              className="form-control"
                              style={{
                                  borderRadius: '16px!important',
                                  width: '100%',
                                  padding: '5px',
                                  marginBottom: '10px',
                                  height: dynamicTextBoxArea(),
                                  resize: 'none',
                                  overflow: 'hidden'
                                }}
                              id="inputResourceDesc"
                              placeholder="Add a comment..."
                              required></textarea>
                </div>
                <div className="d-flex align-items-center justify-content-end">
                    <button
                        type="button"
                        className="postButton"
                        style={{borderRadius: '16px', width: '33%', padding: '5px', cursor: 'pointer'}}>
                        Comment
                    </button>
                </div>
            </div>
        </form>
    );
}
export default CommentBox;
