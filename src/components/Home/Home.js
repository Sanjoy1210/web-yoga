import React from 'react';
import bannar1 from '../../images/banner/banner-6.png';
import bannar2 from '../../images/banner/banner-4.png';
import bannar3 from '../../images/banner/banner-3.png';
import './Home.css';

const Home = () => {

  return (
    <div>
      <div className="banner-area">
        <div className="banner-content">
          <h1>Start enlightening your body and soul</h1>
          <p>Fitness For The Services Body And Soul</p>
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
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="our-services">

      </div>
    </div>
  );
};

export default Home;