// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo"><img className='logo' src='/images/logo1.png' alt="Logo" /></div>
      <nav className="nav">
        <button className="btn">Our Work</button>
        <button className="btn">What We Do</button>
        <button className="btn">About Us</button>
      </nav>
      <Link to="/contact">
        <div className="contact-button">Contact Us</div>
      </Link>
    </header>
  );
};

export default Header;
