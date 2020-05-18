import React from 'react';
import './Login.css';

const Login = () => {


  const handleSubmit = (e) => {
    // send value to /api/user/register
    // api/user/login
  }

  return (
    <form class="loginForm">
      <div id="formBasicEmail" class="form-group">
	<label>Name</label>
        <input type="text" class="form-control" placeholder="Enter name" />
   
        <label>Email</label>
        <input type="email" class="form-control" placeholder="Enter email" />
        <text class ="text-muted">
          We'll never share your email with anyone.
        </text>
      </div>
      <div id="formBasicPassword" class="form-group">
        <label>Password</label>
        <input type="password" class="form-control" placeholder="Password" />
      </div>
      <div class="loginBtns">
        <button class="loginBtn" type="submit">
          Login
        </button>
        <button class="loginBtn" type="submit">
          Register
        </button>
      </div>
    </form>
  );
};

export default Login;
