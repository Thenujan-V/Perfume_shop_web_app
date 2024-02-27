import React, { useEffect, useState } from 'react';
import './Nav.css';
import logo from '../Assets/logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  const [nav, setNav] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedType, setSelectedType] = useState('');

  useEffect(() => {
    const simulatedImages = [
        {
          p_id: 1,
          brand: "Chanel",
          gender: "Unisex",
          p_name:"Adfgthvbnh thgmbn",
          discount:"10",
          imageurl: 'https://pxbar.com/wp-content/uploads/2023/09/hidden-girl-pic.jpg', 
          type: "Eau de Parfum",
          price: 100.00,
          size: "50ml",
        },
        {
          p_id: 2,
          brand: "Dior",
          gender: "Male",
          p_name:"Adfgthvbnh thgmbn",
          discount:"10",
          imageurl: 'https://w0.peakpx.com/wallpaper/607/199/HD-wallpaper-evening-pic-natura-thumbnail.jpg',
          type: "Eau de Toilette",
          price: 85.50,
          size: "100ml",
        },
        {
          p_id :3,
          brand: "Gucci",
          gender: "Female",
          p_name:"Adfgthvbnh thgmbn",
          discount:"10",
          imageurl: 'https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg?auto=compress&cs=tinysrgb&w=400',
          type: "Eau de Parfum",
          price: 120.00,
          size: "75ml",
        },
        {
          p_id: 4,
          brand: "Versace",
          gender: "Male",
          p_name:"Adfgthvbnh thgmbn",
          discount:"0",
          imageurl: 'https://w0.peakpx.com/wallpaper/607/199/HD-wallpaper-evening-pic-natura-thumbnail.jpg',
          type: "Eau de Cologne",
          price: 75.25,
          size: "50ml",
        },
        {
          p_id: 5,
          brand: "Calvin Klein",
          gender: "Female",
          p_name:"Adfgthvbnh thgmbn",
          discount:"0",
          imageurl: 'https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg?auto=compress&cs=tinysrgb&w=400',
          type: "Eau de Toilette",
          price: 60.50,
          size: "50ml",
        },
        {
          p_id: 6,
          brand: "Yves Saint Laurent",
          gender: "Unisex",
          p_name:"Adfgthvbnh thgmbn",
          discount:"10",
          imageurl: 'https://pxbar.com/wp-content/uploads/2023/09/hidden-girl-pic.jpg', 
          type: "Eau de Parfum",
          price: 110.00,
          size: "75ml",
        },
        {
          p_id: 7,
          brand: "Bvlgari",
          gender: "Male",
          p_name:"Adfgthvbnh thgmbn",
          discount:"0",
          imageurl: 'https://images.pexels.com/photos/36029/aroni-arsa-children-little.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          type: "Eau de Toilette",
          price: 95.75,
          size: "100ml",
        },
        {
          p_id: 8,
          brand: "Marc Jacobs",
          gender: "Female",
          p_name:"Adfgthvbnh thgmbn",
          discount:"10",
          imageurl: 'https://w0.peakpx.com/wallpaper/607/199/HD-wallpaper-evening-pic-natura-thumbnail.jpg',
          type: "Eau de Parfum",
          price: 85.00,
          size: "50ml",
        },
        {
          p_id: 9,
          brand: "Tom Ford",
          gender: "Male",
          p_name:"Adfgthvbnh thgmbn",
          discount:"10",
          imageurl: 'https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg?auto=compress&cs=tinysrgb&w=400',
          type: "Eau de Cologne",
          price: 120.50,
          size: "75ml",
        },
        {
          p_id: 10,
          brand: "Prada",
          gender: "Female",
          p_name:"Adfgthvbnh thgmbn",
          discount:"0",
          imageurl: 'https://pxbar.com/wp-content/uploads/2023/09/hidden-girl-pic.jpg', 
          type: "Eau de Toilette",
          price: 70.00,
          size: "100ml",
        },
        {
          p_id: 11,
          brand: "Chloe",
          gender: "Unisex",
          p_name:"Adfgthvbnh thgmbn",
          discount:"0",
          imageurl: 'https://images.pexels.com/photos/36029/aroni-arsa-children-little.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          type: "Eau de Parfum",
          price: 95.00,
          size: "50ml",
        },
        {
          p_id: 12,
          brand: "Hugo Boss",
          gender: "Male",
          p_name:"Adfgthvbnh thgmbn",
          discount:"10",
          imageurl: 'https://images.pexels.com/photos/36029/aroni-arsa-children-little.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          type: "Eau de Toilette",
          price: 80.25,
          size: "75ml",
        },
        {
          p_id: 13,
          brand: "Michael Kors",
          gender: "Female",
          p_name:"Adfgthvbnh thgmbn",
          discount:"0",
          imageurl: 'https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg?auto=compress&cs=tinysrgb&w=400',
          type: "Eau de Parfum",
          price: 110.50,
          size: "100ml",
        },
        {
          p_id: 14,
          brand: "Issey Miyake",
          gender: "Male",
          p_name:"Adfgthvbnh thgmbn",
          discount:"10",
          imageurl: 'https://w0.peakpx.com/wallpaper/607/199/HD-wallpaper-evening-pic-natura-thumbnail.jpg',
          type: "Eau de Cologne",
          price: 65.00,
          size: "50ml",
        },
        {
          p_id: 15,
          brand: "Ralph Lauren",
          gender: "Female",
          p_name:"Adfgthvbnh thgmbn",
          discount:"10",
          imageurl: 'https://pxbar.com/wp-content/uploads/2023/09/hidden-girl-pic.jpg', 
          type: "Eau de Toilette",
          price: 75.75,
          size: "75ml",
        },
      ];
    setNav(simulatedImages);
  }, []);

  const genders = [...new Set(nav.map(navItem => navItem.gender))];
  const typesByGender = {};
  const brandsByGender = {};

  // Group types and brands by gender
  genders.forEach(gender => {
    typesByGender[gender] = [...new Set(nav.filter(item => item.gender === gender).map(item => item.type))];
    brandsByGender[gender] = [...new Set(nav.filter(item => item.gender === gender).map(item => item.brand))];
  });

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="" style={{ width: '150px', height: '52px' }} />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav me-auto mb-2 mb-lg-0">
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="brandsDropdown" data-bs-toggle="dropdown"
                aria-expanded="false">
                Brands
              </button>
              <ul className="dropdown-menu" aria-labelledby="brandsDropdown">
                {genders.map(gender => (
                  <li key={gender}>
                    <span className="dropdown-item">{gender}</span>
                    {brandsByGender[gender].map(brand => (
                      <span className="dropdown-item" key={brand}>{brand}</span>
                    ))}
                  </li>
                ))}
              </ul>
            </div>
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="typesDropdown" data-bs-toggle="dropdown"
                aria-expanded="false">
                Types
              </button>
              <ul className="dropdown-menu" aria-labelledby="typesDropdown">
                {genders.map(gender => (
                  <li key={gender}>
                    <span className="dropdown-item">{gender}</span>
                    {typesByGender[gender].map(type => (
                      <span className="dropdown-item" key={type}>{type}</span>
                    ))}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Search */}
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit"><FontAwesomeIcon icon={faSearch} /></button>
          </form>
          {/* Icons */}
          <div className="navbar-nav">
            <Link className="nav-link" to="/favorites"><FontAwesomeIcon icon={faHeart} /></Link>
            <Link className="nav-link" to="/cart"><FontAwesomeIcon icon={faShoppingCart} /></Link>
            <Link className="nav-link" to="/profile"><FontAwesomeIcon icon={faUser} /></Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;