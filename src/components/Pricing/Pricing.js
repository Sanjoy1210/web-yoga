import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import Price from '../Price/Price';

const Pricing = () => {
  const [prices, setPrices] = useState([]);
  useEffect(() => {
    fetch('./pricing.json')
      .then(res => res.json())
      .then(data => setPrices(data));
  }, [])

  return (
    <div className="container my-5">
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