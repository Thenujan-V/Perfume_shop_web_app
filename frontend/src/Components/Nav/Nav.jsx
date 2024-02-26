import React, { useState } from 'react';
import './Nav.css'; // Import your CSS file
import cart from '../Assets/cart.png'
import wishlist from '../Assets/wishlist.png'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom';

const Nav = () => {
  const [showDrop, setShowDrop] = useState(false);
  const [showMega, setShowMega] = useState(false);

  const toggleDropdown = () => {
    setShowDrop(!showDrop);
    setShowMega(false);
  };

  const toggleMegaMenu = () => {
    setShowMega(!showMega);
    setShowDrop(false);
  };

  return (
    <nav>
      <div className="wrapper">
        <div className="logo">
          <Link to='/'><img src={logo} alt="" style={{width:"150px" , height:"52px"}}/></Link>
        </div>
        <input type="checkbox" id="menu-btn" onChange={toggleDropdown} checked={showDrop || showMega} />
        <input type="checkbox" id="close-btn" />

        <ul className="nav-links">
          <label htmlFor="close-btn" className="btn close-btn">
            <i className="fas fa-times"></i>
          </label>
          <li>
            <a href="#">Shop</a>
          </li>
          {/* <li>
            <a href="#">About</a>
          </li> */}
          <li>
            <a href="#" className="desktop-item" onClick={toggleDropdown}>
              Dropdown Menu
            </a>
            <input type="checkbox" id="showDrop" checked={showDrop} />
            <label htmlFor="showDrop" className="mobile-item" onClick={toggleDropdown}>
              Dropdown Menu
            </label>
            <ul className="drop-menu list">
              <li >
                <a href="#">Drop menu 1</a>
              </li>
              <li>
                <a href="#">Drop menu 2</a>
              </li>
              <li>
                <a href="#">Drop menu 3</a>
              </li>
              <li>
                <a href="#">Drop menu 4</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" className="desktop-item" onClick={toggleMegaMenu}>
              Mega Menu
            </a>
            <input type="checkbox" id="showMega" checked={showMega} />
            <label htmlFor="showMega" className="mobile-item" onClick={toggleMegaMenu}>
              Mega Menu
            </label>
             <div className="mega-box">
      <div className="content">
        <div className="row">
          <img src="img.jpg" alt="" />
        </div>
        <div className="row">
          <header>Design Services</header>
          <ul className="mega-links">
            <li><a href="#">Graphics</a></li>
            <li><a href="#">Vectors</a></li>
            <li><a href="#">Business cards</a></li>
            <li><a href="#">Custom logo</a></li>
          </ul>
        </div>
        <div className="row">
          <header>Email Services</header>
          <ul className="mega-links">
            <li><a href="#">Personal Email</a></li>
            <li><a href="#">Business Email</a></li>
            <li><a href="#">Mobile Email</a></li>
            <li><a href="#">Web Marketing</a></li>
          </ul>
        </div>
        <div className="row">
          <header>Security services</header>
          <ul className="mega-links">
            <li><a href="#">Site Seal</a></li>
            <li><a href="#">VPS Hosting</a></li>
            <li><a href="#">Privacy Seal</a></li>
            <li><a href="#">Website design</a></li>
          </ul>
        </div>
      </div>
    </div>
          </li>
          <li>
            <a href="#">Feedback</a>
          </li>
        </ul>
        <ul className='userIcons'>
          <li>
          <img src={cart} alt="" />
          </li>
        </ul>
        <label htmlFor="menu-btn" className="btn menu-btn">
          <i className="fas fa-bars"></i>
        </label>
      </div>
    </nav>
  );
};

export default Nav

