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
      </div>
    </div>
  );
}

export default VotingPage;