import React from 'react';
import './About.css';
import aboutImg from '../../images/about/about1.jpg';

const About = () => {
  return (
    <div>
      <div className="about-us">
        <div className="about-us-banner d-flex align-items-center justify-content-center">
          <h1>About us</h1>
        </div>
        <div className="about-us-content mt-5">
          <div className="container">
            <div className="row row-cols-md-2">
              <div className="col">
                <img src={aboutImg} alt="" className="w-100" />
              </div>
              <div className="col">
                <p>// ABOUT US</p>
                <h1>Yoga For Your Mental and Physical Health</h1>

              </div>
            </div>
          </div>
        </div>
        <div className="our-achivement">
          <div className="happy-clients">
            <div className="icon">
              <i class="far fa-smile"></i>
            </div>
            <div className="clients">
              <h1>1200+</h1>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;