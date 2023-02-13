
import './App.css';
import React from "react";

import About from "./components/About";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Blog from  "./components/Blog";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Blog/>
      <Contact/>
    </main>
  );
}
