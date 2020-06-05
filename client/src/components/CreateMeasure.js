import React from 'react';
import axios from 'axios';
import './CreateMeasure.css';

// 5a)
// First, to locate where the data is flowing,
// look at the api call.
// The token, created and issued after login,
// is passed to the protected route, /api/vote. 
// This will be the solution for the registration
// path, just haven't added that code.
// Once a measure is created, it is available
// in the ViewMeasures component.
// 
// Go to step 6, found in client/../../Measure.js

const CreateMeasure = (props) => {

  const submitProposal = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const desc = e.target.elements.description.value;

    console.log(`id in create: ${props.userId}`);

    const tokenReq = axios.create({
      baseURL: 'http://localhost:3000/',
      headers: {
        'auth-token': props.token,
      },
      method: 'post'
    });
    tokenReq.post('/api/vote/create-measure', {
      name: name,
      userId: props.id,
      desc: desc,
      votes: {
        yes: 0,
        no: 0
      },
    })
      .then((response) => {
        console.log(`res in createmeasure: ${response.data.name}`);
        props.createMeasure(response.data.name);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <h1>Create a New Measure</h1>
      <form
        onSubmit={submitProposal}
        className="createMeasureForm">
        <div>
          <label htmlFor="name"></label>
          <input name="name" type="text" placeholder="Name of Measure" />
          <textarea name="description" placeholder="An overview of your proposal "></textarea>
          <button>Submit Measure</button>
        </div>
      </form>
    </>
  );
}

export default CreateMeasure;