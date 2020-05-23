import React, {
  useState,
} from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import Navigation from './components/Navigation';
import Login from './components/Login';
import Register from './components/Register';

function App() {

  return (
    <div className="backDrop">
      <BrowserRouter>
        <Navigation />
        <Switch>
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
