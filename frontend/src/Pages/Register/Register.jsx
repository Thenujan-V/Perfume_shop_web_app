import React from 'react'
import './Register.css';

const Login = () => {
  return (
	<div id='register'>
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-8 col-sm-12 col-11" id="register">
                    <div class="top">
                        <h2>TINY Electronics</h2>
                        <a href="login.php" class="text-decoration-none">already have an account</a>
                    </div>
                    <h1>Register</h1>
                    <form action="register.php" method="post">
                        <div class="form-group">
                            <input type="text" id="fullname" data-name="Full Name" name="FullName" placeholder="Full Name" class="form-control" />
                            <p></p>
                        </div>
                        <div class="form-group">
                            <input type="text" id="mail" name="mail" placeholder="E-mail" class="form-control " />
                            <p></p>
                        </div>
                        <div class="form-group">
                            <input type="text" id="pno" data-name="Phone Number" name="PhoneNumber" placeholder="Phone Number" class="form-control" />
                            <p></p>
                        </div>
                        <div class="form-group">
                            <input type="text" id="adrs" data-name="address" name="address" placeholder="Address" class="form-control" />
                            <p></p>
                        </div>
                        <div class="form-group">
                            <input type="password" id="password" data-name="Password" name="Password" placeholder="Password" class="form-control" />
                            <p></p>
                        </div>
                        <div class="form-group">
                            <input type="password" id="confirmpassword" name="Confirmation password" placeholder="Confirm Password" class="form-control" />
                            <p></p>
                        </div>
                        <input type="submit" id="btn" class="form-control" name="submit" />
                    </form>
                </div>
            </div>
        </div>
    </div>
	
  )
}

export default Login