import React from 'react';
import backgroundImage from '../assets/BLOG.png'; // Update the path accordingly
import heroImage from '../assets/pfp.png'; // Update the path accordingly

function Hero() {
  return (
    <section 
      className="hero-section bg-cover bg-center h-screen flex items-center justify-center" 
      >
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="text-center md:text-left md:w-1/2">
          <p className="text-xl text-gray-200 mt-4">I am a fullstack developer specializing in a variety of web technologies and .NET.</p>
          {/* <a href="#projects" className="mt-8 px-6 py-2 bg-primary text-white rounded hover:bg-hover-primary inline-block">View My Work</a> */}
        </div>
        <div className="md:w-1/2">
          <img src={heroImage} alt="Hero" className="w-full h-auto object-cover"/>
        </div>
      </div>
    </section>
  );
}

export default Hero;
