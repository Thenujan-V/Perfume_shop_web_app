import React from 'react';
import Flogo from '../Assets/F-logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
   
<footer className="bg-dark text-light" style={{background:' #d63384'}}>
    <div className="container py-5">
      <div className="row">
        <div className="col-md-3">
          <Link className="Footer_logo" to="/">
            <img src={Flogo} alt="Logo" className="img-fluid" style={{ maxHeight: '250px' }} />
          </Link>
        </div>
        <div className="col-md-3 mt-4">
          <p>
          Thank you for visiting Fragrance Finesse. We are dedicated to providing high-quality fragrances that captivate your senses and elevate your experience. Explore our range of scents, each crafted with care to evoke emotions and memories.
          </p>
        </div>
        <div className="col-md-3 mt-4 ml-md-3" > 
          <div className="footer_socials">
            <h4>Social Media</h4>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <br />
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-light">
              <i className="fab fa-facebook"></i> Facebook
            </a>
            <br />
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-light">
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <br />
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light">
              <i className="fab fa-twitter"></i> Twitter
            </a>
          </div>
        </div>
        <div className="col-md-3 mt-4 ml-md-3" >
          <h4>Informations</h4>
          <Link to="/about" className="text-light d-block">About</Link> 
          <Link to="/contact" className="text-light d-block">Contact</Link>
          <Link to="/terms-and-conditions" className="text-light d-block">Terms & Conditions</Link>
          <Link to="/privacy-policy" className="text-light d-block">Privacy Policy</Link>
        </div>
      </div>
    </div>
  
    <div className="bg-secondary py-555">
      <div className="container">
        <p className="m-0 text-center text-light">
          &copy; 2024 Fragrance Finesse. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
  
  );
};

export default Footer;