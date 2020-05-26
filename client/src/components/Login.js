import React,
{
  useState,
} from 'react';
import './Login.css';
import axios from 'axios';

const Login = (props) => {

  const [token, setToken] = useState('');
  const [invalid, invalidCredentials] = useState(false);
  const [status, setStatus] = useState(0);
  const [user, setUserName] = useState('');

  const handleSubmit = (e) => {

    e.preventDefault();

    const email = e.target.elements.useremail.value;
    const password = e.target.elements.password.value;

    axios.post('/api/user/login', {
      email: email,
      password: password
    })
      .then((response) => {
        if (response.status === 200) {
          setStatus(response.status);
          setToken(response.headers["auth-token"]);
          setUserName(response.data);
          props.handleLogin(response.data);
          console.log(token, response.data);
        }
      })
      .catch((err) => {
        invalidCredentials(true);
        console.log(err);
      });

    if (invalid === true) {
      e.target.elements.useremail.focus();
    }
    e.target.elements.useremail.value = null;
    e.target.elements.password.value = null;
  }

  return (
    <form
      className="loginForm"
      onSubmit={handleSubmit}>
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
      <div className="errorMsg">
        {invalid ? 'try again' : null}
      </div>
      <div className="loginBtns">
        <button
          className="loginBtn">Login</button>
      </div>
    </form>
  );
};

export default Login;
