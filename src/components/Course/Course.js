import React from 'react';
import { Link } from 'react-router-dom';
import useCourses from '../../hooks/useCouses';

const Course = (props) => {
  const { title, price, duration, level, image, id } = props.course;
  return (
    <div className="col">
      <div className="card h-100">
        <img src={image} className="card-img-top h-75" alt="..." style={{ objectFit: 'cover' }} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
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