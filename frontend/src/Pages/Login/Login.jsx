import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate()

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
	try{
		const response = await axios.post("http://localhost:8080/api/v1/auth/signin",{email:email,password:password});

		const token = response.data.token;

    localStorage.setItem('token', token);
    
    console.log("token  :"+token)
		navigate("/")
	}
	catch(err){
    alert("Password does not match or user not found")
      navigate("/login")

		console.log("error   :"+ err);
	}
  };


  return (
    <div id="login">
      <div className="container">
  <div className="d-flex justify-content-center align-items-center vh-100">
    <div className="card">
      <div className="card-header">
        <h3>Login</h3>
        <div className="d-flex justify-content-end social_icon">
          <span><i className="fab fa-facebook-square"></i></span>
          <span><i className="fab fa-google-plus-square"></i></span>
          <span><i className="fab fa-twitter-square"></i></span>
        </div>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="input-group form-group">
            <div className="input-group-prepend">
              <span className="input-group-text"><i className="fas fa-user"></i></span>
            </div>
            <input type="text" className="form-control" placeholder="Email" value={email} onChange={handleEmailChange} />
          </div>
          <div className="input-group form-group mt-3">
            <div className="input-group-prepend">
              <span className="input-group-text"><i className="fas fa-key"></i></span>
            </div>
            <input type="password" className="form-control" placeholder="Password" value={password} onChange={handlePasswordChange} />
          </div>
          <div className="form-check mt-3">
            <input className="form-check-input" type="checkbox" id="rememberMe" />
            <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
          </div>
          <div className="form-group mt-3">
            <button type="submit" className="btn btn-primary float-end">Login</button>
          </div>
        </form>
      </div>
      <div className="card-footer">
        <div className="d-flex justify-content-center">
          <span className="me-2">Don't have an account?</span>
          <Link to={'/register'}>Sign Up</Link>
        </div>
        <div className="d-flex justify-content-center">
          <a href="#">Forgot password?</a>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Login;
