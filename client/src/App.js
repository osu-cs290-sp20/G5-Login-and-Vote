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
import Home from './components/Home';
import './App.css';

const App = () => {

  const [authStatus, setAuthStatus] = useState(0);
  const [token, setToken] = useState('');
  const [user, setUser] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
    console.log(`auth stat: ${authStatus}`);
  }, [authStatus]);

  // from Login as data, header, status
  const handleAuth = (id, user, token, status) => {
    console.log(`
    App {\n
        AppId: ${id}
        AppUser: ${user}\n  
        AppToken: ${token}\n  
        AppStatus: ${status}\n
    }`);
    setId(id);
    setUser(user);
    setAuthStatus(status);
    setToken(token);
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
              id={id}
              user={user}
              token={token}
              auth={authStatus} />
          )}>
        </Route>
        {user}
      </Switch>
    </div>
  );
}

export default App;
