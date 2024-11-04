// src/components/Services.js
import React from 'react';
import { FaCode, FaNetworkWired, FaPenNib } from 'react-icons/fa';

const Services = () => {
  return (
    <section data-aos="fade-up" data-aos-duration="1000" id="services" className="bg-purple-800 text-white py-20 px-4 md:px-0">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl font-bold">Services</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-purple-700 p-6 rounded-lg shadow-md w-64 text-center">
            <FaCode className="text-4xl mx-auto" />
            <h3 className="text-2xl mt-4 font-bold">Software Development</h3>
          </div>
          <div className="bg-purple-700 p-6 rounded-lg shadow-md w-64 text-center">
            <FaNetworkWired className="text-4xl mx-auto" />
            <h3 className="text-2xl mt-4 font-bold">Network Engineering</h3>
          </div>
          <div className="bg-purple-700 p-6 rounded-lg shadow-md w-64 text-center">
            <FaPenNib className="text-4xl mx-auto" />
            <h3 className="text-2xl mt-4 font-bold">UX/UI Design</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
