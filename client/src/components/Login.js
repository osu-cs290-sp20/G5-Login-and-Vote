import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Login.css';

const Login = () => {
  return (
    <Form className="loginForm">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <div className="loginBtns">
        <Button className="loginBtn" variant="primary" type="submit">
          Login
      </Button>
        <Button className="loginBtn" variant="primary" type="submit">
          Register
      </Button>
      </div>
    </Form>
  );
};

export default Login;