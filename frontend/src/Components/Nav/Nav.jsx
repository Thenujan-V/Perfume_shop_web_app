import React, { useEffect, useState } from 'react'
import './Nav.css'; // Import your CSS file
import cart from '../Assets/cart.png'
import pro from '../Assets/pro.png'
import logo from '../Assets/logo.png'
import wish from '../Assets/wish.png'
import { Link } from 'react-router-dom';

const Nav = () => {
  const [showDrop, setShowDrop] = useState(false);
  const [showMega, setShowMega] = useState(false);



  const [nav , setNav] = useState([]);
  useEffect(() =>{


      // const fetchNavData = async () => {
      //     try {
      //       const response = await axios.get('/newArrivals'); 
      //       setNav(response.data);
      //     } catch (error) {
      //       console.error('Error fetching setNavData:', error);
      //     }
      //   };
    
      //   fetchsetNavData();
    

      const simulatedImages = [
        {
          id: 1,
          brand: "Chanel",
          gender: "Unisex",
          image: 'https://pxbar.com/wp-content/uploads/2023/09/hidden-girl-pic.jpg', 
          type: "Eau de Parfum",
          price: 100.00,
          size: "50ml",
        },
        {
          id: 2,
          brand: "Dior",
          gender: "Male",
          image: 'https://w0.peakpx.com/wallpaper/607/199/HD-wallpaper-evening-pic-natura-thumbnail.jpg',
          type: "Eau de Toilette",
          price: 85.50,
          size: "100ml",
        },
        {
          id: 3,
          brand: "Gucci",
          gender: "Female",
          image: 'https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg?auto=compress&cs=tinysrgb&w=400',
          type: "Eau de Parfum",
          price: 120.00,
          size: "75ml",
        },
        {
          id: 4,
          brand: "Versace",
          gender: "Male",
          image: 'https://w0.peakpx.com/wallpaper/607/199/HD-wallpaper-evening-pic-natura-thumbnail.jpg',
          type: "Eau de Cologne",
          price: 75.25,
          size: "50ml",
        },
        {
          id: 5,
          brand: "Calvin Klein",
          gender: "Female",
          image: 'https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg?auto=compress&cs=tinysrgb&w=400',
          type: "Eau de Toilette",
          price: 60.50,
          size: "50ml",
        },
        {
          id: 6,
          brand: "Yves Saint Laurent",
          gender: "Unisex",
          image: 'https://pxbar.com/wp-content/uploads/2023/09/hidden-girl-pic.jpg', 
          type: "Eau de Parfum",
          price: 110.00,
          size: "75ml",
        },
        {
          id: 7,
          brand: "Bvlgari",
          gender: "Male",
          image: 'https://images.pexels.com/photos/36029/aroni-arsa-children-little.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          type: "Eau de Toilette",
          price: 95.75,
          size: "100ml",
        },
        {
          id: 8,
          brand: "Marc Jacobs",
          gender: "Female",
          image: 'https://w0.peakpx.com/wallpaper/607/199/HD-wallpaper-evening-pic-natura-thumbnail.jpg',
          type: "Eau de Parfum",
          price: 85.00,
          size: "50ml",
        },
        {
          id: 9,
          brand: "Tom Ford",
          gender: "Male",
          image: 'https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg?auto=compress&cs=tinysrgb&w=400',
          type: "Eau de Cologne",
          price: 120.50,
          size: "75ml",
        },
        {
          id: 10,
          brand: "Prada",
          gender: "Female",
          image: 'https://pxbar.com/wp-content/uploads/2023/09/hidden-girl-pic.jpg', 
          type: "Eau de Toilette",
          price: 70.00,
          size: "100ml",
        },
        {
          id: 11,
          brand: "Chloe",
          gender: "Unisex",
          image: 'https://images.pexels.com/photos/36029/aroni-arsa-children-little.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          type: "Eau de Parfum",
          price: 95.00,
          size: "50ml",
        },
        {
          id: 12,
          brand: "Hugo Boss",
          gender: "Male",
          image: 'https://images.pexels.com/photos/36029/aroni-arsa-children-little.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          type: "Eau de Toilette",
          price: 80.25,
          size: "75ml",
        },
        {
          id: 13,
          brand: "Michael Kors",
          gender: "Female",
          image: 'https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg?auto=compress&cs=tinysrgb&w=400',
          type: "Eau de Parfum",
          price: 110.50,
          size: "100ml",
        },
        {
          id: 14,
          brand: "Issey Miyake",
          gender: "Male",
          image: 'https://w0.peakpx.com/wallpaper/607/199/HD-wallpaper-evening-pic-natura-thumbnail.jpg',
          type: "Eau de Cologne",
          price: 65.00,
          size: "50ml",
        },
        {
          id: 15,
          brand: "Ralph Lauren",
          gender: "Female",
          image: 'https://pxbar.com/wp-content/uploads/2023/09/hidden-girl-pic.jpg', 
          type: "Eau de Toilette",
          price: 75.75,
          size: "75ml",
        },
      ];
      
      setNav(simulatedImages);
      console.log('allProducts set:', simulatedImages);
  },[])
  console.log(nav);

  const toggleDropdown = () => {
    setShowDrop(!showDrop);
    setShowMega(false);
  };

  const toggleMegaMenu = () => {
    setShowMega(!showMega);
    setShowDrop(false);
  };

  const genders = [...new Set(nav.map(navItem => navItem.gender))];
  const typesByGender = {};

  // Group types by gender
  genders.forEach(gender => {
    typesByGender[gender] = [...new Set(nav.filter(item => item.gender === gender).map(item => item.type))];
  });



  return (
    <nav>
      {genders.map(gender => (
        <div className="wrapper" key={gender}>
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" style={{ width: '150px', height: '52px' }} />
            </Link>
          </div>
          <div className="search">
            <input type="text" />
          </div>
          <input
            type="checkbox"
            id="menu-btn"
            onChange={toggleDropdown}
            checked={showDrop || showMega}
          />
          <input type="checkbox" id="close-btn" />

          <ul className="nav-links">
            <label htmlFor="close-btn" className="btn close-btn">
              <i className="fas fa-times"></i>
            </label>
            <li className="list">
              <a href="#" className="desktop-item" onClick={toggleMegaMenu}>
                {gender.toUpperCase()}
              </a>
              <input type="checkbox" id={`showMega${gender}`} checked={showMega} />
              <label htmlFor={`showMega${gender}`} className="mobile-item" onClick={toggleMegaMenu}>
                {gender.toUpperCase()}
              </label>
              <div className="mega-box">
                <div className="content">
                  {typesByGender[gender].map(type => (
                    <div key={type}>
                      <header>{type}</header>
                      <ul className="mega-links">
                        {nav
                          .filter(item => item.gender === gender && item.type === type)
                          .map((navItem, index) => (
                            <li key={index}>
                              <a href="#">{navItem.brand}</a>
                            </li>
                          ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </li>
            {/* ... (Other list items) */}
            {/* User Icons */}
          </ul>
          <label htmlFor="menu-btn" className="btn menu-btn">
            <i className="fas fa-bars"></i>
          </label>
        </div>
      ))}
    </nav>
  );
  }
export default Nav


