import React from 'react';
import './Header.css';
import logo from '../../assets/logo.png';

import NavBar from '../NavBar/NavBar';

function Header() {
  return (
    <header>
       <a href="index.html">
        <img src={logo} className="logo" alt="logo" />
      </a>
      <NavBar/>
    </header>
    );
}

export default Header;
