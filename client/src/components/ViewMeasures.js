import './ViewMeasures.css';
import React,
{
  useEffect,
  useState
} from 'react';
import Measure from './Measure';
import axios from 'axios';

// 5b)
// When this component is rendered, an api call
// is made the populates the DOM with the existing
// measures that have yet to expire (their end of life).
// For now, the users can vote only once per measure.
// The relevant data from /server/models/Measure.js 
// should be displayed in each of the rendered measures.
// Examples have been given on how to do this in the 
// current code.
//
// Go to step 6, found in client/../../Measure.js

const ViewMeasures = (props) => {

  const [measures, setMeasures] = useState([]);

  useEffect(() => {
    axios.get('/api/vote/view-measures')
      .then((response) => {
        console.log(response.data[0].name);
        let currentMeasures = [];
        for (let i = 0; i < response.data.length; ++i) {
          currentMeasures.push(response.data);
        }
        setMeasures(currentMeasures);
      });
  }, []);

  return (
    <div className="measures">
      {measures.map((measure, i) => {
        return <Measure
          {...props}
          key={i}
          userId={props.userId}
          data={measure[i]}
          title={measure[i].name}
          desc={measure[i].description} />
      }
      )}
    </div>
  )
}

export default ViewMeasures;