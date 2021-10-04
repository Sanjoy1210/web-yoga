import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-3">
            <h1 className="fw-bold text-secondary">Yoga</h1>
            <p>Keep Refresh & Strong your body</p>
            <div className="icons">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>
          <div className="col-md-3">
            <h2>Our address</h2>
            <div className="our-address">
              <p><i className="fas fa-map-marker-alt"></i> 80 Pine St. 10th Floor,<br /> New York, NY 10005, USA</p>
              <p><i className="far fa-envelope"></i> gaudy@mail.com</p>
              <p><i className="fas fa-phone-alt"></i> (+1) 123 456 789 0</p>
            </div>
          </div>
          <div className="col-md-3">
            <h2>Quick Links</h2>
            <nav className="nav flex-column ms-5">
              <NavLink className="nav-link" to="/home">Home</NavLink>
              <NavLink className="nav-link" to="/about">About</NavLink>
              <NavLink className="nav-link" to="/courses">Courses</NavLink>
              <NavLink className="nav-link" to="/pricing">Pricing</NavLink>
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </nav>
          </div>
          <div className="col-md-3">
            <h2>Newsletter</h2>
            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <button className="btn regular-btn">Subscribe</button>
          </div>
        </div>
        <p className="text-center">Copyright &copy; 2021 Prospect – All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;