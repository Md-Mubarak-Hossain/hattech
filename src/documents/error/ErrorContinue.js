import React from 'react';
import './Error.css';
const ErrorContinue = () => {
    return (
<div className="bt12 card w-96">
  <div className="card-body items-center text-center">
    <h2 className="card-title text-blue-950">Oops!</h2>
    <p>The page you requested cannot be found.</p>
    <div className="card-actions">
      <button className="btn btn-primary">Continue</button>
    </div>
  </div>
</div>
    );
};

export default ErrorContinue;