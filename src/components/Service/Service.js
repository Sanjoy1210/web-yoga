import React from 'react';

const Service = (props) => {
  console.log(props);
  const { title, price, duration, level, image, lesson, students } = props.service;
  return (
    <div className="col">
      <div className="card h-100">
        <img src={image} className="card-img-top h-75" alt="..." style={{ objectFit: 'cover' }} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <div className="d-flex justify-content-space-around align-items-center flex-wrap">
            <small><i class="fas fa-clock"></i> {duration}</small>
            <small><i class="fas fa-signal"></i> {level}</small>
          </div>
          <button className="btn regular-btn">See Detail</button>
          <span>${price}</span>
        </div>
      </div>
    </div>
  );
};

export default Service;