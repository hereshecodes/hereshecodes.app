import React from 'react';
<<<<<<< HEAD
import heroImage from '../assets/pfp.png'; // Update the path accordingly
=======
import backgroundImage from '../assets/BLOG.png'; 
>>>>>>> parent of 6e93724 (Update Hero.js)

function Hero() {
  return (
    <section 
      className="hero-section bg-cover bg-center h-screen flex items-center justify-center" 
      style={{ backgroundImage: `url(${backgroundImage})` }}>
<<<<<<< HEAD
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-5xl font-bold text-white">Welcome to My Portfolio</h1>
          <p className="text-xl text-gray-200 mt-4">I am a freelance developer specializing in React apps.</p>
          <a href="#projects" className="mt-8 px-6 py-2 bg-primary text-white rounded hover:bg-hover-primary inline-block">View My Work</a>
        </div>
        <div className="md:w-1/2">
          <img src={heroImage} alt="Hero" className="w-full h-auto object-cover"/>
        </div>
=======
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white">Welcome to My Portfolio</h1>
        <p className="text-xl text-gray-200 mt-4">I am a freelance developer specializing in React apps.</p>
        <a href="#projects" className="mt-8 px-6 py-2 bg-blue-500 text-white rounded">View My Work</a>
>>>>>>> parent of 6e93724 (Update Hero.js)
      </div>
    </section>
  );
}

export default Hero;
