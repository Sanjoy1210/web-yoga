import React, { useEffect } from 'react';
import bannar1 from '../../images/banner/banner-6.png';
import bannar2 from '../../images/banner/banner-4.png';
import bannar3 from '../../images/banner/banner-3.png';
import './Home.css';
import useCourses from '../../hooks/useCouses';
import Course from '../Course/Course';

const Home = () => {
  const [courses, setCourses] = useCourses();

  return (
    <div>
      <div className="banner-area">
        <div className="banner-content">
          <h1>Start enlightening <br /> your body and soul</h1>
          <p>Regular yoga practice may reduce levels of stress and body-wide inflammation, contributing to healthier hearts. Several of the factors contributing to heart disease, including high blood pressure and excess weight.</p>
          <button className="btn regular-btn">Join the class</button>
        </div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={bannar1} className="d-block w-50" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={bannar2} className="d-block w-50" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={bannar3} className="d-block w-50" alt="..." />
            </div>
          </div>
          {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button> */}
        </div>
      </div>

      <div className="our-services my-5">
        <div className="container">
          <div className="row row-cols-md-4">
            {
              courses?.slice(0, 4)?.map(course => <Course key={course.id} course={course}></Course>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;