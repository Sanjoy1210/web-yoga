import React from 'react';
import useCourses from '../../hooks/useCouses';
import Course from '../Course/Course';

import './Courses.css';

const Courses = () => {
  const [courses, setCourses] = useCourses();

  return (
    <div className="courses-section">
      <div className="courses text-center my-5">
        <p className="fw-bold text-danger">// Our Courses</p>
        <h1 className="fw-bold text-secondary">Explore Our Yoga Courses</h1>
      </div>
      <div className="container py-5">
        <div className="row row-cols-md-4 g-4">
          {
            courses.map(course => <Course key={course.id} course={course}></Course>)
          }
        </div>
      </div>

    </div>
  );
};

export default Courses;