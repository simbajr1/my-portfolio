// src/components/Contact.js
import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';

const Contact = () => {
  return (
    <section  id="contact" className="bg-gray-200 text-gray-900 py-20 px-4 md:px-0">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h2 className="text-4xl font-bold">Let's Talk</h2>
        <div className="flex flex-col items-center space-y-2 mt-8">
          <p><FaPhone /> +254748037564</p>
          <p><FaEnvelope /> techspacedigital@gmail.com</p>
          <p><FaGlobe /> simba.tech</p>
          <p><FaMapMarkerAlt /> Somewhere in Kenya</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
