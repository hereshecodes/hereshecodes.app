
import './App.css';
import React from "react";
import { BrowserRouter } from 'react-router-dom'
//import ReactGA from 'react-ga';
//const TRACKING_ID = "G-S48WBVLVHG"; // OUR_TRACKING_ID
//ReactGA.initialize(TRACKING_ID);

import About from "./components/About";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import News from "./components/News";
import Projects from "./compents/Projects";

import Footer from  "./components/Footer";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <BrowserRouter>
      <Navbar/>
      </BrowserRouter>
      <Hero/>
      <About/>
      <Projects/>
      <News/>
      <Contact/>
      <Footer/>
    </main>
  );
}
