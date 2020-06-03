import './ViewMeasures.css';
import React,
{
  useEffect,
  useState
} from 'react';
import Measure from './Measure';
import axios from 'axios';


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