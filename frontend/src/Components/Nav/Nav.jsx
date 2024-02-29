import React, { useEffect, useState } from 'react';
import './Nav.css';
import logo from '../Assets/logo.png';
import { Link, useLocation, useNavigate } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Button, Dropdown, DropdownButton, Navbar, NavDropdown, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ProfileModal from '../ProfileModal/ProfileModal';


const Nav = () => {
 
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


  const [nav, setNav] = useState([]);
  const [showProfilePopup, setShowProfilePopup] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const location = useLocation(); 
  const navigate = useNavigate();

  const toggleProfilePopup = () => {
    setShowProfilePopup(!showProfilePopup);
  };
  const closeProfilePopup = () => {
    setShowProfilePopup(false);
  };


  const handleSearch = (e, selectedBrand) => {
    e.preventDefault();
    setSelectedBrand(selectedBrand);
    const queryParams = selectedBrand ? `brand=${selectedBrand}` : '';
    navigate(`/shop?${queryParams}`);
  };
    // else {
    //   // Filter brands, types, and p_names based on the search query
    //   const filteredBrands = simulatedImages
    //     .filter((item) => item.brand.toLowerCase().includes(searchQuery.toLowerCase()))
    //     .map((item) => item.brand);

    //   const filteredTypes = simulatedImages
    //     .filter((item) => item.type.toLowerCase().includes(searchQuery.toLowerCase()))
    //     .map((item) => item.type);

    //   const filteredPNames = simulatedImages
    //     .filter((item) => item.p_name.toLowerCase().includes(searchQuery.toLowerCase()))
    //     .map((item) => item.p_name);

    //   // Combine and set the search results
    //   const searchResults = [...filteredBrands, ...filteredTypes, ...filteredPNames];

    //   if (searchResults.length > 0) {
    //     // Navigate to the filter page with the selected filter
    //     navigate(`/shop?query=${searchResults[0]}`);
    //   }
    // }
  

  useEffect(() => {
    setNav(simulatedImages);
  }, []);

  const genders = [...new Set(nav.map(navItem => navItem.gender))];
  const typesByGender = {};
  const brandsByGender = {};

  genders.forEach(gender => {
    typesByGender[gender] = [...new Set(nav.filter(item => item.gender === gender).map(item => item.type))];
    brandsByGender[gender] = [...new Set(nav.filter(item => item.gender === gender).map(item => item.brand))];
  });

  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid" >
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="" style={{ width: '150px', height: '52px' }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav me-auto mb-2 mb-lg-0">
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="brandsDropdown">
                Brands
              </Dropdown.Toggle>
              <Dropdown.Menu>
              {simulatedImages.map((item) => (
                  <Dropdown.Item key={item.brand} onClick={(e) => handleSearch(e, item.brand)}>
                  <span className="dropdown-item">{item.brand}</span>
                </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <DropdownButton title="Types" id="typesDropdown">
              {genders.map(gender => (
                <Dropdown key={gender}>
                  <Dropdown.Toggle variant="secondary" id={`typesDropdown-${gender}`} className="nested-dropdown-toggle">
                    {gender}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {typesByGender[gender].map(type => (
                      <Dropdown.Item key={type}>
                        <span className="dropdown-item">{type}</span>
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              ))}
            </DropdownButton>
          </div>
          {/* Search */}
          <form className="d-flex flex-grow-1" onSubmit={handleSearch}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            style={{ maxWidth: '250px' }}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="btn btn-outline-success" type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>

        </form>
          {/* Icons */}
          <div className="navbar-nav">
            <input type="text" />
            <Link className="nav-link" to="/favorites"><FontAwesomeIcon icon={faHeart} style={{color:"#ffffff" , fontSize: "24px"}}/></Link>
            <Link className="nav-link" to="/cart"><FontAwesomeIcon icon={faShoppingCart} style={{color:"#ffffff", fontSize: "24px"}}/></Link>
            <div className="nav-link" onClick={toggleProfilePopup}><FontAwesomeIcon icon={faUser} style={{color:"#ffffff", fontSize: "24px"}}/></div>

         {/* Profile Popup */}
      {showProfilePopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close-button" onClick={toggleProfilePopup}>&times;</span>
            <div className="icon d-flex justify-content-center align-items-center"><FontAwesomeIcon icon={faUser} style={{fontSize: "35px"}}/></div>
            <h2>User Profile</h2>
            <form>
              <div>
                <label>User Name:</label>
                <input type="text" />
              </div>
              <div>
                <label>Email address:</label>
                <input type="email" placeholder="Enter email" />
              </div>
              <div>
                <label>Phone Number:</label>
                <input type="tel" placeholder="Phone Number" />
              </div>
              <div>
                <label>Adderss:</label>
                <input type="text" placeholder="Enter email" />
              </div>
            </form>
            <button onClick={closeProfilePopup}>Close</button>
            <button>Logout</button>
          </div>
        </div>
      )}
          </div>
        </div>
      </div>
    </nav>
  );  
      }

export default Nav;