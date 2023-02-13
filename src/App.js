
import './App.css';
import React from "react";
import { BrowserRouter } from 'react-router-dom'

import About from "./components/About";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <BrowserRouter>
      <Navbar/>
      </BrowserRouter>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </main>
  );
}
