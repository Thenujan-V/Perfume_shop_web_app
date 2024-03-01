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
import axios from 'axios';


const Nav = () => {
 
  const simulatedImages = [
    {
      p_id: 1,
      brand: "Chanel",
      gender: "Unisex",
      p_name:"Aaaaa",
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
      p_name:"BBBBBB",
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
      p_name:"Adfgt",
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
      p_name:"thgmbn",
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
      p_name:"Adfgmbn",
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
      p_name:"hgmbn",
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
      p_name:"ggmbn",
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
      p_name:"gthbn",
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
      p_name:"dfgthbn",
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
      p_name:"Adfghgmbn",
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
      p_name:"bchgmbn",
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
      p_name:"BBBBAdfgthbn",
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
      p_name:"Bdsgfhukm",
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
      p_name:"xgfghjhmnnm",
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
      p_name:"Bgrdtmmgfjklbg",
      discount:"10",
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
  const [showProfilePopup, setShowProfilePopup] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [suggestedProducts, setSuggestedProducts] = useState([]);
  const [suggestionSelected, setSuggestionSelected] = useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = useState('');
  const location = useLocation(); 
  const navigate = useNavigate();

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

  const toggleProfilePopup = () => {
    setShowProfilePopup(!showProfilePopup);
  };
  const closeProfilePopup = () => {
    setShowProfilePopup(false);
  };


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
      console.log(`Searching for type: ${selectedValue}`);
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
    setNav(simulatedImages);
  }, []);

  const genders = [...new Set(nav.map(navItem => navItem.gender))];
  const typesByGender = {};
  const brandsByGender = {};

  const uniqueTypes = [...new Set(simulatedImages.map(item => item.type))];
  const uniqueBrands = [...new Set(simulatedImages.map(item => item.brand))];

  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid" >
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="" style={{ width: '140px', height: '50px', marginTopb:'10px' , paddingRight:'20px'}} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{color:"#ffffff" , fontSize: "20px"}}
        >
          <span className="navbar-toggler-icon" style={{color:"#ffffff" , fontSize: "20px"}}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav" style={{color:"#ffffff" , fontSize: "24px"}}>
          <div className="navbar-nav me-auto mb-2 mb-lg-0">
          <Dropdown >
  <Dropdown.Toggle variant="secondary" id="brandsDropdown" style={{background:' #630229',marginRight:'15px'}}>
    Brands
  </Dropdown.Toggle>
  <Dropdown.Menu  className='dropdownmenu'  style={{background:' #630229'}}>
    {uniqueBrands.map(brand => (
      <Dropdown.Item key={brand} onClick={(e) => handleSelect(e, brand, 'brand')}>
        <span className="dropdown-item" style={{color:"#ffffff" , fontSize: "14px"}}>{brand}</span>
      </Dropdown.Item>
    ))}
  </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="typesDropdown" style={{background:' #630229'}}>
              Types
            </Dropdown.Toggle>
            <Dropdown.Menu className='dropdownmenu' style={{background:' #630229'}}>
              {uniqueTypes.map(type => (
                <Dropdown.Item key={type} onClick={(e) => handleSelect(e, type, 'type')}>
                  <span className="dropdown-item" style={{color:"#ffffff" , fontSize: "14px"}}>{type}</span>
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
    <FontAwesomeIcon icon={faSearch} style={{color:"#ffffff" , fontSize: "24px"}}/>
  </button>
</form>

          {/* Icons */}
          <div className="navbar-nav icon">
            <input type="text" />
            <Link className="nav-link icons" to="/favorites"><FontAwesomeIcon icon={faHeart} style={{color:"#ffffff" , fontSize: "24px"}}/></Link>
            <Link className="nav-link icons" to="/cart"><FontAwesomeIcon icon={faShoppingCart} style={{color:"#ffffff", fontSize: "24px"}}/></Link>
            <div className="nav-link icons" onClick={toggleProfilePopup}><FontAwesomeIcon icon={faUser} style={{color:"#ffffff", fontSize: "24px"}}/></div>

         {/* Profile Popup */}
      {showProfilePopup && (
        <div className="popup">
        <div className="popup-content">
          <span className="close-button" onClick={toggleProfilePopup}>&times;</span>
          <div className="icon d-flex justify-content-center align-items-center"><FontAwesomeIcon icon={faUser} style={{fontSize: "35px"}}/></div>
          <h2>Hi, {userData.firstname}</h2>
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
            <button className='btn btn-primary' onClick={closeProfilePopup}>Close</button>
            <button className='btn btn-danger'>Logout</button>
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