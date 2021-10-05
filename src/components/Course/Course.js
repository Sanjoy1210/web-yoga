import React from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import './Course.css';

const Course = (props) => {
  const { title, price, duration, level, image, id, rating } = props.course;
  return (
    <div className="col">
      {/* single course card */}
      <div className="card h-100">
        <img src={image} className="card-img-top h-75" alt="..." style={{ objectFit: 'cover' }} />

        {/* course body */}
        <div className="card-body course-content">
          <h5 className="card-title">{title}</h5>
          <Rating
            readonly
            initialRating={rating}
            emptySymbol="far fa-star text-warning"
            fullSymbol="fas fa-star text-warning" />

          <div className="d-flex justify-content-between align-items-center my-3">
            <small><i className="fas fa-clock"></i> {duration}</small>
            <small><i className="fas fa-signal"></i> {level}</small>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <Link to={`/courses/${id}`}>
              <button className="btn regular-btn">See Detail</button>
            </Link>
            <span>${price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;