import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useServices from '../../hooks/useServices';

const CourseDetail = () => {
  const [services, setServices] = useServices();
  const [courses, setCourses] = useState([]);
  const { serviceId } = useParams();

  useEffect(() => {
    fetch('./fakeData.json')
      .then(res => res.json())
      .then(data => setCourses(data));
  }, [services]);
  console.log(courses);
  const course = courses?.find(service => service.id === serviceId);
  console.log(course);
  return (
    <div>
      <h1>This is single course details</h1>
    </div>
  );
};

export default CourseDetail;