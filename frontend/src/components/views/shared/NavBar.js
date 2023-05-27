import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./navbar.css";
import { FaBars, FaRegUser} from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import {FiLogOut} from 'react-icons/fi'

export default function NavBar() {

    const [MobileView, setMobileView] = useState(false);

    return (
        <nav className='navbar'>
            <div className='logo'>
            <img src='images/logo.png' alt="Logo"style={{ width: 300, height: 80 }}/>
            </div>
            <ul className={MobileView ? "nav-links-mobile" : "nav-links"} onClick={() => setMobileView(false)}>
                <Link to="/home"><li>Home</li></Link>
                <Link to="/sites"><li>Sites</li></Link>
                <Link to="/community"><li>Community</li></Link>
                <Link to="/eventAll"><li>Events</li></Link>
                <Link to="#"><li>About</li></Link>
                <Link to="/login"><li>Login</li></Link>
                <Link to="/register"><li>Register</li></Link>
                <Link to="/profile"><li><FaRegUser style={{marginTop:35}}/></li></Link>
                <Link to="/login"><li><FiLogOut style={{marginTop:35}}/></li></Link>

            </ul>
            <button className='mobile-menu-icon' onClick={() => setMobileView(!MobileView)}>
                {MobileView ? <ImCross /> : <FaBars />}
            </button>
        </nav>
    )
}