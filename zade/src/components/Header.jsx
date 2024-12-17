import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './styles/Header.css';

function Header() {
  const navigate = useNavigate(); // Initialize navigate
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu visibility

  const handleClick = (id) => {
    const targetSection = document.getElementById(id);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 0, // Adjust for header height if needed
        behavior: 'smooth',
      });
    }
    setIsMenuOpen(false); // Close menu after navigation
  };

  return (
    <header className="header">
      <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {/* Hamburger Icon */}
        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}></div>
      </div>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <ul className="nav-list">
          <li onClick={() => handleClick('top')}>Top</li>
          <li onClick={() => handleClick('about')}>About</li>
          <li onClick={() => handleClick('skills')}>Skills</li>
          <li onClick={() => handleClick('contact')}>Contact</li>
          <li onClick={() => handleClick('follow-me')}>Follow Me</li>
          <li onClick={() => navigate('/projects')}>Projects</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
