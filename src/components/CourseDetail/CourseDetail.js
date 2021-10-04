import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useCourses from '../../hooks/useCouses';

const CourseDetail = () => {
  const { courseId } = useParams();
  const [courses, setCourses] = useCourses(courseId);
  const [newCourses, setNewCourses] = useState([]);
  console.log(courseId);

  useEffect(() => {
    fetch('./courses.json')
      .then(res => res.json())
      .then(data => setNewCourses(data))
  }, [courses]);

  console.log(courses);

  const singleCourse = newCourses.find(course => course.id === courseId);
  console.log(singleCourse);
  return (
    <div>
      <h1>This is single course details</h1>
    </div>
  );
};

export default CourseDetail;