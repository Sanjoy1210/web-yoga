import React from 'react';
import { useHistory } from 'react-router';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
  const [services, setServices] = useServices();
  const history = useHistory();

  const handleSeeDetail = serviceId => {
    history.push(`/services/${serviceId}`);
  }

  return (
    <div className="services-section">
      <div className="services d-flex justify-content-center align-items-center">
        <h1>Services</h1>
      </div>
      <div className="container mt-5">
        <div className="row row-cols-md-4 g-4">
          {
            services.map(service => <Service key={service.id} service={service} handleSeeDetail={handleSeeDetail}></Service>)
          }
        </div>
      </div>
    </div>
  );
};

export default Services;