import React from 'react';
import axios from 'axios';
import './CreateMeasure.css';

/*
const measureSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 6
  },
  description: {
    type: String,
    required: true,
    minlength: 997
  },
  creator: {
    type: String,
    maxlength: 255,
    minlength: 6,
    required: true
  },
  votes: {
    yes: Number,
    no: Number
  },
  voters: {
    type: Array,
    default: undefined
  },
  startDate: {
    type: Date,
    default: Date.now()
  },
  endDate: {
    type: Date,
    default: (Date.now() + (3600000 * 24 * 5))
  }
});
*/

// needs styling... ill do that later

// component needs the jwt

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
      <h1>Create a measure</h1>
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