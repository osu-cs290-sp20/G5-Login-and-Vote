import './FinishedMeasure.css';
import React from 'react';
// 6) 
// Basic yes, no options along with the description
// of the measure being voted on exists here.
// What has not been done is, after the vote has been
// cast, navigate the user back to the voting page
// so the user has an idea of what is happening, 
// preventing any sort of confusion.
//
// Stil to do for documentation:
// - update the server documentation.
// It will be helpful for now to pay attention to 
// the api calls and navigate through the code 
// using the function names that are used for 
// authentication in server/(verifyToken, router/auth, routes/vote)
const FinishedMeasure = (props) => {
  // measures expire in 24 hours. That functionality
  // exists within the Measure model.
  return (
    <div className="finishedMeasure">
      <div className="sideTop">
        <div className="sideLeft">
          <h3 className="measureText">{props.title}</h3>
          <p className="measureText">{props.desc}</p>
        </div>
      </div>
      <div className="midBottom">
        <p className="result">Votes in favor: {props.yeses}</p>
        <p className="result">Votes against: {props.nos}</p>
      </div>
      <div className="FinishedBottom">
        <p>Time left:</p>
      </div>
    </div>
  );
}

export default FinishedMeasure;