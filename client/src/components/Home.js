import React,
{
  useState,
  useEffect
} from 'react';
//import Navigation from './Navigation';
import Register from './Register';

const Home = (props) => {

  const [s, st] = useState('');
  const [u, su] = useState('');

  useEffect(() => {
    st(props.status);
    su(props.statusFor);
  }, [props.status, props.statusFor]);

  const loginSuccess = (data) => {
    // update app component 
    props.handleLogin(data);
    props.history.push("/voting");
  }

  return (
    <div>
      <h1>Home page</h1>
      <h3>Status: {s}</h3>
      <h4>User: {u}</h4>
      <Register loginSuccess={loginSuccess} />
    </div>
  );
}

export default Home;