import React from 'react';
import './Error.css';
import ErrorHome from './ErrorHome';
import ErrorContinue from './ErrorContinue';
import ErrorSVG from './ErrorSVG';
const Error = () => {
  return (
    <>
    <div className='bt9'>
      <div className='bt10'>
        <ErrorHome></ErrorHome>
      </div>
      <div className='bt11'>
        <ErrorSVG></ErrorSVG>
      </div>
    </div>
    <ErrorContinue></ErrorContinue>
    </>
  );
};

export default Error;