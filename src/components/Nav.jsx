import './Nav.css';
import { FaLinkedin, FaGithub, FaPhoneAlt, FaSun, FaMoon } from "react-icons/fa";
import { useState, useEffect } from "react";

const Nav = () => {

  useEffect(() => {
  const handleScroll = () => {
    const nav = document.querySelector('.nav-section');
    if (window.scrollY > 20) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-theme' : 'light-theme';
  }, [darkMode]);



  return (
    <nav className="nav-section">
      <div className="nav-container">
        <a href="#" className="nav-logo">Portfolio</a>
        <div className="nav-icons">
          <a href="https://linkedin.com/in/sudarshan-patil-5581aa292" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/Sudarshan-Patil-04" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="tel:+919699784114"><FaPhoneAlt /></a>
          <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button className="menu-toggle" onClick={() => document.body.classList.toggle('menu-open')}>
            <span className="menu-line"></span>
            <span className="menu-line"></span>
            <span className="menu-line"></span>
          </button>
        </div>
      </div>

      <div className="mobile-menu">
        <a href="#home" onClick={() => document.body.classList.remove('menu-open')}>Home</a>
        <a href="#about" onClick={() => document.body.classList.remove('menu-open')}>About</a>
        <a href="#projects" onClick={() => document.body.classList.remove('menu-open')}>Projects</a>
        <a href="#skills" onClick={() => document.body.classList.remove('menu-open')}>Skills</a>
        <a href="#resume" onClick={() => document.body.classList.remove('menu-open')}>Resume</a>
        <a href="#contact" onClick={() => document.body.classList.remove('menu-open')}>Contact</a>
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
