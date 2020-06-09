import './Measure.css';
import React, {
  useEffect,
  useState
} from 'react';
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

  const currDate = new Date().getTime();
  const endDate = new Date(props.data.endDate).getTime();
  const [counter, setCounter] = useState(currDate);
  const [votingOver, endVoting] = useState(false);
  const userHasVoted = props.data.voters.includes(props.userId);


  useEffect(() => {
    let time = setInterval(() => setCounter(currDate + 1000), 1000);
    if (currDate >= endDate) {
      endVoting(true);
    }
    console.log(counter)
    // prevents memory leak
    // https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
    return () => clearTimeout(time);
  }, [counter]);

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
    <div className="measure">
      <div className="sideTop">
        <div className="sideLeft">
          <h3 className="measureText">{props.title}</h3>
          <p className="measureText">{props.desc}</p>
        </div>
        <div className="sideRight">
          <form onSubmit={castVote} className="measureButtons">
            {
              votingOver ? 'Voting is over' :
                <form>
                  <input name="choice" type="radio" value="yes" id="yes" />
                  <label htmlFor="yes" className="measureText">Yay</label><br></br>
                  <input name="choice" type="radio" value="no" id="no" />
                  <label htmlFor="no" className="measureText">Nay</label><br></br>
                  <button className="voteButton">Cast Vote</button>
                </form>
            }
          </form>
        </div>
      </div>
      <div className="sideBottom">
        {votingOver ? 'voting is over' :
          userHasVoted ?
            <div className="midBottom">
              <p>Epoch Time left: {(endDate - counter) / 864} seconds</p>
              <p className="result">Votes in favor: {props.yeses}</p>
              <p className="result">Votes against: {props.nos}</p>
            </div> :
            <div className="midBottom">
              <p>Epoch Time left: {(endDate - counter) / 864} seconds</p>
              <p className="result">Hasn't been been voted on. Cast your vote.</p>
            </div>}
      </div>
    </div>
  );
}

export default Measure;