import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Navigation from './Navigation';
import VotingPage from './VotingPage';

const Home = () => {
  return (
    <BrowserRouter>
      <div>
        <Auth />
        <Navigation />

        <Switch>
          <Route path="/public">
            <PublicPage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <PrivateRoute path="/voting">
            <VotingPage />
          </PrivateRoute>
        </Switch>

      </div>
    </BrowserRouter>
  );
}

const fakeAuth = {
  isAuthenticated: true,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 5000); // async imitation
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

// enable this in the login and register components
const Auth = () => {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome to the voting page
      <button onClick={() => {
        fakeAuth.signout(() => history.push('/'))
      }}>
        Sign out
      </button>
    </p>
  ) : (
      <p>Not at the voting page/ not logged in</p>
    );
}

const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}

const PublicPage = () => {
  return <h1>Public</h1>;
}

const ProtectedPage = () => {
  return <h1>Protec</h1>;
}

const LoginPage = () => {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>must be logged in to vote at {from.pathname}</p>
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Home;