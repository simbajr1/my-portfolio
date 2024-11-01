// src/components/AboutMe.js
import React from 'react';

const AboutMe = () => {
  return (
    <section className="about-me bg-gray-100 text-purple-900 py-20">
      <div className="container mx-auto px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold border-b-4 border-purple-600 inline-block">About Me</h2>
          <p className="mt-4 text-lg">I am a Software Developer and a Network Engineer with a bachelor's degree in computer science. I am a tech enthusiast and I see technology as a game changer in every sector.</p>
        </div>
        
        <div className="experience">
          <h3 className="text-2xl font-semibold mb-4">Experience — 3 Years</h3>
          <div className="flex flex-wrap gap-4">
            <span className="bg-purple-600 text-white px-4 py-2 rounded-full">React JS</span>
            <span className="bg-purple-600 text-white px-4 py-2 rounded-full">JavaScript</span>
            <span className="bg-purple-600 text-white px-4 py-2 rounded-full">Django</span>
            <span className="bg-purple-600 text-white px-4 py-2 rounded-full">HTML5, Tailwind CSS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
