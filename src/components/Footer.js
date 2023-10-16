import React from 'react';
import './Footer.scss'; 

function Footer() {
    return (
        <footer className="footer">
                 <div className="mobile-menus">
                <p>Home</p>
                <p>Page1</p>
                <p>Page2</p>
            </div>
            <div className="line"></div>
            <div className="social-icons">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-tiktok"></i>
            </div>
            <p>&copy; 2023 Landing Page</p>
        </footer>
    );
}

export default Footer;
