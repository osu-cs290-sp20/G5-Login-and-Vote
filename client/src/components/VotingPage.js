import React,
{
} from 'react';

const VotingPage = (props) => {

  return (
    <div>
      <div>
        <h1>Vote page</h1>
        <p>Status: {props.auth}</p>
        <p>User: {props.user}</p>
        <h5>to do items</h5>
        <ul>
          <li>display user names - found in the props.user in this component</li>
          <li>add the list of measures as a sisde item</li>
          <li>consider continuing the use of react router</li>
        </ul>
      </div>
    </div>
  );
}

export default VotingPage;