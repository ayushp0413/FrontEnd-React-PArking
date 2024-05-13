// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

function Navbar() {
    return (
        <nav className="navbar">
            <ul style={{ fontSize: 'large' }}>
                <li><Link to="/home"><strong>Home</strong></Link></li>
                <li><Link to="/dashboard"><strong>Dashboard</strong></Link></li>
                <li><Link to="/contact"><strong>Contact</strong></Link></li>
                <li><Link to="/about"><strong>About Us</strong></Link></li>
            </ul>
        </nav>
    );
}

export default Navbar
