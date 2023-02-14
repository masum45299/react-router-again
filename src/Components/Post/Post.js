import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css'

const Post = ({post}) => {
    const {id,title}=post
    return (
        <div className='post'>
            <p>Title : {title}</p>
            <button><Link to={`/post/${id}`}>Post</Link></button>
        </div>
    );
};

export default Post;