import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="container">
      {/* contact us */}
      <p className="text-center fw-bold text-danger">Have a question?</p>
      <h1 className="fw-bolder text-center text-secondary">Get In Touch Now</h1>
      <div className="contact-us w-75 mx-auto">
        <div className="form-floating mb-3">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="form-floating mt-3 mb-5">
          <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
          <label htmlFor="floatingTextarea2">Comments</label>
        </div>
        <button className="btn regular-btn mb-5">Send Message</button>
      </div>
    </div>
  );
};

export default Contact;