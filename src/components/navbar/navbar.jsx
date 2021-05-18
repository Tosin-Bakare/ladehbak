import React from "react";
import Logo from "../../assets/ladehbak-logo-removebg-preview.png";
import Button from  "../../components/button/button"

import "./navbar.css";

const NavBar = () => (
    <div >
        <nav className="navdiv">
            <div className="logo">
                <img src={Logo} alt="Logo" width="90px" height="80px" />
            </div>
            <div className="navmenu">
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Contact</li>
                <li> <Button /> </li>
            </div>
        </nav>
    </div>
);
export default NavBar;