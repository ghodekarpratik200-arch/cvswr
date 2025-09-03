import React from 'react';
import { Link } from 'react-router-dom';
import '../them/Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/">Logo</Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/work">Work</Link></li>
          <li><Link to="/clients">Clients</Link></li>
          <li><Link to="/digital">Digital</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="nav-actions">
          <button>Quick Enquiry</button>
          <button>Presentation</button>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
