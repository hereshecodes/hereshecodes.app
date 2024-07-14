import './App.css';
import React from "react";
import React, { useEffect } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About"; // New import
// import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in-up');
      const windowHeight = window.innerHeight;

      elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
          el.classList.add('visible');
        } else {
          el.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Router>
      <main className="text-gray-400 bg-gray-900 body-font">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About/> 
              {/* <Projects /> */}
            </>
          } />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
