
import './App.css';
import React from "react";
import { BrowserRouter } from 'react-router-dom'

import About from "./components/About";
import Blog from "./components/Blog";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from  "./components/Footer";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <BrowserRouter>
      <Navbar/>
      </BrowserRouter>
      <Hero/>
      <About/>
      <Blog/>
      <Projects/>
      <Contact/>
      <Footer/>
    </main>
  );
}
