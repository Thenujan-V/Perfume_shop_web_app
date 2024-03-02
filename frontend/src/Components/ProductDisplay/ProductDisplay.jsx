import React, { useState,useContext } from 'react'
import './ProductDisplay.css'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import { ShopContext } from '../../Context/ShopContext'
import { getUserData } from '../storage/GetUserData';
import { jwtDecode } from 'jwt-decode';

// import { Link } from 'react-router-dom'
const ProductDisplay = (props) => {
  const {product} = props
  const { addToCart } = useContext(ShopContext);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [userData, setUserData] = useState({
    userName: '',
    email: '',
    phoneNumber: '',
    address: ''
  });

  const jwt_decode = require('jwt-decode');
  const userToken = getUserData();
  const decodeToken = jwtDecode(userToken)
  
  const uId = decodeToken.uId;

  const handleAddToCart = () => {
    // console.log("pid "+ pid)
    console.log("uid"+uId)
    // addToCart(product.id);
    axios.post(`http://localhost:8080/api/v1/cart/createcart/${uId}/${product.pid}`, { productId: product.pid })
  .then(response => {
    console.log(response.data);
    addToCart(product.id);
  })
  .catch(error => {
    console.error('Error adding to cart:', error);
  });
  };
  const handleAddToWishlist = () => {
    axios.post('http://localhost:8080/api/v1/addToWishlist',{productId: product.id })
      .then(response => {
        console.log(response.data);
        setIsInWishlist(true); 
      })
      .catch(error => {
        console.error('Error adding to wishlist:', error);
      });
  };

  const navigate=useNavigate()
  

  const handleCheckOut = () => {
    axios.post('http://localhost:8080/api/v1/orderitems/3',{productId: product.id })
      .then(response => {
        console.log(response.data);
        setIsInWishlist(true); 
        navigate("/")
        
      })
      .catch(error => {
        console.error('Error adding to wishlist:', error);
      });
  }

  return (
    <div className='row ProductDisplay m-0'>
        <div className="col-lg-4 col-12 d-flex flex-column justify-content-center align-items-center  ProductDisplayLeft">
          <img src={product.imageURL} className='image-fluid' alt="" />
        </div>
        <div className="col-lg-8 col-12 d-flex flex-column  ProductDisplayRight">
          <h1 className=''>{product.pname}    
               <button className=' border border-light m-3' style={{ color: isInWishlist ? 'red' : 'black' }}
          onClick={handleAddToWishlist}   ><FontAwesomeIcon icon={faHeart} style={{background: '#ffffff' , fontSize: "35px"}}/></button>
          </h1>
          <h3>{product.brand}</h3>
          <h3>{product.category}</h3>
          <div className='dis productQuantity'>Price: ${product.price}</div>
          <div className="dis newPrice">Size: {product.size}</div>
          <div className="dis ">discount: {product.discount}%</div>
          <div className="dis productDetails">{product.description}</div>
          
          {/* <button onClick={()=>{addToCart(product.id)}}>Add To Cart</button> */}

          <div className="but">
          <button
          style={{ background: '#630229', color: '#ffffff', padding: '8px' }}
          className='btn rounded'
          onClick={handleAddToCart}
        >
          Add To Cart
        </button>

        
        <button
          style={{ background: '#630229', color: '#ffffff', padding: '8px' }}
          className='btn rounded'
          onClick={handleCheckOut}
        >
          Check Out
        </button>
        

          </div>
        </div>
    </div>
  )
}

export default ProductDisplay;