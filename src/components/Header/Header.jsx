import React from 'react';
import './Header.css';
// Component
const Header = (props) => {
return (
        <header className="header">
            <h2 className="logo">{props.logo}</h2>
            <nav>
            <ul className="nav-list">
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
        </header>
)
};

export default Header;