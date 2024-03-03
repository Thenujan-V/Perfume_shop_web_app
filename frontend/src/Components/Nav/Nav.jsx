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
  const [selectedCategory, setSelectedCategory] = useState('');
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
      const exactMatch = products.find(
        (item) => item.p_name.toLowerCase() === selectedSuggestion.toLowerCase()
      );

      if (exactMatch) {
        navigate(`/product/${exactMatch.pid}`);
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
  const handleLogout = () => {
    // Clear JWT token from storage
    localStorage.removeItem('jwtToken');
    // Redirect to the login page
    navigate.push('/login');
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
    } else if (searchType === 'category') {
      setSelectedCategory(selectedValue);
      const queryParams = selectedValue ? `category=${selectedValue}` : '';
      navigate(`/shop?${queryParams}`);
      console.log(`Searching for Category: ${selectedValue}`);
    }
  
    if (searchResults.length > 0) {
      navigate(`/shop?query=${searchResults[0]}`);
    }
  };
  
  const getAutoSuggestions = (query) => {
    const filteredProducts = nav
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
  const categorysByGender = {};
  const brandsByGender = {};

  const uniqueCategorys = [...new Set(products.map(item => item.category))];
  const uniqueBrands = [...new Set(products.map(item => item.brand))];

  const [wishListProducts, setWishListProducts] = useState([
    // Sample initial products data
    { id: 1, name: "Product 1", image: "https://puls-img.chanel.com/1687527727352-parfumvisual1jpg_1150x1080.jpg" },
    { id: 2, name: "Product 2", image: "https://img.lazcdn.com/g/p/22d7e7be3174c18109982a8853d3fb46.jpg_720x720q80.jpg" },
    { id: 1, name: "Product 1", image: "https://puls-img.chanel.com/1687527727352-parfumvisual1jpg_1150x1080.jpg" },
   { id: 1, name: "Product 1", image: "https://puls-img.chanel.com/1687527727352-parfumvisual1jpg_1150x1080.jpg" },
    { id: 2, name: "Product 2", image: "https://img.lazcdn.com/g/p/22d7e7be3174c18109982a8853d3fb46.jpg_720x720q80.jpg" },
    { id: 1, name: "Product 1", image: "https://puls-img.chanel.com/1687527727352-parfumvisual1jpg_1150x1080.jpg" },
    { id: 2, name: "Product 2", image: "https://img.lazcdn.com/g/p/22d7e7be3174c18109982a8853d3fb46.jpg_720x720q80.jpg" }
    
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
  ////////////////////////////////////////////
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid" >
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="" style={{ width: '140px', height: '45px', marginLeft: '20px', paddingRight: '20px' }} />
        </Link>
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
        <div className="collapse navbar-collapse" id="navbarNav" style={{ color: "#ffffff", fontSize: "24px" }}>
          <div className="navbar-nav me-auto mb-2 mb-lg-0">
            <Dropdown >
              <Dropdown.Toggle variant="secondary" id="brandsDropdown" style={{ background: ' #630229', marginRight: '15px' }}>
                Brands
              </Dropdown.Toggle>
              <Dropdown.Menu className='dropdownmenu' style={{ background: ' #630229' }}>
                {uniqueBrands.map(brand => (
                  <Dropdown.Item key={brand} onClick={(e) => handleSelect(e, brand, 'brand')}>
                    <span className="dropdown-item" style={{ color: "#ffffff", fontSize: "14px" }}>{brand}</span>
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="categorysDropdown" style={{ background: ' #630229', marginRight: '155px' }}>
                Categorys
              </Dropdown.Toggle>
              <Dropdown.Menu className='dropdownmenu' style={{ background: ' #630229' }}>
                {uniqueCategorys.map(category => (
                  <Dropdown.Item key={category} onClick={(e) => handleSelect(e, category, 'category')}>
                    <span className="dropdown-item" style={{ color: "#ffffff", fontSize: "14px" }}>{category}</span>
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
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
              onChange={(e) => {
                const query = e.target.value;
                setSearchQuery(query);
                setSuggestedProducts(getAutoSuggestions(query));
                setSelectedSuggestion('');
              }}
            />
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
            <button className="btn " type="submit">
              <FontAwesomeIcon icon={faSearch} style={{ color: "#ffffff", fontSize: "24px" }} />
            </button>
          </form>

          {/* Icons */}
          <div className="navbar-nav icon">

            <div className="nav-link icons" onClick={toggleFavoritesPopup}>
              <FontAwesomeIcon icon={faHeart} style={{ color: "#ffffff", fontSize: "24px" }} />
            </div>
            <input type="text" />
            {/* <Link className="nav-link icons" to="/favorites"><FontAwesomeIcon icon={faHeart} style={{ color: "#ffffff", fontSize: "24px" }} /></Link> */}
            <Link className="nav-link icons" to="/cart"><FontAwesomeIcon icon={faShoppingCart} style={{ color: "#ffffff", fontSize: "24px" }} /></Link>
            <div className="nav-link icons" onClick={toggleProfilePopup}><FontAwesomeIcon icon={faUser} style={{ color: "#ffffff", fontSize: "24px" }} /></div>


            {/* Favorites Popup */}
            {showFavoritesPopup && (

              // <div className="popup">
              //   <div className="popup-content popupbox" style={{ background: "#630229", fontSize: "15px", overflowY: "scroll" }}>
              //     <span className="close-button" onClick={closeFavoritesPopup}>&times;</span>
              //     <div className="icon d-flex justify-content-center align-items-center" onClick={toggleFavoritesPopup}>
              //       <FontAwesomeIcon icon={faHeart} style={{ color: "#ffffff", fontSize: "24px" }} />
              //     </div>
              //     <h4>Wishlist</h4>

              //     <table className="table table-bordered">
              //       <tbody>

              //         {wishListProducts.map(product => (
              //           <tr key={product.id}>

              //             <td><img src={product.image} alt={product.name} onClick={() => redirectToProductDetail(product.id)} /></td>
              //             <td>{product.name}</td>
              //             <td><FontAwesomeIcon icon={faTrash} onClick={() => deleteProduct(product.id)} /></td>
              //             <td><FontAwesomeIcon icon={faShoppingCart} onClick={() => addToCart(product.id)} /></td>
              //           </tr>
              //         ))}
              //       </tbody>
              //     </table>

              //     <div className="d-flex justify-content-between">
              //       <button className='btn m-2 border border-light' style={{ background: "#630229", fontSize: "15px", color: "#ffffff" }} onClick={closeFavoritesPopup}>Close</button>
              //     </div>
              //   </div>
              // </div>
              <div className="popup">
                <div className="popup-content popupbox" style={{ background: "#630229", fontSize: "15px", overflowY: "scroll" }}>
                  <span className="close-button" onClick={closeFavoritesPopup}>&times;</span>
                  <div className="icon d-flex justify-content-center align-items-center" onClick={toggleFavoritesPopup}>
                    {/* Assuming FontAwesomeIcon is imported properly */}
                    {/* <FontAwesomeIcon icon={faHeart} style={{ color: "#ffffff", fontSize: "24px" }} /> */}
                    <div className="icon d-flex justify-content-center align-items-center" onClick={toggleFavoritesPopup}>
  <FontAwesomeIcon icon={faHeart} style={{ color: "#ffffff", fontSize: "24px" }} />
</div>
                  </div>
                  <h4>Wishlist</h4>
                  {/* Table */}
                  <table className="table table-bordered ">
                    
                    <tbody>
                      {/* Table rows */}
                      {wishListProducts.map(product => (
                        <tr key={product.id}>
                          <td><img src={product.image} alt={product.name} className="img-fluid"
                            style={{ width: "40px", height: "40px" }} onClick={() => redirectToProductDetail(product.id)} /></td>
                          <td>{product.name}</td>
                          <td><FontAwesomeIcon icon={faTrash} onClick={() => deleteProduct(product.id)} /></td>
                          <td><FontAwesomeIcon icon={faShoppingCart} onClick={() => addToCart(product.id)} /></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {/* Popup content */}
                  <div className="d-flex justify-content-between">
                    <button className='btn m-2 border border-light' style={{ background: "#630229", fontSize: "15px", color: "#ffffff" }} onClick={closeFavoritesPopup}>Close</button>
                  </div>
                </div>
              </div>

            )}
            {/* Profile Popup */}
            {showProfilePopup && (
              <div className="popup" >
                <div className="popup-content popupbox" style={{ background: "#630229", fontSize: "15px" }}>
                  <span className="close-button" onClick={toggleProfilePopup}>&times;</span>
                  <div className="icon d-flex justify-content-center align-items-center"><FontAwesomeIcon icon={faUser} style={{ fontSize: "55px" }} /></div>
                  <h4>Hi, {userData.firstname}</h4>
                  <form>
                    <div className="mb-3">
                      <label className="form-label">User Name:</label>
                      <input
                        className="form-control"
                        type="text"
                        value={userData.firstName}
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
                        value={userData.phoneno}
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
                  <div className="d-flex justify-content-between">
                    <button className='btn m-2 border border-light' style={{ background: "##630229", fontSize: "15px", color: "#ffffff" }} onClick={closeProfilePopup}>Close</button>
                    <button className='btn m-2 border border-light' style={{ background: "##630229", fontSize: "15px", color: "#ffffff", border: "2px" }} >Edit</button>
                    <button className='btn m-2 border border-light' style={{ background: "##630229", fontSize: "15px", color: "#ffffff", border: "2px" }} onClick={handleLogout}>Logout</button>

                  </div>
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

