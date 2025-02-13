import React from 'react';
import heroImage from '../assets/DanielleHoopes.png'; // Update the path accordingly

function Hero() {
  return (
    <section 
      className="hero-section bg-cover bg-center h-screen flex items-center justify-center"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl font-bold text-white">Danielle Hoopes</h1>
          <p className="text-xl text-gray-200 mt-4">
         full-stack developer with expertise in modern web technologies and .NET, dedicated to creating efficient and scalable web solutions.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
  <div className="relative">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg w-52 h-52"></div>
    <img 
      src={heroImage} 
      alt="Hero" 
      className="relative z-10 w-48 h-48 rounded-full border-4 border-white shadow-lg object-cover"
    />
  </div>
</div>

      </div>
    </section>
  );
}

export default Hero;
