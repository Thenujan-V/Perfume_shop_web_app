// import React, { useState } from 'react'
// import './CartTable.css'
// import Product from '../../Pages/Product';

// const CartTable = ({cartTable,setCartTable}) => {
//     const [cartItems, setCartItems] = useState([
//         { id: 1, name: 'Product 1', image: 'https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg?auto=compress&cs=tinysrgb&w=800', price: 10, quantity: 2 },
//         { id: 2, name: 'Product 2', image: 'https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg?auto=compress&cs=tinysrgb&w=800', price: 15, quantity: 1 },
//         { id: 3, name: 'Product 3', image: 'https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg?auto=compress&cs=tinysrgb&w=800', price: 20, quantity: 3 },
//       ]);
    
//       const calculateTotalPrice = () => {
//         return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//       };
    
//       const handleQuantityChange = (itemId, newQuantity) => {
//         const updatedCart = cartItems.map(item =>
//           item.id === itemId ? { ...item, quantity: newQuantity } : item
//         );
//         setCartItems(updatedCart);
//       };
//       ///////////////////////////////////
//     const{price, setPrice}= useState(0);
//   return (


//     // <article>
//     //     {
//     //         cartTable?.map((Product)=>(
//     //             <div className="cart_box" key={Product.id}>
//     //                 <div className="cart_img">
//     //                     <img src="{Product.img}"/>
//     //                     <p>{Product.title}</p>
//     //                 </div>
//     //                 <div>
//     //                     <button> + </button>
//     //                     <button> - </button>
//     //                 </div>
//     //                 <div>
//     //                     <span>{Product.price}</span>
//     //                     <button>Remove</button>
//     //                 </div>
//     //             </div>
//     //         ))
//     //       }
//     //       <div>
//     //         <span>

//     //         </span>
//     //       </div>
//     //     <div>
//     //         <span> SubTotal </span>
//     //         <span>LKR- </span>
//     //         <br />
//     //         <span> Total </span>  
//     //         <span>LKR- {price}</span>  
//     //     </div>  
        
//     // </article>
//     <div>
//       <h1>Shopping Cart</h1>
//       <div>
//         {cartItems.map(item => (
//           <div key={item.id} style={{ marginBottom: '20px' }}>
//             <img src={item.image} alt={item.name} style={{ width: '100px', marginRight: '20px' }} />
//             <div>
//               <h3>{item.name}</h3>
//               <p>Unit Price: ${item.price}</p>
//               <label htmlFor={`quantity-${item.id}`}>Quantity: </label>
//               <input
//                 id={`quantity-${item.id}`}
//                 type="number"
//                 value={item.quantity}
//                 onChange={e => handleQuantityChange(item.id, parseInt(e.target.value))}
//               />
//               <p>Total Price: ${item.price * item.quantity}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div>
//         <h3>Total Price: ${calculateTotalPrice()}</h3>
//       </div>
//     </div>
//   );
  
// }

// export default CartTable


import React, { useState } from 'react';
import './CartTable.css';
import Product from '../../Pages/Product';

const CartTable = ({ cartTable, setCartTable }) => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', image: 'https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg?auto=compress&cs=tinysrgb&w=800', price: 10, quantity: 2 },
    { id: 2, name: 'Product 2', image: 'https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg?auto=compress&cs=tinysrgb&w=800', price: 15, quantity: 1 },
    { id: 3, name: 'Product 3', image: 'https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg?auto=compress&cs=tinysrgb&w=800', price: 20, quantity: 3 },
  ]);
  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedCart = cartItems.map(item =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
  };
  const calculateTotalPrice = () => {
    return cartItems.reduce((Subtotal, item) => Subtotal + item.price * item.quantity, 0);
  };

  

  // const calculateFinalTotalPrice = () => {
    
  //   return cartItems.reduce((total, item) => (total + item.price * item.quantity) , 0)
  // }
  const deliveryFee = 17;
  const discount = 10;
const calculateFinalTotalPrice = () => {

    const subtotal = cartItems.reduce((total, item) => (total + item.price * item.quantity), 0);
    const totalPrice = subtotal + deliveryFee - discount;
    return totalPrice;
}

  

  

  return (
    <div>
      <h1>Shopping Cart</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td><img src={item.image} alt={item.name} style={{ width: '100px' }} /></td>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={e => handleQuantityChange(item.id, parseInt(e.target.value))}
                />
              </td>
              <td>${item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        
        <h3>SubTotal Price: ${calculateTotalPrice()}</h3>
        <h3>Delivery fee: ${deliveryFee}</h3>
        <h3>-Discount: ${discount}</h3>
        <h3>Total Price:${calculateFinalTotalPrice()} </h3>
        
      </div>
    </div>
  );
}

export default CartTable;

