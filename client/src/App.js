import React,
{
  useState,
  useEffect,
} from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import axios from 'axios';
import VotingPage from './components/VotingPage';
import Home from './components/Home';
import './App.css';

const App = () => {
  const [authStatus, setAuthStatus] = useState(0);
  const [user, setUser] = useState('');

  useEffect(() => {
    console.log(`auth stat: ${authStatus}`);
    //checkStatus(user);
  }, [authStatus]);

  const handleAuth = (data) => {
    setAuthStatus(1);
    setUser(data);
    checkStatus(data)
  }

  const checkStatus = (data) => {
    console.log(`data: ${data}, user: ${user}`);
    axios.get('/api/user/checklogin', {
      params: {
        name: data
      }
    })
      .then((response) => {
        if (response.status === 200 && authStatus === 0) {
          setAuthStatus(1);
          setUser(response.data.name);
        } else if (response.status === 404 && authStatus === 1) {
          setAuthStatus(0);
          setUser('no user');
        }
        console.log(response)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="backDrop">
      <Switch>
        <Route
          exact
          path="/"
          render={props => (
            <Home
              {...props}
              handleAuth={handleAuth}
              auth={authStatus} />
          )} />
        <Route
          exact
          path="/voting"
          render={props => (
            <VotingPage
              {...props}
              user={user}
              auth={authStatus} />
          )}>
        </Route>
        {user}
      </Switch>
    </div>
  );
}

export default App;
