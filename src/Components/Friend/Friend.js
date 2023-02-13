import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const {name,phone,id}=friend
    
    return (
        <div>
            <h3>Name : {name}</h3>
            <p>Phone : {phone}</p>
            <button><Link to={`/friend/${id}`}>Get Id</Link></button>
        </div>
    );
};

export default Friend;