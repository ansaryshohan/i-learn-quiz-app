import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  const{status,statusText}=error;
  return (
    <div>
      <h1>OOppss..!!!</h1>
      <p>An Error occured</p>
      <p>{status}</p>
      <p>{statusText}</p>
      <Link to='/'><button>Go to Homepage.</button></Link>

    </div>
  );
};

export default ErrorPage;