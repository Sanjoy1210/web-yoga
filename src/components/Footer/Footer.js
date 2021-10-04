import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h1>Logo</h1>
            <p>Keep Refresh & Strong your body</p>
            <div className="icons">

            </div>
          </div>
          <div className="col-md-3">
            <h2>Our address</h2>
            <p><i className="fas fa-map-marker-alt"></i> 80 Pine St. 10th Floor, New York, NY 10005, USA</p>
            <p><i className="far fa-envelope"></i> gaudy@mail.com</p>
            <p><i className="fas fa-phone-alt"></i> (+1) 123 456 789 0</p>
          </div>
          <div className="col-md-2">
            <h2>Quick Links</h2>
            <nav className="nav flex-column">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
              <a className="nav-link" href="#">About</a>
              <a className="nav-link" href="#">Services</a>
              <a className="nav-link" href="#">Blog</a>
              <a className="nav-link" href="#">Courses</a>
              <a className="nav-link" href="#">Contact</a>
            </nav>
          </div>
          <div className="col-md-4">
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