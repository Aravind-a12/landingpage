import React, { useState } from 'react';
import Logo from './Logo';
import './Header.scss';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <Logo />
      <button className="menu-icon" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </button>
      <nav className={`menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="menu-items">
          <a href="/">Home</a>
          <a href="/">Page 1</a>
          <a href="/">Page 2</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
