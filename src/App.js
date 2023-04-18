import React from "react";
import { Route, Switch } from "react-router";
import About from "./components/About";
import Blog from "./components/Blog";
import BlogMenu from "./components/BlogMenu";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Projects from "./components/Projects";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Hero />
            <About />
            <BlogMenu />
            <News />
            <Projects />
            <Contact />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </main>
  );
}
