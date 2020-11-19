import React from 'react';
import './Header.css';
import NavBar from './NavBar.js';

function Header() {
  return (
    <div className="header">
      <div className="header__container container">
        <div className="header__logo">logo</div>
        <NavBar />
      </div>
    </div>
  )
}

export default Header;