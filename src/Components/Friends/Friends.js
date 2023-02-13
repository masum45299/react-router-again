import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {
    const friends=useLoaderData()
    return (
        <div>
            <h1>Wow this is friends page</h1>
            {
                friends.map(friend=><Friend
                key={friend.id}
                friend={friend}
                ></Friend>)
            }
        </div>
    );
};

export default Friends;