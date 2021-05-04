import React from 'react';
import logo from "../images/logo.png";

function Header() {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt=""/>
            </div>
        </div>
    )
}

export default Header
