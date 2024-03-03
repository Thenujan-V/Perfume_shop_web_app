import React, { useContext, useEffect } from 'react'
import './ItemCard.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faUser, faSearch,faTimes ,faTrash} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { getUserData } from '../storage/GetUserData';
import { ShopContext } from '../../Context/ShopContext';
const ItemCard = (props) => {
  const { addToCart } = useContext(ShopContext);
  
  const addToCartList = async (pid) => {
    const userToken = getUserData();
    if (userToken) {
      const jwt_decode = require('jwt-decode');
      const decodeToken = jwt_decode(userToken);
      const uId = decodeToken.uId;
      try {
        const response = await axios.post(`http://localhost:8080/api/v1/cart/createcart/${uId}/${pid}`, {});
        if (response.data === 'Cart already exists.') {
          alert('Cart Already Exists');
        } else {
          addToCart(pid);
        }
      } catch (error) {
        console.error('Error adding to cart:', error);
      }
    }
  };
  


  const addToWishList = () => {

  }


  


  return (
    <div className='itemCard text-center'>
        <div className="itemCareView">
        <Link to={`/product/${props.p_id}`}><img src={props.imageurl} onClick={window.scrollTo(0,0)} alt="" className='img-fluid rounded m-2' /></Link>
        
        <div className="itemPrices" style={{background:"#630229"}}>
            <p>{props.p_name}rrrrr</p>
            <div className="itemNewPrice">
                ${props.price}
            </div>
            <div className="itemOldPrice ">
                {props.discount}%
            </div>
            <div className="d-flex justify-content-between  ">
                 {/* <Link className="nav-link icons" style={{marginBottom:"20px",marginLeft:"20px"}} to="/favorites"><FontAwesomeIcon icon={faHeart} style={{ color: "#ffffff", fontSize: "24px" }} /></Link> */}
                {/* <Link className="nav-link icons" style={{marginBottom:"20px",marginRight:"20px"}}  to="/cart"><FontAwesomeIcon icon={faShoppingCart} style={{ color: "#ffffff", fontSize: "24px" }} /></Link> */}
                <button className="nav-link icons" onClick={addToWishList}  style={{marginBottom:"20px",marginRight:"20px"}}>
                  <FontAwesomeIcon icon={faHeart} style={{ color: "#ffffff", fontSize: "24px" }}  />
                </button>

                <button className="nav-link icons" onClick={() => addToCartList(props.p_id)}  style={{marginBottom:"20px",marginRight:"20px"}}>
                  <FontAwesomeIcon icon={faShoppingCart} style={{ color: "#ffffff", fontSize: "24px" }}  />
                </button>
             </div>
        </div>
        </div>
    </div>
  )
}

export default ItemCard