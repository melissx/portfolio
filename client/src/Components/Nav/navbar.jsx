import React from 'react';
import "./navbar.css";
import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navContainer">
      <ul className="navItems">
        <li><a href="/">Home</a></li>
        <li><a href="/">Skills</a></li>
        <li><a href="/">Projects</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
      <i class='bx bx-menu' onClick={toggleMenu}></i>
       {menuOpen && (
      <ul className="navMenuItems">
        <li><a href="/">Home</a></li>
        <li><a href="/">Skills</a></li>
        <li><a href="/">Projects</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
      )}

    </div>

  );
}

export default Navbar;