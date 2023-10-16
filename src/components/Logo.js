import React from 'react';
import './Logo.scss'; 
import logo from '../assets/Union.png'

function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="Your Logo" className="logo-image" />LOGO
    </div>
  );
}

export default Logo;
