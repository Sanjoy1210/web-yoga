import React from 'react';
import image from '../../images/not-found/404.png'

const NotFound = () => {
  return (
    <div>
      <div className="container text-center mt-5" style={{ height: '100vh' }}>
        <div className="not-found-image">
          <img src={image} alt="Not Found Image" />
        </div>
        <div className="not-found-content">
          <h1>Page Not Found</h1>
          <p>This page is not currently available</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;