// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import '../styles/Navbar.css';

const Navbar = ({ onSearch }) => {
  return (
    <nav className="navbar">
      <div className="logo">eCommerce</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
};

export default Navbar;


    

