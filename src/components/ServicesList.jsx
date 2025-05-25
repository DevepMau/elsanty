import React from 'react';
import services from '../data/ServicesData';
import './ServicesList.css';

function ServicesList() {
  return (
    <div className="services-container">
      <h2>Nuestros Servicios</h2>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesList;