

import React, { useEffect, useState } from 'react';
import './CartTable.css';
import Product from '../../Pages/Product';
import axios from 'axios';

const CartTable = ({ cartTable, setCartTable }) => {
  const count=1
  const [cartItems, setCartItems] = useState([]);

    useEffect(() =>{
        const cart = async (uId) => {
            try {
              const response = await axios.get("http://localhost:8080/api/v1/cart/getcart/3"); 
              setCartItems(response.data);
              console.log(response.data)
              
            } catch (error) {
              console.error('Error fetching cart:', error);
            }
          };
      
          cart();
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

  const handleDelete = async (itemId) => {
    console.log(itemId )
    try {
      const response = await axios.delete("http://localhost:8080/api/v1/cart/deletecartitem/3/${itemId}"); 
      console.log(response)
      // setCartItems(response.data);
    } catch (error) {
      console.error('Error deleting cart:', error);
    }

    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const handleCheckout = () => {
    // Handle checkout logic here
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
                  <tr key={item.id}>
                    <td>{count}</td>
                    <td><img src={item[0].imageURL} alt={item[0].pname} style={{ width: '100px' }} /></td>
                    <td>{item[0].pname}</td>
                    <td>${item[0].price - item[0].discount}</td>
                    <td>
                      <input
                        type="number"
                        value={item[1].quantity}
                        onChange={e => handleQuantityChange(item.id, parseInt(e.target.value))}
                      />
                    </td>
                    <td>${(item[0].price - item[0].discount) * item[1].quantity}</td>
                    <td>
                      <button type="button" className="btn btn-secondary" onClick={() => handleDelete(item.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div>Total Price after Discount: ${calculateTotalPrice()}</div>
    </div>
  );
}

export default CartTable;

