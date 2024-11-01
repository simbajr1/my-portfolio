// src/components/MyPortfolio.js
import React, { useState } from 'react';
import "./src/app.css"

const MyPortfolio = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-purple-900 text-white h-screen overflow-hidden">
      {/* Navbar */}
      <nav className="fixed w-full bg-purple-700 text-white z-10 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">Tech Space</div>
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            <span className={`hamburger ${isOpen ? "open" : ""}`}></span>
          </button>
          <ul
            className={`md:flex space-x-8 text-lg ${
              isOpen ? "block" : "hidden"
            } md:block`}
          >
            <li>
              <a href="#home" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-300">
                About Me
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-gray-300">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-300">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section bg-purple-900 text-white flex items-center justify-center h-screen">
        <div className="text-center mt-20">
          <h1 className="text-4xl md:text-6xl font-bold">
            Hello, I am <span className="text-blue-500">Japheth Onyango</span>,
          </h1>
          <h2 className="text-2xl md:text-4xl mt-4">
            a Software Developer and a Network Engineer
          </h2>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full mt-6">
            Hire Me
          </button>
          <div className="mt-4">
            <a href="https://wa.me/yourwhatsapplink" className="text-2xl">
              📱
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyPortfolio;
