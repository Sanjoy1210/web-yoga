import React, { useEffect, useState } from 'react';
import Trainer from '../Trainer/Trainer';

const OurTeam = () => {
  const [trainers, setTrainers] = useState([]);
  useEffect(() => {
    fetch('./team.json')
      .then(res => res.json())
      .then(data => setTrainers(data));
  }, []);
  return (
    <div className="our-team-section my-5">
      <div className="container">
        <p className="text-center text-danger fw-bold">// Our Team</p>
        <h1 className="text-center text-secondary fw-bold">Meet Our Team</h1>
        <div className="row row-cols-md-4 mt-5">
          {
            trainers.map(trainer => <Trainer key={trainer.id} trainer={trainer}></Trainer>)
          }
        </div>
      </div>
    </div>
  );
};

export default OurTeam;