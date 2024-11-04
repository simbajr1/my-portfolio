// src/components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <section  id="hero" className="hero-section bg-purple-900 text-white flex items-center justify-center h-screen relative">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          Hello, I am <span className="text-blue-500">Japheth Onyango</span>,
          <br /> a Software Developer and a Network Engineer
        </h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300">
          Hire Me
        </button>
        <div className="mt-4 text-2xl">
          <a href="https://wa.me/yourwhatsapplink">📱</a>
        </div>
      </div>
      <div className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg">
        <img src="your-profile-photo.jpg" alt="Profile" className="rounded-full w-32 h-32 object-cover" />
      </div>
    </section>
  );
};

export default Hero;
