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

const CreateMeasure = () => {

  const submitProposal = (e) => {
    e.preventDefault();
    console.log(e.target.elements.name.value)
    axios.post('/api/vote', {
      name: e.target.elements.name.value,
      description: e.target.elements.description.value
    })
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <form
      onSubmit={submitProposal}
      className="createMeasure">
      <label htmlFor="name"></label>
      <input name="name" type="text" />
      <textarea name="description" placeholder="An overview of the measure you'd like to propose"></textarea>
      <button>Submit</button>
    </form>
  );
}

export default CreateMeasure;