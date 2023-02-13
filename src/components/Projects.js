import React from "react";
import Projectsimg from "../assets/Projects.png";


const Projects = () => {
  return (
    <section className="bg-secondary text-white px-5 py-32" id="projects">
       <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
       
          <p className="pb-5">
        2023 Projects Coming Soon...
          </p>
          <p className="pb-5">
        In the meantime, visit my GitHub and Stack Overflow or Fiverr
        to see what I'm working on
          </p>


        </div>

        <div className="about-img">
          <img
            src={Projectsimg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;