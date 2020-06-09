import './ViewMeasures.css';
import React,
{
  useEffect,
  useState
} from 'react';
import Measure from './Measure';
// dont need this
//import FinishedMeasure from './FinishedMeasure'
import axios from 'axios';

// 5b
// When this component is rendered, an api call
// is made the populates the DOM with the existing
// measures that have yet to expire (their end of life).
// For now, the users can vote only once per measure.
// The relevant data from /server/models/Measure.js 
// should be displayed in each of the rendered measures.
//
// Go to step 6, found in client/../../Measure.js

/* for (let i = 0; i < currentMeasures.length; ++i) {
  if (response.data[0].voters.includes(userId)) {
    processedMeasures.push(response.data);
  }
  else {
    currentMeasures.push(response.data);
  }
} */

const ViewMeasures = (props) => {
  //let userId=props.userId

  const [measures, setMeasures] = useState([]);
  /* const [finishedMeasures, completedMeasures] = useState([]); */
  /*Create controller function and pass into measure.js
  Would allow splitting measures into groups. Votes cast/not cast
  Could then render the two groups*/
  useEffect(() => {
    axios.get('/api/vote/view-measures')
      .then((response) => {
        console.log("Printing out information: " + response.data[0].name);
        let currentMeasures = [];
        //let processedMeasures = [];
        for (let i = 0; i < response.data.length; ++i) {
          currentMeasures.push(response.data);
        }
        setMeasures(currentMeasures);

        /* for (let i = 0; i < currentMeasures.length; ++i) {
          if (measures.voters.includes(userId)) {
            processedMeasures.push(measures);
            setMeasures.pop(measures);
          }
        } */

        /* completedMeasures(processedMeasures); */
        //might create function to pass into each measure,
        // to get choice on any votes that have yet to be voted on
      });
  }, []);

  return (
    <div className="measures">
      {measures.map((measure, i) => {
        /*
        if (measure[i].voters.includes(props.userId)) {
          return <FinishedMeasure
            {...props}
            key={i}
            userId={props.userId}
            data={measure[i]}
            title={measure[i].name}
            desc={measure[i].description}
            yeses={measure[i].votes.yes}
            nos={measure[i].votes.no}
          />
        }
        else {
          */
        return <Measure
          {...props}
          key={i}
          userId={props.userId}
          data={measure[i]}
          title={measure[i].name}
          desc={measure[i].description}
          yeses={measure[i].votes.yes}
          nos={measure[i].votes.no}
        />
      }
        //}
      )}
    </div>
  )
}

export default ViewMeasures;