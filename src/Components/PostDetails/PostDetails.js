import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './PostDetails.css'


const PostDetails = () => {
    const postDetails=useLoaderData()
    const {title,body}=postDetails
    return (
        <div className='postDetails'>
            <h1>Title : {title}</h1>
            <p>Body : {body}</p>
        </div>
    );
};

export default PostDetails;