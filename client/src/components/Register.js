import React,
{
  useState,
  useEffect
} from 'react';
import { Link } from 'react-router-dom';
//import './Login.css';

import axios from 'axios';

// ternary / router / add state

const Register = (props) => {
  const [s, st] = useState('');
  const [u, su] = useState('');


  const [invalid, invalidCredentials] = useState(false);

  useEffect(() => {
    st(props.status);
    su(props.statusFor);
  }, [props.status, props.statusFor]);


  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.elements.username.value;
    const email = e.target.elements.useremail.value;
    const password = e.target.elements.password.value;
    const vpassword = e.target.elements.verifypassword.value;

    console.log(password, vpassword);

    if (password !== vpassword) {
      e.target.elements.username.value = name;
      e.target.elements.useremail.value = email;
      e.target.elements.password.value = null;
      e.target.elements.verifypassword.value = null;
      e.target.elements.password.focus();
      invalidCredentials(true);
    }

    if (password === vpassword) {
      axios.post('/api/user/register', {
        name: name,
        email: email,
        password: password
      })
        .then((response) => {
          invalidCredentials(false);
          console.log("res: " + response);
          props.loginSuccess(response.data);
        })
        .catch((err) => {
          console.log("err: " + err);
        });
      e.target.elements.username.value = null;
      e.target.elements.useremail.value = null;
      e.target.elements.password.value = null;
      e.target.elements.verifypassword.value = null;
    }
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
          type="text" />
      </div>
      <div>
        <label htmlFor="email"></label>
        <input
          placeholder="Your email" //required
          name="useremail"
          type="email" />
      </div>
      <div>
        <label htmlFor="password"></label>
        <input
          placeholder="Password" //required
          name="password"
          type="password" />
      </div>
      <div>
        <label htmlFor="verifypassword"></label>
        <input
          placeholder="Verify Password" //required
          name="verifypassword"
          type="password" />
      </div>
      <div className="loginBtns">
        <button className="loginBtn">Register</button>
      </div>
      {invalid ? 'try again' : null}
      <div>
        <h1>Register page</h1>
        <h3>Status: {s}</h3>
        <h4>User: {u}</h4>
      </div>
      <Link to="/login">Have account? Login</Link>
      <div>--</div>
      <Link to="/">Go Home</Link>
    </form>
  );
}

export default Register;