

// import React, { useState } from 'react';
// import './CartTable.css';
// import Product from '../../Pages/Product';

// const CartTable = ({ cartTable, setCartTable }) => {
//   const [cartItems, setCartItems] = useState([
//     { id: 1, name: 'Product 1', image: 'https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg?auto=compress&cs=tinysrgb&w=800', price: 10, quantity: 2 },
//     { id: 2, name: 'Product 2', image: 'https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg?auto=compress&cs=tinysrgb&w=800', price: 15, quantity: 1 },
//     { id: 3, name: 'Product 3', image: 'https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg?auto=compress&cs=tinysrgb&w=800', price: 20, quantity: 3 },
//   ]);
//   const handleQuantityChange = (itemId, newQuantity) => {
//     const updatedCart = cartItems.map(item =>
//       item.id === itemId ? { ...item, quantity: newQuantity } : item
//     );
//     setCartItems(updatedCart);
//   };
//   const calculateTotalPrice = () => {
//     return cartItems.reduce((Subtotal, item) => Subtotal + item.price * item.quantity, 0);
//   };



//   // const deliveryFee = 17;
//   // const discount = 10;
//   // const calculateFinalTotalPrice = () => {

//   //   const subtotal = cartItems.reduce((total, item) => (total + item.price * item.quantity), 0);
//   //   const totalPrice = subtotal + deliveryFee - discount;
//   //   return totalPrice;
//   // }
//   const handleDelete = () => {

//   }

//   const handleCheckout = () => {

//   }

  


//   return (
//     <div>
//       <h1>Shopping Cart</h1>
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-8">
//             <table className="table">
//               <thead>
//                 <tr>
//                   <th>ID</th>
//                   <th>Image</th>
//                   <th>Name</th>
//                   <th>Price</th>
//                   <th>Quantity</th>
//                   <th>Total Price</th>
//                   <th>Action</th> {/* Add this table header for the delete button */}
//                 </tr>
//               </thead>
//               <tbody>
//                 {cartItems.map(item => (
//                   <tr key={item.id}>
//                     <td>{item.id}</td>
//                     <td><img src={item.image} alt={item.name} style={{ width: '100px' }} /></td>
//                     <td>{item.name}</td>
//                     <td>${item.price}</td>
//                     <td>
//                       <input
//                         type="number"
//                         value={item.quantity}
//                         onChange={e => handleQuantityChange(item.id, parseInt(e.target.value))}
//                       />
//                     </td>
//                     <td>${item.price * item.quantity}</td>
//                     <td>
//                       <button type="button" class="btn btn-secondary" onClick={() => handleDelete(item.id)}>Delete</button> {/* Delete button */}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>

//           </div>
         
//         </div>
//       </div>
//     </div>

//   );
// }

// export default CartTable;
import React, { useState } from 'react';
import './CartTable.css';
import Product from '../../Pages/Product';

const CartTable = ({ cartTable, setCartTable }) => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', image: 'https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg?auto=compress&cs=tinysrgb&w=800', price: 10, quantity: 2, discount: 5 },
    { id: 2, name: 'Product 2', image: 'https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg?auto=compress&cs=tinysrgb&w=800', price: 15, quantity: 1, discount: 0 },
    { id: 3, name: 'Product 3', image: 'https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg?auto=compress&cs=tinysrgb&w=800', price: 20, quantity: 3, discount: 0 },
  ]);

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

