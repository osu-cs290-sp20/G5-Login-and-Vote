import React,
{
  useEffect,
  useState,
} from 'react';
//import './Login.css';
import axios from 'axios';

// ternary / router / add state

const AuthPage = (props) => {
  const [s, st] = useState('');
  const [u, su] = useState('');

  const [token, setToken] = useState('');
  const [invalid, invalidCredentials] = useState(false);
  const [status, setStatus] = useState(0);
  const [user, setUserName] = useState('');

  // might not need to do these few steps
  useEffect(() => {
    st(props.status);
    su(props.statusFor);
  }, [props.status, props.statusFor]);

  const registerUser = () => {

  }

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
    <div>
      <div>
        <h1>Authentication page</h1>
        <h3>Status: {s}</h3>
        <h4>User: {u}</h4>
      </div>

      <h1>Voter Login</h1>
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
      </form>
      <div>
        <h5>Create your Account</h5>
        <button onClick={registerUser}>create account</button>
      </div>

    </div>
  );
};

export default AuthPage;