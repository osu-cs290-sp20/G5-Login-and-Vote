import React,
{
  useState,
  useEffect,
} from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import VotingPage from './components/VotingPage';
//import Login from './components/Login';
//import Register from './components/Register';
import Home from './components/Home';
import './App.css';

const App = () => {
  const [authStatus, setAuthStatus] = useState(0);
  const [user, setUser] = useState('');

  useEffect(() => {
    console.log(`auth stat: ${authStatus}`);
  }, [authStatus]);

  const handleAuth = (data) => {
    setAuthStatus(1);
    setUser(data);
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
              auth={authStatus} />
          )}>
        </Route>
        {user}
      </Switch>
    </div>
  );
}

export default App;
