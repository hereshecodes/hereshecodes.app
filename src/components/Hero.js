import React from 'react';

function Hero() {
  return (
    <section className="hero-section bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: "url('path/to/your/image.jpg')" }}>
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white">Welcome to My Portfolio</h1>
        <p className="text-xl text-gray-200 mt-4">I am a fullstack developer specializing in a variety of web technologies and .NET</p>
        <a href="#projects" className="mt-8 px-6 py-2 bg-blue-500 text-white rounded">View My Work</a>
      </div>
    </section>
  );
}

export default Hero;
