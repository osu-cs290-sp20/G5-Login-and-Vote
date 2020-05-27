import React,
{
  useState,
} from 'react';
import './Home.css';
import Register from './Register';
import Login from './Login';

const Home = (props) => {

  const [login, selectLogin] = useState(true);

  const handleLogin = (data) => {
    // update App comp
    props.handleAuth(data);
    props.history.push('/voting');
  }

  const showOptions = (e) => {
    console.log(e.target.textContent)
    selectLogin(!login);
    let q = document.querySelector('.question');
    if (e.target.textContent === 'Login') {
      e.target.textContent = 'Register';
      q.textContent = 'Need an account?'
    } else {
      e.target.textContent = 'Login';
      q.textContent = 'Have an account?'
    }
  }

  return (
    <div className="loginBox">
      <p>status: {props.auth}</p>
      {login ?
        <Register handleLogin={handleLogin} />
        : <Login handleLogin={handleLogin} />}
      <div className="helpMsgBtn">
        <p className="question">Have an account?</p>
        <button
          className='homeBtn'
          onClick={showOptions}>Login</button>
      </div>
    </div>
  );
}

export default Home;