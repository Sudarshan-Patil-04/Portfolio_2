import './Footer.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Sudarshan Patil. All rights reserved.</p>
        <div className="footer-socials">
          <a href="https://linkedin.com/in/sudarshan-patil-5581aa292" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/Sudarshan-Patil-04" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="mailto:sudarshanpatil7599@gmail.com"><FaEnvelope /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
