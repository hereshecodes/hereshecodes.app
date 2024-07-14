import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About"; // New import
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <main className="text-gray-400 bg-gray-900 body-font">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About/> {/* Replacing About with Resume */}
              <Projects />
              <Contact />
            </>
          } />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
