// src/components/Contact.js
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaGlobe, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact-section bg-gray-100 flex justify-center items-center h-screen">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        
        {/* Left Side - "LET'S TALK" */}
        <div className="flex-1 text-center md:text-right pr-8">
          <h1 className="text-6xl font-bold text-gray-800">
            LET'S <br />
            TALK
          </h1>
        </div>

        {/* Right Side - Contact Details */}
        <div className="flex-1 relative">
          {/* Background image overlay */}
          <div className="absolute inset-0 bg-cover bg-center opacity-70" style={{ backgroundImage: `url('/path/to/your/background-image.jpg')` }} />

          {/* Contact details box */}
          <div className="relative bg-white bg-opacity-50 backdrop-blur-sm p-8 rounded-lg shadow-lg w-full max-w-md mx-auto">
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center">
                <FaPhoneAlt className="text-blue-500 mr-4" />
                <span>+254748037564</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-blue-500 mr-4" />
                <span>techspacedigital@gmail.com</span>
              </li>
              <li className="flex items-center">
                <FaGlobe className="text-blue-500 mr-4" />
                <a href="https://simbatech.vercel.app" target="_blank" rel="noopener noreferrer">
                  simbatech.vercel.app
                </a>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="text-blue-500 mr-4" />
                <span>somewhere in Kenya</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
