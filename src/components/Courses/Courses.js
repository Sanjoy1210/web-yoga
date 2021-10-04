import React from 'react';
import { useHistory } from 'react-router';
import useCourses from '../../hooks/useCouses';
import Course from '../Course/Course';
import './Courses.css';

const Courses = () => {
  const [courses, setCourses] = useCourses();
  const history = useHistory();

  const handleSeeDetail = coursesId => {
    history.push(`/courses/${coursesId}`);
  }

  return (
    <div className="courses-section">
      <div className="courses d-flex justify-content-center align-items-center">
        <h1>Courses</h1>
      </div>
      <div className="container py-5">
        <div className="row row-cols-md-4 g-4">
          {
            courses.map(course => <Course key={course.id} course={course} handleSeeDetail={handleSeeDetail}></Course>)
          }
        </div>
      </div>
    </div>
  );
};

export default Courses;