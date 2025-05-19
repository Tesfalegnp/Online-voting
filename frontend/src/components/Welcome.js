import React from 'react';
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div className="welcome-container text-white text-center p-5">
      <h1 className="mb-4">Welcome to Online Voting System</h1>
      <div className="d-flex flex-column gap-3 w-25 mx-auto"> <br/> <br/>
        <Link to="/vote" className="btn btn-primary btn-lg">Vote Now</Link>
      </div>
    </div>
  );
}

export default Welcome;