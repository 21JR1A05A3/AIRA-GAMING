import React, { useState, useEffect } from 'react';
import './Navbar.css'; 
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showNavbar, setShowNavbar] = useState(true);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`header ${showNavbar ? '' : 'hidden'}`}>
      <a href="/" className="logo">
        <img src="https://i.ibb.co/GQzBszM/Logo1.png" className="nav-logo" alt="Logo" />
      </a>
      {isMobile && (
        <div id="menu-icon" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      )}
      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/home" className="links" onClick={handleLinkClick}>Home</Link>
        <Link to="/tournament" className="links" onClick={handleLinkClick}>Tournament</Link>
        <Link to="/games" className="links" onClick={handleLinkClick}>Games</Link>
        <Link to="/about" className="links" onClick={handleLinkClick}>About</Link>
        <Link to="/contact" className="links" onClick={handleLinkClick}>Contact</Link>
        <Link to="/" className="links">Logout</Link>
      </nav>
      <div className={`nav-bg ${isMenuOpen ? 'active' : ''}`}></div>
    </header>
  );
};

export default Navbar;
