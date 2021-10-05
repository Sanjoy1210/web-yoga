import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../images/not-found/404.png';
import './NotFound.css';

const NotFound = () => {
  return (
    <div>
      {/* not found fancy style */}
      <div className="container text-center mt-5" style={{ height: '100vh' }}>
        <div className="not-found-image">
          <img src={image} alt="Not Found Image" />
        </div>
        <div className="not-found-content mt-4">
          <h1 className="text-secondary text-secondary fw-bolder">Page Not Found</h1>
          <p className="text-secondary">This page is not currently available</p>

          <div className="buttons mt-4">
            <Link to="/home">
              <button className="btn regular-btn me-4">Go to Home</button>
            </Link>
            <Link to="/">
              <button className="btn back-btn">Go Back</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;