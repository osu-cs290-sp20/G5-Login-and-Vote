import React, {
  useState,
} from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation
} from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {

  const [test, setTest] = useState('');


  return (
    <div className="backDrop">

      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
