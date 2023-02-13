import React from "react";
import Projectsimg from "../assets/Projects.png";


const Projects = () => {
  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <p className="pb-5">
          <img
            src={Projectsimg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
          </p>
        </div>
        <div className="about-img">
        <p></p>
        </div>
      </div>
    </section>
  );
};

export default Projects;