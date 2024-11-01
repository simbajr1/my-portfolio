// src/components/Services.js
import React from 'react';

const Services = () => {
  return (
    <section className="services-section bg-purple-800 text-white py-20">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-semibold border-b-4 border-purple-600 inline-block mb-10">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="service-item">
            <h3 className="text-xl font-bold">Software Development</h3>
            <p>Custom software solutions tailored to meet business needs.</p>
          </div>
          <div className="service-item">
            <h3 className="text-xl font-bold">Network Engineering</h3>
            <p>Designing and implementing robust network solutions.</p>
          </div>
          <div className="service-item">
            <h3 className="text-xl font-bold">UX/UI Design</h3>
            <p>Creating user-centered designs for better user experiences.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
