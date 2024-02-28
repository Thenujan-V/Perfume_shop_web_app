import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="logo">
          <img src="/path/to/logo.png" alt="Logo" />
        </div>
        <div className="social-links">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <div className="footer-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/Terms of Use">About Us</a>
          <a href="/about-us">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;