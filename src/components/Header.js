import React from 'react';
import Logo from './Logo';
import './Header.scss'; 

function Header() {
  return (
    <header className="header">
      <Logo />
      <nav className="menu">
        <a href="#">Home</a>
        <a href="#">Page 1</a>
        <a href="#">Page 2</a>
        
      </nav>
    </header>
  );
}

export default Header;
