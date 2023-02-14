import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friendDetails=useLoaderData()
    const {name,phone,email}=friendDetails
    return (
        <div>
            <h1>Yeee This is Friends Details page</h1>
            <h3>Name : {name}</h3>
            <h5>Phone : {phone}</h5>
            <p>Email : {email}</p>
        </div>
    );
};

export default FriendDetails;