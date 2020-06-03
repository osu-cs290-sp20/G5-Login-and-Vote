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

// working on displaying the created measures
const VotingPage = (props) => {

  console.log(`all props: ${props}`);

  const showForm = () => {
    //document.querySelector('.createMeasure').style.display = 'none';
  }

  // needs to update an array of active measures
  // and those that have expired. expired measures
  // will appear in their own section.
  ////
  // make a request to get all existing measures.
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
              onClick={showForm}
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