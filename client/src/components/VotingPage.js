import './VotingPage.css';
import React,
{
} from 'react';
import {
  BrowserRouter,
  Link,
  Switch,
  Route,
} from 'react-router-dom';
import About from './About';
import CreateMeasure from './CreateMeasure';
import ViewMeasures from './ViewMeasures';

// 4)
// Aside from the issue of the user being logged out 
// after initial registration, a logged in user should
// be greeted with the options to create and vote on 
// measure proposals. Currently, an existing user who
// logs in, stays logged in when adding and voting on
// measures. 
// These functionalities are present in the 
// CreateMeasures and ViewMeasures components, 
// respectively. 
//
// Proceed to steps 5a and 5b, found in the above
// components.

const VotingPage = (props) => {

  console.log(`all props: ${props}`);

  return (
    <BrowserRouter>
      <div className="wrapper">
        <div className="header">
          <h1 className="headerTitle">PLACEHOLDER TITLE</h1>
        </div>
        <div className="nav">
          <div className="navItem userWelcome">
            <img src="https://www.nicepng.com/png/full/136-1366211_group-of-10-guys-login-user-icon-png.png" alt="userIcon" className="userIcon"></img>
            <p className="userName">Welcome, {props.user}</p>
          </div>
          <Link to="/voting/about" className="navItem linkButton">About</Link>
          <Link to="/voting/create-measure" className="navItem linkButton">Propose a Measure</Link>
          <Link to="/voting/view-measures" className="navItem linkButton">View Proposals</Link>
          <Link to="/" className="navItem linkButton linkLogout">Logout</Link>
        </div>
        <div className="votingSection">
          <div className="createMeasure">
            <Switch>
              <Route path="/voting/about">
                <About />
              </Route>
              <Route path="/voting/create-measure">
                <CreateMeasure
                  {...props}
                  token={props.token}
                  userId={props.id}
                  user={props.user} />
              </Route>
              <Route path="/voting/view-measures">
                <ViewMeasures
                  {...props}
                  token={props.token}
                  userId={props.id}
                />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter >
  );
}

export default VotingPage;