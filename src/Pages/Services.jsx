import React from 'react';

export default function Services() {
  const services = [
    {
      title: 'Web Design',
      description: 'Custom, responsive web designs that captivate and convert.'
    },
    {
      title: 'Animation & Motion',
      description: 'Engaging scroll-driven and interactive animations for immersive experiences.'
    },
    {
      title: 'Branding',
      description: 'Comprehensive branding strategies and visual identity development.'
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design solutions that enhance functionality and aesthetics.'
    },
    {
      title: 'Development',
      description: 'Full-stack development with React, Vite, and modern web technologies.'
    },
    {
      title: 'Consulting',
      description: 'Expert guidance on digital strategy and technology implementation.'
    }
  ];

  return (
    <div className="app">
      <section className="services-section">
        <div className="services-container">
          <h1>Our Services</h1>
          <p className="services-intro">
            We offer a comprehensive range of services to bring your vision to life.
          </p>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
