import React from 'react';
import backgroundImage from '../assets/BLOG.png'; 


function Hero() {
  return (
    <section 
      className="hero-section bg-cover bg-center h-screen flex items-center justify-center" 
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white">Welcome to My Portfolio</h1>
        <p className="text-xl text-gray-200 mt-4">I am a freelance developer specializing in React apps.</p>
        <a href="#projects" className="mt-8 px-6 py-2 bg-primary text-white rounded hover:bg-hover-primary">View My Work</a>
      </div>
    </section>
  );
}

export default Hero;
