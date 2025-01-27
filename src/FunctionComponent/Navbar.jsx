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
                                <li><Link to="/useState" className="dropdown-link">useState</Link></li>
                                <li><Link to="/useEffect" className="dropdown-link">useEffect</Link></li>
                                <li><Link to="/useEffectAPI" className="dropdown-link">useEffectAPI</Link></li>
                                <li><Link to="/useEffectAPIimage" className="dropdown-link">useEffectAPIimage</Link></li>
                                <li><Link to="/useReducer" className="dropdown-link">useReducer</Link></li>
                                <li><Link to="/useRef" className="dropdown-link">useRef</Link></li>
                                <li><Link to="/useMemo" className="dropdown-link">useMemo</Link></li>
                                <li><Link to="/useCallback" className="dropdown-link">useCallback</Link></li>
                                <li><Link to="/ReactLifecycle" className="dropdown-link">ReactLifecycle</Link></li>
                                <li><Link to="/Student" className="dropdown-link">Student</Link></li>
                                <li><Link to="/Memo" className="dropdown-link">Memo</Link></li>
                                <li><Link to="/lazyLoadingWithSuspense" className="dropdown-link">lazyLoadingWithSuspense</Link></li>

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