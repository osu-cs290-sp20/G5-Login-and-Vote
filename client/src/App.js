import React,
{
  useState,
  useEffect,
} from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import VotingPage from './components/VotingPage';
import AuthPage from './components/AuthPage';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import './App.css';

const App = () => {
  const [authStatus, setAuthStatus] = useState('');
  const [user, setUser] = useState('');

  useEffect(() => {
    setAuthStatus('NOT LOGGED IN')
  }, []);

  const handleLogin = (data) => {
    setAuthStatus('logged in');
    setUser(data);
  }

  return (
    <div className="backDrop">
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Home {...props} handleLogin={handleLogin} status={authStatus} statusFor={user} />
            )} />
          <Route
            exact
            path="/login"
            render={props => (
              <Login {...props} handleLogin={handleLogin} status={authStatus} statusFor={user} />
            )}>
          </Route>
          <Route
            exact
            path="/register"
            render={props => (
              <Register {...props} status={authStatus} statusFor={user} />
            )}>
          </Route>
          <Route
            exact
            path="/voting"
            render={props => (
              <VotingPage {...props} status={authStatus} statusFor={user} />
            )}>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
