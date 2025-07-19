import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // optional if styling is separate

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">DaFTitude</Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/tech-hub">Tech Hub</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact" className="cta-btn">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;