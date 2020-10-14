import React, { useState } from 'react'
import { FaAlignJustify } from "react-icons/fa";

const Navbar = () => {

    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar__container">
                    <ul className="navbar__left">
                        <div className="navbar__left-logo">
                        <img src="/images/logo.png" alt="logo" />
                        </div>
                    </ul>
                        <ul className="navbar__right">
                            <li>Home</li>
                            <li>Services</li>
                            <li>About</li>
                            <li>Skills</li>
                            <li>Portfolio</li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>

            <div 
            className="toggle"
            ><FaAlignJustify />
            </div>
        </nav>
    )
}

export default Navbar
