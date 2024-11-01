// src/components/SocialLinks.js
import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <section className="social-links bg-white py-10">
      <div className="container mx-auto px-8 text-center">
        <h2 className="text-3xl font-semibold mb-6">Check out my projects and LinkedIn profile</h2>
        <div className="flex justify-center space-x-10 text-2xl">
          <a href="https://github.com/simbajr1" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
            <FaGithub /> GitHub
          </a>
          <a href="https://linkedin.com/in/simbajr1" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
