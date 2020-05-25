import React,
{
  useState,
  useEffect
} from 'react';
import { Link } from 'react-router-dom';
//import './Login.css';
import axios from 'axios';
import Vote from './VotingPage';

// ternary / router / add state

const Login = (props) => {
  const [s, st] = useState('');
  const [u, su] = useState('');


  const [token, setToken] = useState('');
  const [invalid, invalidCredentials] = useState(false);
  const [status, setStatus] = useState(0);
  const [user, setUserName] = useState('');
  useEffect(() => {
    st(props.status);
    su(props.statusFor);
  }, [props.status, props.statusFor]);


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
      <div className="loginBtns">
        <button
          className="loginBtn">Login</button>
      </div>
      {invalid ? 'try again' : null}
      {status === 200 ? <Vote /> : null}
      <div>
        <h1>Login page</h1>
        <h3>Status: {s}</h3>
        <h4>User: {u}</h4>
      </div>
      <Link to="/register">Need an account? Register</Link>
      <div>--</div>
      <Link to="/">go Home</Link>
    </form>
  );
};

export default Login;
