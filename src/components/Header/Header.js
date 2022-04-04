import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='navbar'>
            <Link to="/home">home</Link>
            <Link to="/blogs">blogs</Link>
            <Link to="/dashboard">dashboard</Link>
            <Link to="/reviews">reviews</Link>


        </nav>
    );
};

export default Header;