// src/components/Navbar.js
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="bg-purple-900 text-white fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold">Tech Space</h1>
        <div className="hidden md:flex space-x-6">
          <a href="#hero" className="hover:text-blue-500">Home</a>
          <a href="#about" className="hover:text-blue-500">About Me</a>
          <a href="#services" className="hover:text-blue-500">Services</a>
          <a href="#contact" className="hover:text-blue-500">Let's Talk</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleNav}>
            {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {navOpen && (
        <div className="md:hidden bg-purple-900 text-white absolute w-full top-16 left-0 space-y-4 py-6 px-6 flex flex-col">
          <a href="#hero" onClick={toggleNav}>Home</a>
          <a href="#about" onClick={toggleNav}>About Me</a>
          <a href="#services" onClick={toggleNav}>Services</a>
          <a href="#contact" onClick={toggleNav}>Let's Talk</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
