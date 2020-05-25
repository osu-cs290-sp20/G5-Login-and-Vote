import React,
{
  useEffect,
  useState
} from 'react';

const VotingPage = (props) => {
  const [s, st] = useState('');
  const [u, su] = useState('');

  useEffect(() => {
    st(props.status);
    su(props.statusFor);
  }, [props.status, props.statusFor]);



  return (
    <div>
      <div>
        <h1>Vote page</h1>
        <h3>Status: {s}</h3>
        <h4>User: {u}</h4>
      </div>

    </div>
  );
}

export default VotingPage;