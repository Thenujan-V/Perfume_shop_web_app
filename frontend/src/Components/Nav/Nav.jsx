import React, { useEffect, useState } from 'react';
import './Nav.css';
import logo from '../Assets/logo.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faHeart, faShoppingCart, faUser, faSearch,faTimes ,faTrash} from '@fortawesome/free-solid-svg-icons';

import { Button, Dropdown, DropdownButton, Navbar, NavDropdown, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
import { getUserData } from '../storage/GetUserData';
import { jwtDecode } from 'jwt-decode';

const Nav = () => {

  const simulatedImages = [
    {
      p_id: 1,
      brand: "Chanel",
      gender: "Unisex",
      p_name: "Aaaaa",
      discount: "10",
      imageurl: 'https://pxbar.com/wp-content/uploads/2023/09/hidden-girl-pic.jpg',
      type: "Eau de Parfum",
      price: 100.00,
      size: "50ml",
    },
    {
      p_id: 2,
      brand: "Dior",
      gender: "Male",
      p_name: "BBBBBB",
      discount: "10",
      imageurl: 'https://w0.peakpx.com/wallpaper/607/199/HD-wallpaper-evening-pic-natura-thumbnail.jpg',
      type: "Eau de Toilette",
      price: 85.50,
      size: "100ml",
    },
    {
      p_id: 3,
      brand: "Gucci",
      gender: "Female",
      p_name: "Adfgt",
      discount: "10",
      imageurl: 'https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: "Eau de Parfum",
      price: 120.00,
      size: "75ml",
    },
    {
      p_id: 4,
      brand: "Versace",
      gender: "Male",
      p_name: "thgmbn",
      discount: "0",
      imageurl: 'https://w0.peakpx.com/wallpaper/607/199/HD-wallpaper-evening-pic-natura-thumbnail.jpg',
      type: "Eau de Cologne",
      price: 75.25,
      size: "50ml",
    },
    {
      p_id: 5,
      brand: "Calvin Klein",
      gender: "Female",
      p_name: "Adfgmbn",
      discount: "0",
      imageurl: 'https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: "Eau de Toilette",
      price: 60.50,
      size: "50ml",
    },
    {
      p_id: 6,
      brand: "Yves Saint Laurent",
      gender: "Unisex",
      p_name: "hgmbn",
      discount: "10",
      imageurl: 'https://pxbar.com/wp-content/uploads/2023/09/hidden-girl-pic.jpg',
      type: "Eau de Parfum",
      price: 110.00,
      size: "75ml",
    },
    {
      p_id: 7,
      brand: "Bvlgari",
      gender: "Male",
      p_name: "ggmbn",
      discount: "0",
      imageurl: 'https://images.pexels.com/photos/36029/aroni-arsa-children-little.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      type: "Eau de Toilette",
      price: 95.75,
      size: "100ml",
    },
    {
      p_id: 8,
      brand: "Marc Jacobs",
      gender: "Female",
      p_name: "gthbn",
      discount: "10",
      imageurl: 'https://w0.peakpx.com/wallpaper/607/199/HD-wallpaper-evening-pic-natura-thumbnail.jpg',
      type: "Eau de Parfum",
      price: 85.00,
      size: "50ml",
    },
    {
      p_id: 9,
      brand: "Tom Ford",
      gender: "Male",
      p_name: "dfgthbn",
      discount: "10",
      imageurl: 'https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: "Eau de Cologne",
      price: 120.50,
      size: "75ml",
    },
    {
      p_id: 10,
      brand: "Prada",
      gender: "Female",
      p_name: "Adfghgmbn",
      discount: "0",
      imageurl: 'https://pxbar.com/wp-content/uploads/2023/09/hidden-girl-pic.jpg',
      type: "Eau de Toilette",
      price: 70.00,
      size: "100ml",
    },
    {
      p_id: 11,
      brand: "Chloe",
      gender: "Unisex",
      p_name: "bchgmbn",
      discount: "0",
      imageurl: 'https://images.pexels.com/photos/36029/aroni-arsa-children-little.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      type: "Eau de Parfum",
      price: 95.00,
      size: "50ml",
    },
    {
      p_id: 12,
      brand: "Hugo Boss",
      gender: "Male",
      p_name: "BBBBAdfgthbn",
      discount: "10",
      imageurl: 'https://images.pexels.com/photos/36029/aroni-arsa-children-little.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      type: "Eau de Toilette",
      price: 80.25,
      size: "75ml",
    },
    {
      p_id: 13,
      brand: "Michael Kors",
      gender: "Female",
      p_name: "Bdsgfhukm",
      discount: "0",
      imageurl: 'https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: "Eau de Parfum",
      price: 110.50,
      size: "100ml",
    },
    {
      p_id: 14,
      brand: "Issey Miyake",
      gender: "Male",
      p_name: "xgfghjhmnnm",
      discount: "10",
      imageurl: 'https://w0.peakpx.com/wallpaper/607/199/HD-wallpaper-evening-pic-natura-thumbnail.jpg',
      type: "Eau de Cologne",
      price: 65.00,
      size: "50ml",
    },
    {
      p_id: 15,
      brand: "Ralph Lauren",
      gender: "Female",
      p_name: "Bgrdtmmgfjklbg",
      discount: "10",
      imageurl: 'https://pxbar.com/wp-content/uploads/2023/09/hidden-girl-pic.jpg',
      type: "Eau de Toilette",
      price: 75.75,
      size: "75ml",
    },
  ];

  const [userData, setUserData] = useState({
    userName: '',
    email: '',
    phoneNumber: '',
    address: ''
  });
  const [nav, setNav] = useState([]);
  const [showFavoritesPopup, setShowFavoritesPopup] = useState(false);
  const [showProfilePopup, setShowProfilePopup] = useState(false);


  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [suggestedProducts, setSuggestedProducts] = useState([]);
  const [suggestionSelected, setSuggestionSelected] = useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = useState('');
  const [products, setProducts] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();


  const jwt_decode = require('jwt-decode');
  const userToken = getUserData();
  const decodeToken = jwtDecode(userToken)
  
  const uId = decodeToken.uId;

  useEffect(() => {
    const fetchUserData = async (uId) => {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/user/${uId}");
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };  
    fetchUserData(uId)
  }, []);
  const handleSearch = (e) => {
    e.preventDefault();

    if (suggestionSelected) {
      const exactMatch = simulatedImages.find(
        (item) => item.p_name.toLowerCase() === selectedSuggestion.toLowerCase()
      );

      if (exactMatch) {
        navigate(`/product/${exactMatch.p_id}`);
      } else {
        const queryParams = selectedSuggestion ? `query=${selectedSuggestion}` : '';
        navigate(`/product?${queryParams}`);
      }
    }
  };


  const fetchUserData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/user/3'); // Replace with your API endpoint
      setUserData(response.data);
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleProfileUpdate = async () => {
    try {
      const response = await axios.put('http://localhost:8080/update-profile', userData); // Replace with your API endpoint
      console.log('Profile updated successfully:', response.data);

    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };
  const toggleFavoritesPopup = () => {
    setShowFavoritesPopup(!showFavoritesPopup);
  };
  const closeFavoritesPopup = () => {
    setShowFavoritesPopup(false);
  };
  const toggleProfilePopup = () => {
    setShowProfilePopup(!showProfilePopup);
  };
  const closeProfilePopup = () => {
    setShowProfilePopup(false);
  };

  useEffect(() => {
    const fetchProducts = async (uId) => {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/products/");
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };  
    fetchProducts(uId)
  }, []);

  const handleSelect = (e, selectedValue, searchType) => {
    e.preventDefault();
    if (searchType === 'brand') {
      setSelectedBrand(selectedValue);
      const queryParams = selectedValue ? `brand=${selectedValue}` : '';
      navigate(`/shop?${queryParams}`);
    } else if (searchType === 'type') {
      setSelectedType(selectedValue);
      const queryParams = selectedValue ? `type=${selectedValue}` : '';
      navigate(`/shop?${queryParams}`);
      // Handle type search
      // You may want to customize this part based on your specific requirements
   
    }
    const filteredBrands = products
      .filter((item) => item.brand.toLowerCase().includes(searchQuery.toLowerCase()))
      .map((item) => item.brand);

    const filteredTypes = products
      .filter((item) => item.category.toLowerCase().includes(searchQuery.toLowerCase()))
      .map((item) => item.category);

    const filteredPNames = products
      .filter((item) => item.p_name.toLowerCase().includes(searchQuery.toLowerCase()))
      .map((item) => item.p_name);

    const searchResults = [...filteredBrands, ...filteredTypes, ...filteredPNames];

    if (searchResults.length > 0) {
      navigate(`/shop?query=${searchResults[0]}`);
    }
  };
  const getAutoSuggestions = (query) => {
    const filteredProducts = simulatedImages
      .filter((product) =>
        product.p_name.toLowerCase().includes(query.toLowerCase())
      )
      .map((product) => product.p_name);

    return filteredProducts;
  };


  useEffect(() => {
    setNav(products);
  }, []);

  const genders = [...new Set(nav.map(navItem => navItem.gender))];
  const typesByGender = {};
  const brandsByGender = {};

  const uniqueTypes = [...new Set(products.map(item => item.category))];
  const uniqueBrands = [...new Set(products.map(item => item.brand))];
  //////////////////////////////////////////////////////
  const [wishListProducts, setWishListProducts] = useState([
    // Sample initial products data
    { id: 1, name: "Product 1", image: "https://puls-img.chanel.com/1687527727352-parfumvisual1jpg_1150x1080.jpg" },
    { id: 2, name: "Product 2", image: "https://img.lazcdn.com/g/p/22d7e7be3174c18109982a8853d3fb46.jpg_720x720q80.jpg" },
    { id: 3, name: "Product 3", image: "https://puls-img.chanel.com/1687527727352-parfumvisual1jpg_1150x1080.jpg" },
   { id: 4, name: "Product 4", image: "https://puls-img.chanel.com/1687527727352-parfumvisual1jpg_1150x1080.jpg" },
    { id: 5, name: "Product 5", image: "https://img.lazcdn.com/g/p/22d7e7be3174c18109982a8853d3fb46.jpg_720x720q80.jpg" },
    { id: 6, name: "Product 6", image: "https://puls-img.chanel.com/1687527727352-parfumvisual1jpg_1150x1080.jpg" },
    { id: 7, name: "Product 7", image: "https://img.lazcdn.com/g/p/22d7e7be3174c18109982a8853d3fb46.jpg_720x720q80.jpg" }
    
  ]);
  const redirectToProductDetail = (productId) => {
    // Implement redirectToProductDetail function logic here
  };
  const deleteProduct = (productId) => {
    // Filter out the product with the given id
    const updatedProducts = wishListProducts.filter(product => product.id !== productId);
    // Update the state with the filtered products
    setWishListProducts(updatedProducts);
  };
  const addToCart = (productId) => {
    // Implement addToCart function logic here
  };
 
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        {/* Your logo */}
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="" style={{ width: '140px', height: '45px', marginLeft: '20px', paddingRight: '20px' }} />
        </Link>

        {/* Toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ color: "#ffffff", fontSize: "20px" }}
        >
          <span className="navbar-toggler-icon" style={{ color: "#ffffff", fontSize: "20px" }}></span>
        </button>

        {/* Navbar items */}
        <div className="collapse navbar-collapse" id="navbarNav" style={{ color: "#ffffff", fontSize: "24px" }}>
          {/* Dropdown for Brands */}
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="brandsDropdown" style={{ background: ' #630229', marginRight: '15px' }}>
              Brands
            </Dropdown.Toggle>
            <Dropdown.Menu className='dropdownmenu' style={{ background: ' #630229' }}>
              {/* Brands list */}
              {uniqueBrands.map(brand => (
                <Dropdown.Item key={brand} onClick={(e) => handleSelect(e, brand, 'brand')}>
                  <span className="dropdown-item" style={{ color: "#ffffff", fontSize: "14px" }}>{brand}</span>
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          {/* Dropdown for Types */}
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="typesDropdown" style={{ background: ' #630229', marginRight: '155px' }}>
              Types
            </Dropdown.Toggle>
            <Dropdown.Menu className='dropdownmenu' style={{ background: ' #630229' }}>
              {/* Types list */}
              {uniqueTypes.map(type => (
                <Dropdown.Item key={type} onClick={(e) => handleSelect(e, type, 'type')}>
                  <span className="dropdown-item" style={{ color: "#ffffff", fontSize: "14px" }}>{type}</span>
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          {/* Search form */}
          <form className="d" onSubmit={handleSearch}>
            {/* Search input */}
            <input
              className="form-control "
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ maxWidth: '250px' }}
              value={searchQuery}
              onChange={(e) => {
                const query = e.target.value;
                setSearchQuery(query);
                setSuggestedProducts(getAutoSuggestions(query));
                setSelectedSuggestion('');
              }}
            />
            {/* Suggestions */}
            <div className="suggestions">
              {!suggestionSelected && suggestedProducts.map((suggestion, index) => (
                <div key={index} onClick={() => {
                  setSearchQuery(suggestion);
                  setSuggestionSelected(true);
                  setSelectedSuggestion(suggestion);
                }}>
                  {suggestion}
                </div>
              ))}
            </div>
            {/* Search button */}
            <button className="btn" type="submit">
              <FontAwesomeIcon icon={faSearch} style={{ color: "#ffffff", fontSize: "24px" }} />
            </button>
          </form>

          {/* Icons */}
          <div className="navbar-nav icon">
            {/* Favorites icon */}
            <div className="nav-link icons" onClick={toggleFavoritesPopup}>
              <FontAwesomeIcon icon={faHeart} style={{ color: "#ffffff", fontSize: "24px" }} />
            </div>

            {/* Cart icon */}
            <Link className="nav-link icons" to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} style={{ color: "#ffffff", fontSize: "24px" }} />
            </Link>

            {/* User icon - Toggle Profile Popup */}
            <div className="nav-link icons" onClick={toggleProfilePopup}>
              <FontAwesomeIcon icon={faUser} style={{ color: "#ffffff", fontSize: "24px" }} />
            </div>
          </div>
        </div>

        {/* Favorites Popup */}
        {showFavoritesPopup && (
          <div className="popup">
            {/* Popup content */}
            <div className="popup-content popupbox" style={{ background: "#630229", fontSize: "15px", overflowY: "scroll" }}>
              <span className="close-button" onClick={closeFavoritesPopup}>&times;</span>
              {/* Favorites icon */}
              <div className="icon d-flex justify-content-center align-items-center" onClick={toggleFavoritesPopup}>
                <FontAwesomeIcon icon={faHeart} style={{ color: "#ffffff", fontSize: "24px" }} />
              </div>
              {/* Wishlist */}
              <h4>Wishlist</h4>
              <table className="table table-bordered">
                <tbody>
                  {wishListProducts.map(product => (
                    <tr key={product.id}>
                      <td><img src={product.image} alt={product.name} onClick={() => redirectToProductDetail(product.id)} /></td>
                      <td>{product.name}</td>
                      <td><FontAwesomeIcon icon={faTrash} onClick={() => deleteProduct(product.id)} /></td>
                      <td><FontAwesomeIcon icon={faShoppingCart} onClick={() => addToCart(product.id)} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* Close button */}
              <div className="d-flex justify-content-between">
                <button className='btn m-2 border border-light' style={{ background: "#630229", fontSize: "15px", color: "#ffffff" }} onClick={closeFavoritesPopup}>Close</button>
              </div>
            </div>
          </div>
        )}

        {/* Profile Popup */}
        {showProfilePopup && (
          <div className="popup">
            {/* Popup content */}
            <div className="popup-content popupbox" style={{ background: "#630229", fontSize: "15px" }}>
              <span className="close-button" onClick={toggleProfilePopup}>&times;</span>
              {/* User icon */}
              <div className="icon d-flex justify-content-center align-items-center">
                <FontAwesomeIcon icon={faUser} style={{ fontSize: "55px" }} />
              </div>
              {/* User information and form */}
              <h4>Hi, {userData.firstname}</h4>
              <form>
                {/* User details input fields */}
                <div className="mb-3">
                  <label className="form-label">User Name:</label>
                  <input
                    className="form-control"
                    type="text"
                    value={userData.userName}
                    onChange={(e) => setUserData({ ...userData, userName: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email address:</label>
                  <input
                    className="form-control"
                    type="text"
                    value={userData.email}
                    onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone Number:</label>
                  <input
                    className="form-control"
                    type="text"
                    value={userData.phoneNumber}
                    onChange={(e) => setUserData({ ...userData, phoneNumber: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Address:</label>
                  <input
                    className="form-control"
                    type="text"
                    value={userData.address}
                    onChange={(e) => setUserData({ ...userData, address: e.target.value })}
                  />
                </div>
              </form>
              {/* Close and Logout buttons */}
              <div className="d-flex justify-content-between">
                <button className='btn m-2 border border-light' style={{ background: "#630229", fontSize: "15px", color: "#ffffff" }} onClick={closeProfilePopup}>
                  <FontAwesomeIcon icon={faTimes} style={{ color: "#ffffff", fontSize: "24px" }} />
                </button>
                <button className='btn m-2 border border-light' style={{ background: "#630229", fontSize: "15px", color: "#ffffff", border: "2px" }}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;
