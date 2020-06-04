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
import CreateMeasure from './CreateMeasure';
import ViewMeasures from './ViewMeasures';
import axios from 'axios';

// 4)
// Aside from the issue of the user being logged out 
// after initial registration, a logged in user should
// be greeted with the options to create and vote on 
// measure proposals. 
// These functionalities are present in the 
// CreateMeasures and ViewMeasures components, 
// respectively. 
//
// Proceed to steps 5a and 5b, found in the above
// components.

const VotingPage = (props) => {

  console.log(`all props: ${props}`);

  const createMeasure = (measure) => {

    console.log(`measure created: ${measure}`);
    console.log(`id: ${props.id}`);
    axios.get('/api/vote/create-measure')
      .then((response) => {
      });
  }

  return (
    <BrowserRouter>
      <div>
        <p>Welcome, {props.user}</p>
        <ul className="nav">
          <li>
            <Link
              to="/voting/create-measure">Propose a Measure</Link>
          </li>
          <li>
            <Link to="/voting/view-measures">View Proposals</Link>
          </li>
        </ul>

        <div className="votingSection">

          <div className="createMeasure">
            <Switch>
              <Route path="/voting/create-measure">
                <CreateMeasure
                  {...props}
                  createMeasure={createMeasure}
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