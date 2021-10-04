import React from 'react';
import './About.css';
import aboutImg from '../../images/about/about1.jpg';

const About = () => {
  return (
    <div>
      <div className="about-us">
        <div className="about-us-banner d-flex align-items-center justify-content-center">

        </div>
        <div className="about-us-content mt-5">
          <div className="container">
            <div className="row row-cols-md-2">
              <div className="col">
                <img src={aboutImg} alt="" className="w-100" />
              </div>
              <div className="col">
                <p className="text-danger fw-bold">// ABOUT US</p>
                <h1 className="fw-bold text-secondary">Yoga For Your Mental and Physical Health</h1>
                <p>Yoga offers physical and mental health benefits for people of all ages. And, if you’re going through an illness, recovering from surgery or living with a chronic condition, yoga can become an integral part of your treatment and potentially hasten healing. </p>

                <ul>
                  <li><i className="fas fa-check-double"></i> Yoga improves strength, balance and flexibility.</li>
                  <li><i className="fas fa-check-double"></i> Yoga helps with back pain relief.</li>
                  <li><i className="fas fa-check-double"></i> Yoga benefits heart health.</li>
                  <li><i className="fas fa-check-double"></i> Yoga relaxes you, to help you sleep better.</li>
                  <li><i className="fas fa-check-double"></i> Yoga can mean more energy and brighter moods.</li>
                </ul>

                <button className="btn regular-btn">Discover more</button>
              </div>
            </div>
          </div>
        </div>
        <div className="our-achivement">
          <div className="happy-clients">
            <div className="icon">
              <i className="far fa-smile"></i>
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