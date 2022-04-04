import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='navbar'>

            <div>
                <Link to="/home">home</Link>
                <Link to="/blogs">blogs</Link>
                <Link to="/dashboard">dashboard</Link>
                <Link to="/reviews">reviews</Link>
            </div>

        </nav>
    );
};

export default Header;