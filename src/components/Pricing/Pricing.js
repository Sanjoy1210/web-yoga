import React, { useState, useEffect } from 'react';
import Price from '../Price/Price';

const Pricing = () => {
  // fake data load
  const [prices, setPrices] = useState([]);
  useEffect(() => {
    fetch('./pricing.json')
      .then(res => res.json())
      .then(data => setPrices(data));
  }, [])

  return (
    <div className="container my-5">
      {/* pricing section */}
      <p className="text-danger text-center fw-bold">// Pricing</p>
      <h1 className="text-secondary text-center fw-bold mb-5">Choose Your Plan</h1>
      <div className="row row-cols-md-3">
        {
          prices.map(price => <Price key={price.id} price={price}></Price>)
        }
      </div>
    </div>
  );
};

export default Pricing;