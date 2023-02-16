import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
import './Post.css'

const Post = ({post}) => {
    const {id,title}=post
    const navigate=useNavigate()
    const evenHandler= ()=>{
        navigate(`/post/${id}`)
    }
    return (
        <div className='post'>
            <p>Title : {title}</p>
            <button><Link to={`/post/${id}`}>Post</Link></button>
            <button onClick={evenHandler}>Post2</button>

        </div>
    );
};

export default Post; 