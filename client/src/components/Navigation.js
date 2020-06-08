import React from 'react';
import {
  Link,
} from 'react-router-dom';

//Does this function serve any purpose? I can't see it being
//exported to anywhere else...
const Navigation = () => {

  return (
    <nav>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/voting">Voting</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;