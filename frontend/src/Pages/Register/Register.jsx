import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const navigate=useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
        try {
            const response = await axios.post("http://localhost:8080/api/v1/auth/signup", formData);
            console.log('Form submitted successfully:', response.data);

            navigate("/login")

          } catch (error) {
            console.error('Error while submitting form:', error);
          }
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    let errors = {};
    if (!data.firstName.trim()) {
      errors.firstName = 'First Name is required';
    }
    if (!data.lastName.trim()) {
      errors.lastName = 'Last Name is required';
    }
    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email is invalid';
    }
    if (!data.phoneNumber.trim()) {
      errors.phoneNumber = 'Phone Number is required';
    }
    if (!data.address.trim()) {
      errors.address = 'Address is required';
    }
    if (data.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }
    if (data.password !== data.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    return errors;
  };

  return (
    <div id='register'>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-8 col-sm-12 col-11" id="register">
            <div className="top">
              <h2>TINY Electronics</h2>
              <a href="login.php" className="text-decoration-none">already have an account</a>
            </div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className="form-control" />
                {errors.firstName && <p className="error">{errors.firstName}</p>}
              </div>
              <div className="form-group">
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className="form-control" />
                {errors.lastName && <p className="error">{errors.lastName}</p>}
              </div>
              <div className="form-group">
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="E-mail" className="form-control" />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
              <div className="form-group">
                <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" className="form-control" />
                {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
              </div>
              <div className="form-group">
                <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" className="form-control" />
                {errors.address && <p className="error">{errors.address}</p>}
              </div>
              <div className="form-group">
                <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" className="form-control" />
                {errors.password && <p className="error">{errors.password}</p>}
              </div>
              <div className="form-group">
                <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" className="form-control" />
                {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
              </div>
              <input type="submit" className="form-control btn btn-primary" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
