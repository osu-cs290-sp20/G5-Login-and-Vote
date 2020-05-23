import React,
{
  useState,
} from 'react';
//import './Login.css';

import axios from 'axios';

// ternary / router / add state

const Register = () => {

  const [invalid, invalidCredentials] = useState(false);

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
    </form>
  );
}

export default Register;