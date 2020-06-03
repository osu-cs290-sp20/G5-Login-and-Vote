import './Measure.css';
import React,
{
  useState
} from 'react';
import axios from 'axios';

const Measure = (props) => {

  //const [measureId, setMeasureId] = useState(props.data._id);
  const measureId = props.data._id;

  const castVote = (e) => {
    e.preventDefault();
    console.log(e.target.elements.choice.value);
    //console.log(e.target.elements[2].style);

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

  // measures should expire in 24 hours
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