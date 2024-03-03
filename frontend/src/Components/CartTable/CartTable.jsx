

import React, { useEffect, useState } from 'react';
import './CartTable.css';
import Product from '../../Pages/Product';
import axios from 'axios';
import { getUserData } from '../storage/GetUserData';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
const CartTable = ({ cartTable, setCartTable }) => {
  const count=1
  const [cartItems, setCartItems] = useState([]);
  const [userData, setUserData] = useState({
    userName: '',
    email: '',
    phoneNumber: '',
    address: ''
  });
  const navigate=useNavigate()

  const jwt_decode = require('jwt-decode');
  const userToken = getUserData();
  const decodeToken = jwtDecode(userToken)
  
  const uId = decodeToken.uId;
    useEffect(() =>{
        const cart = async (uId) => {
            try {
              const response = await axios.get(`http://localhost:8080/api/v1/cart/getcart/${uId}`); 
              setCartItems(response.data);
              
            } catch (error) {
              console.error('Error fetching cart:', error);
            }
          };
      
          cart(uId);
    },[])

  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedCart = cartItems.map(item =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + ((item[0].price - item[0].discount) * item[1].quantity), 0);
  };

  const handleDelete = async (uId, itemId) => {
    try {
      const response = await axios.delete(`http://localhost:8080/api/v1/cart/deletecartitem/${uId}/${itemId}`,{ }); 
    } catch (error) {
      console.error('Error deleting cart:', error);
    }

    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart);
    window.location.reload();
  };

  const handleCheckOut = async () => {
    try {
      const response = await axios.post(`http://localhost:8080/api/v1/order/create/${uId}`,{}); 
      navigate("/checkout")
      window.location.reload();
    } 
    catch (error) {
      console.error('Error deleting cart:', error);
    }
  };
  
  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Unit Price</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(item => (
                  <tr key={item[0].pid}>
                    <td>{count}</td>
                    <td><img src={item[0].imageURL} alt={item[0].pname} style={{ width: '100px' }} /></td>
                    <td>{item[0].pname}</td>
                    <td>${item[0].price - item[0].discount}</td>
                    <td>
                      <input
                        type="number"
                        value={item[1].quantity}
                        onChange={e => handleQuantityChange(item[0].id, parseInt(e.target.value))}
                      />
                    </td>
                    <td>${(item[0].price - item[0].discount) * item[1].quantity}</td>
                    <td>
                      <button type="button" className="btn btn-secondary" onClick={() => handleDelete(uId, item[0].pid)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div>Total Price after Discount: ${calculateTotalPrice()}</div>
      <button
          style={{ background: '#630229', color: '#ffffff', padding: '8px' }}
          className='btn rounded'
          onClick={handleCheckOut}
        >
          Check Out
        </button>
    </div>
  );
}

export default CartTable;

