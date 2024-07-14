import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import About from "./components/About";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import News from "./components/News";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <main className="text-gray-400 bg-gray-900 body-font">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Hero />
            <About />
            <Projects />
            <News />
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
