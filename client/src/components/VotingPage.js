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

const VotingPage = (props) => {

  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/voting/create-measure">Propose a Measure</Link>
          </li>
          <li>
            <Link to="/voting/view-measures">View Proposals</Link>
          </li>
        </ul>
        <div>
          <h1>Vote page</h1>
          <p>Status: {props.auth}</p>
          <p>User: {props.user}</p>
          <h5>to do items</h5>
          <ul>
            <li>display user names - found in the props.user in this component</li>
            <li>add the list of measures as a side item</li>
            <li>consider continuing the use of react router</li>
            <li>obscure the response data... aka, organize and display only what is needed.</li>
            <li>create the measures to be voted on</li>
          </ul>
        </div>
        <Switch>
          <Route path="/voting/create-measure">
            <CreateMeasure />
          </Route>
          <Route path="/voting/view-measures">
            <ViewMeasures />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default VotingPage;