import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import '../CSS/Navbar.css';

const Navbar = () => {
    const styling = { 
        textDecoration: "none", 
        listStyleType: "none", 
        textAlign: "center"
    };
    const [dropdown, setDropdown] = useState(false);
    const toggleDrop = () => {
        setDropdown(!dropdown);
    };

    return (
        <header>
            <nav>   
                <ol style={styling}>
                    <li><Link to="/" className='link'>Home</Link></li>
                    <li><Link to="/about" className='link'>About</Link></li>
                    <li><Link to="/gallery" className='link'>Gallery</Link></li>
                    <li><Link to="/contact" className='link'>Contact</Link></li>
                    <div>
                        <span onMouseEnter={toggleDrop} onMouseLeave={toggleDrop}>Hooks</span>
                        {dropdown && (
                            <ul>
                                <li><Link to="/useState" target='_blank'>useState</Link></li>
                                <li><Link to="/useEffect" target='_blank'>useEffect</Link></li>
                                <li><Link to="/useEffectAPI" target='_blank'>useEffectAPI</Link></li>
                                <li><Link to="/useEffectAPIimage" target='_blank'>useEffectAPIimage</Link></li>
                                <li><Link to="/useReducer" target='_blank'>useReducer</Link></li>
                                <li><Link to="/useRef" target='_blank'>useRef</Link></li>
                            </ul>
                        )}
                    </div>
                    <li><Link to="/sign-up" className='link'>Sign-up</Link></li>
                    <li><Link to="/login" className='link'>Login</Link></li>
                    <li><Link to="/logout" className='link'>Logout</Link></li>
                </ol>
            </nav>
        </header>
    );
};

export default Navbar;
