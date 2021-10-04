import React from 'react';
import './Price.css';

const Price = (props) => {
  let key = 1;
  const { title, facilities, price, text } = props.price;
  return (
    <div className="col">
      {/* single price card */}
      <div className="card h-100 single-price text-center">
        <div className="card-body">
          <h5 className="card-title fw-bolder">{title}</h5>
          <p className="card-text">{text}</p>
          <h1>$ {price}</h1>
          {
            facilities.map(facility => <li key={key++}>{facility}</li>)
          }
          <button className="btn regular-btn">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Price;