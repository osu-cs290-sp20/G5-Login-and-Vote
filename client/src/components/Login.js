import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Login.css';

const Login = () => {


  const handleSubmit = (e) => {
    // send value to /api/user/register
    // api/user/login
  }

  return (
<<<<<<< HEAD
    <Form onSubmit={handleSubmit} className="loginForm">
=======
    
    <form class="loginForm">
      <div id="formBasicEmail" class="form-group">
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
    
    /*
    <Form className="loginForm">
>>>>>>> 2924799effe03cb145a1f70e29d33a96d275bb0f
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control id="input" type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <div className="loginBtns">
        <Button
          className="loginBtn" variant="primary" type="submit">
          Login
        </Button>
        <Button className="loginBtn" variant="primary" type="submit">
          Register
        </Button>
      </div>
    </Form>
    */
  );
};

export default Login;