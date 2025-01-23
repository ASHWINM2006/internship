import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import '../CSS/Navbar.css';

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);

    const toggleDropdown = () => {
        setDropdown(!dropdown);
    };

    return (
        <header>
            <nav className="navbar">
                <ul className="navbar-menu">
                    <li><Link to="/" className="navbar-link">Home</Link></li>
                    <li><Link to="/about" className="navbar-link">About</Link></li>
                    <li><Link to="/gallery" className="navbar-link">Gallery</Link></li>
                    <li><Link to="/contact" className="navbar-link">Contact</Link></li>
                    <li 
                        className="dropdown" 
                        onMouseEnter={toggleDropdown} 
                        onMouseLeave={toggleDropdown}
                    >
                        <span className="dropdown-title">Hooks</span>
                        {dropdown && (
                            <ul className="dropdown-menu">
                                <li><Link to="/useState" className="dropdown-link" target="_blank">useState</Link></li>
                                <li><Link to="/useEffect" className="dropdown-link" target="_blank">useEffect</Link></li>
                                <li><Link to="/useEffectAPI" className="dropdown-link" target="_blank">useEffectAPI</Link></li>
                                <li><Link to="/useEffectAPIimage" className="dropdown-link" target="_blank">useEffectAPIimage</Link></li>
                                <li><Link to="/useReducer" className="dropdown-link" target="_blank">useReducer</Link></li>
                                <li><Link to="/useRef" className="dropdown-link" target="_blank">useRef</Link></li>
                                <li><Link to="/useState" className="dropdown-link" target="_blank">UseState</Link></li>
                                <li><Link to="/useCallback" className="dropdown-link" target="_blank">UseCallback</Link></li>
                               

                            </ul>
                        )}
                    </li>
                    <li><Link to="/sign-up" className="navbar-link">Sign-up</Link></li>
                    <li><Link to="/login" className="navbar-link">Login</Link></li>
                    <li><Link to="/logout" className="navbar-link">Logout</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;