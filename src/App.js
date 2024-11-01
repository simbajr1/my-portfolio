// src/App.js
import React from 'react';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import SocialLinks from './components/SocialLinks';
import Contact from './components/Contact';
import './index.css';
import './App.css'

const App = () => {
  return (
    <div className="App">
      <Hero />
      <AboutMe />
      <Services />
      <SocialLinks />
      <Contact />
    </div>
  );
};

export default App;
