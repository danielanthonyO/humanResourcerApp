import React from 'react';
import './Footer.css';

// Footer component
const Footer = (props) => {
    return (
        <footer className="footer">
            <p>copyrights: {props.year} daniel@REACT25K </p>
        </footer>
)
};

export default Footer;