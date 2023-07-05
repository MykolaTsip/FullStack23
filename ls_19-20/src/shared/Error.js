import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';

const ErrorComponent = ({ message = '' }) => {
  return (
    <div className="alert alert-danger" role="alert">
      {'An error occurred. Please try again'}
      { message }
    </div>
  );
};

export default ErrorComponent;
