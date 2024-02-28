

import React, { useEffect, useState } from 'react';
import './CartTable.css';
import Product from '../../Pages/Product';
import axios from 'axios';

const CartTable = ({ cartTable, setCartTable }) => {
  const [cartItems, setCartItems] = useState([
    // { id: 1, name: 'Product 1', image: 'https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg?auto=compress&cs=tinysrgb&w=800', price: 10, quantity: 2 },
    // { id: 2, name: 'Product 2', image: 'https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg?auto=compress&cs=tinysrgb&w=800', price: 15, quantity: 1 },
    // { id: 3, name: 'Product 3', image: 'https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg?auto=compress&cs=tinysrgb&w=800', price: 20, quantity: 3 },
  ]);

    useEffect(() =>{
        const cart = async (uId) => {
            try {
              const response = await axios.get("http://localhost:8080/api/v1/cart/getcart/3"); 
              setCartItems(response.data);
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
    return cartItems.reduce((total, item) => total + ((item.price - item.discount) * item.quantity), 0);
  };

  const handleDelete = (itemId) => {
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
                    <td>{item.id}</td>
                    <td><img src={item.image} alt={item.name} style={{ width: '100px' }} /></td>
                    <td>{item.name}</td>
                    <td>${item.price - item.discount}</td>
                    <td>
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={e => handleQuantityChange(item.id, parseInt(e.target.value))}
                      />
                    </td>
                    <td>${(item.price - item.discount) * item.quantity}</td>
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

