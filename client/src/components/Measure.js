import './Measure.css';
import React from 'react';
import axios from 'axios';

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
const Measure = (props) => {

  const measureId = props.data._id;

  const castVote = (e) => {
    e.preventDefault();
    console.log(e.target.elements.choice.value);

    axios.post('/api/vote/cast-vote', ({
      decision: e.target.elements.choice.value,
      userId: props.userId,
      measureId: measureId
    })
    ).then((response) => {
      props.history.push('/voting');
      console.log(response);
    });
  }

  // measures expire in 24 hours. That functionality
  // exists within the Measure model.
  return (
    <div className='measure'>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
      <form onSubmit={castVote}>
        <label htmlFor="yes">Yay</label>
        <input name="choice" type="radio" value="yes" id="yes" />
        <label htmlFor="no">Nay</label>
        <input name="choice" type="radio" value="no" id="no" />
        <button>Cast Vote</button>
      </form>
      {measureId}
    </div>
  );
}

export default Measure;