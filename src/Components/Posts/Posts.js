import React from 'react';
import { useLoaderData, useRouteLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    const posts =useLoaderData()
    return (
        <div>
            <h1>This is posts page : {posts.length}</h1>

        {
            posts.map(post=><Post 
            key={post.id}
            post={post}
            ></Post>)
        }

        </div>
    );
};

export default Posts;