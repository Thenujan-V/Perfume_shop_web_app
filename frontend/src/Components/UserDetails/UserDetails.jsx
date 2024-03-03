import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { getUserData } from '../storage/GetUserData';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';




const UserDetails = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    phoneNumber: '',
    streetAddress: '',
    email: '',
    
  });
console.log(formData)
  const [formErrors, setFormErrors] = useState({
    firstName: '',
    phoneNumber: '',
    email: ''
  });
  const [userDetails, setUserDetails] = useState([])
  const [products, setProducts] = useState([]);
  const [oid, setOid] = useState('');
  const deliveryCharge = 42


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: '' }); // Clear any previous error messages
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};

    // Simple form validation
    if (formData.firstName.trim() === '') {
      errors.firstName = 'First name is required';
    }
    // if (formData.lastName.trim() === '') {
    //   errors.firstName = 'Last name is required';
    // }
    if (formData.phoneNumber.trim() === '') {
      errors.phoneNumber = 'Phone number is required';
    }
    if (formData.email.trim() === '') {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }

    if (Object.keys(errors).length === 0) {
      
      console.log('Form submitted:', formData);
    } else {
      setFormErrors(errors);
    }
  };
    useEffect(() =>{
    
      const fetchOrderDats = async () => {
          try {
            const response = await axios.get("http://localhost:8080/api/v1/order/orderitems/1"); 
            setProducts(response.data);
            
            console.log(response.data[0][0].oid)
            setOid(response.data[0][0].oid)
            
          } catch (error) {
            console.error('Error fetching oeder datas:', error);
          }
        };
    
        fetchOrderDats();
  },[])

  const jwt_decode = require('jwt-decode');
  const userToken = getUserData();
  const decodeToken = jwtDecode(userToken);
  
  const uId = decodeToken.uId;

  const [defaultUserDetails, setDefaultUserDetails] = useState([])
 

  
console.log("oid     :",oid)
  useEffect(() =>{
    
    const fetchUserDatas = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/api/v1/user/${uId}`); 
          setDefaultUserDetails(response.data);
          console.log(response.data)                                       
          
        } catch (error) {
          console.error('Error fetching user datas:', error);
        }
      };
  
      fetchUserDatas(uId);
},[])

  const navigate = useNavigate()

  // const orderId = products[0][0].oid

  const updateUserDatas = async () => {
    try {
      const response = await axios.put(`http://localhost:8080/userdetail/${uId}/${oid}`,{
        "firstName":"formData.firstName",
        "email":"formData.email",
        "phoneNo":"formData.phoneNumber",
        "userAddress":"formData.streetAddress"
      }); 
      
      
    } catch (error) {
      console.error('Error fetching update user details:', error);
    }
    navigate("/order")
  };
  
 
    const totalPrice = () => {
        const subtotal = products.reduce((total, product) => total + product[1].price, 0);
        const totalDiscount = products.reduce((total, product) => total + product[1].discount, 0);
        const finalSubtotal = subtotal - totalDiscount;

        return finalSubtotal + deliveryCharge;
    };
    return (
    <div className="container">
      <div className="row">
      <div className="col-md-7">
        {/* User Details Section */}
        <h2>User Details</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="Title" className="form-label">
            Title<span className="required-sign" style={{ color: 'red' }}> *</span>
          </label>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">First Name<span className="required-sign" style={{ color: 'red' }}> *</span></label>
                <input type="text" className="form-control" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                {formErrors.firstName && <div style={{ color: 'red' }}>{formErrors.firstName}</div>}
              </div>
            </div>
            {/* <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">Last Name<span className="required-sign" style={{ color: 'red' }}> *</span></label>
                <input type="text" className="form-control" id="firstName" name="firstName" value={formData.lastName} onChange={handleChange} required />
                {formErrors.lastName && <div style={{ color: 'red' }}>{formErrors.lastName}</div>}
              </div>
            </div> */}
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">Phone Number<span className="required-sign" style={{ color: 'red' }}> *</span></label>
            <input type="tel" className="form-control" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
            {formErrors.phoneNumber && <div style={{ color: 'red' }}>{formErrors.phoneNumber}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address<span className="required-sign" style={{ color: 'red' }}> *</span></label>
            <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
            {formErrors.email && <div style={{ color: 'red' }}>{formErrors.email}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="streetAddress" className="form-label">Address:</label>
            <input type="text" className="form-control" id="streetAddress" name="streetAddress" value={formData.streetAddress} onChange={handleChange} required /> <br />
          </div>
          <div>
            <button type="button" className='btn btn-success m-3'>Cancel Order</button>
            <button type="submit" className='btn btn-success m-3' onClick={updateUserDatas}>Place Order</button>
          </div>
        </form>
      </div>
   
  <div className="col-md-5">
      <div className="row">
          <div className="col-md-12">
              <h2>Order Details</h2>
              <table className="table">
                  <thead>
                      <tr>
                          <th>Product</th>
                          <th>Subtotal</th>
                          <th>Discount</th>
                          <th>Discounted Subtotal</th>
                      </tr>
                  </thead>
                  <tbody>
                      {products.map((product, index) => (
                          <tr key={index}>
                              <td>{product[1].pname}</td>
                              <td>({product[1].price}*{product[0].quantity}) <br></br> = ${product[1].price * product[0].quantity}</td>
                              <td style={{color:"red"}}>{product[1].discount}%</td>
                              <td>${(product[1].price - (product[1].discount * product[1].price / 100)) * product[0].quantity}</td>
                              {/* <input type="hidden" value={product[0].oid} onChange={(e) => setOid(e.target.value)} /> */}
                          </tr>
                      ))}
                  </tbody>
                  <tfoot>
                      <tr>
                          <td colSpan="3" style={{color:"red"}}>Delivery Charge:</td>
                          <td style={{color:"red"}}>${deliveryCharge}</td>
                      </tr>
                      <tr>
                          <td colSpan="3" style={{color:"green"}}>Total Price:</td>
                          <td style={{color:"green"}}>${totalPrice()}</td>
                      </tr>
                      {/* <tr>
                          <td colSpan="2">
                              <div className="row justify-content-center">
                                  <div className="col-auto">
                                      <button onClick={handleCheckout} className="btn btn-primary">Proceed to Checkout</button>
                                  </div>
                              </div>
                          </td>
                      </tr> */}
                  </tfoot>
              </table>
          </div>
      </div>
  </div>

            </div>
        </div>
    )
}

export default UserDetails