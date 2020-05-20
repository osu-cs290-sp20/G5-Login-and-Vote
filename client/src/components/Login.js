import React,
{
  useState,
} from 'react';
import './Login.css';

import axios from 'axios';

const Login = () => {

  const [log, retUser] = useState(false);
  const [reg, newUser] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.username.value;
    const email = e.target.elements.useremail.value;
    const password = e.target.elements.password.value;
    console.log(name, email, password);
    if (log) {
      console.log('login') 
      axios.post('/api/user/login', {
        name: name,
        email: email,
        password: password
      })
      .then((response) => {
        console.log(response); 
      })
      .catch((err) => {
        console.log(err); 
      });  
    }
    if (reg) {
      console.log('reg') 
      axios.post('/api/user/register', {
        name: name,
        email: email,
        password: password
      })
      .then((response) => {
        console.log(response); 
      })
      .catch((err) => {
        console.log(err); 
      });
    }
    retUser(false);
    newUser(false);
    e.target.elements.username.value = null;
    e.target.elements.useremail.value = null;
    e.target.elements.password.value = null;
  }

  return (
    <form 
      className="loginForm"
      onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name"></label> 
        <input 
          placeholder="Your name" //required
          name="username" 
          type="text"/>
      </div>
      <div>
        <label htmlFor="email"></label>
        <input 
          placeholder="Your email" //required
          name="useremail"
          type="email"/>
      </div>
      <div>
        <label htmlFor="password"></label>
        <input 
          placeholder="Password" //required
          name="password"
          type="password"/>
      </div> 
      <div className="loginBtns">
        <button 
          onClick={() => retUser(true)} 
          className="loginBtn">Login</button>
        <button 
          onClick={() => newUser(true)} 
          className="loginBtn">Register</button>
      </div>
    </form>

  );
};

export default Login;