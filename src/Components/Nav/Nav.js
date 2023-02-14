import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    return (
        <ul className='Nav'>
            <Link to="/Home">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Products">Products</Link>
            <Link to="/Posts">Posts</Link>
            <Link to="/Friends">Friends</Link>
        </ul>
    );
};

export default Nav;