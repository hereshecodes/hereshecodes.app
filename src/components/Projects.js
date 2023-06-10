import React from "react";

const Projects = () => {
  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <p className="pb-5 title-font font-semibold">
            Showcase Your Live Templates and Projects
          </p>
       
          {/* Live Templates
          <div>
            <h2 className="text-lg font-semibold mb-2">Live Templates</h2>
            <div className="grid grid-cols-2 gap-4">
              {/* Template 1 
              <div className="bg-white p-4">
                <h3 className="text-xl font-semibold">Template 1</h3>
                <p>Description of Template 1</p>
                <a
                  href="link-to-template-1"
                  className="text-blue-500 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Template
                </a>
              </div>
              {/* Template 2 *
              <div className="bg-white p-4">
                <h3 className="text-xl font-semibold">Template 2</h3>
                <p>Description of Template 2</p>
                <a
                  href="link-to-template-2"
                  className="text-blue-500 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Template
                </a>
              </div>
            </div>
  </div> */}
          {/* Projects */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Projects</h2>
            <div className="grid grid-cols-2 gap-4">
              {/* Project 1 */}
              <div className="bg-white p-4">
                <h3 className="text-xl font-semibold">Project 1</h3>
                <p>Description of Project 1</p>
                <a
                  href="https://sidebar-bootstrap-template-44p3bhbca-daniellehoopes.vercel.app/index.html"
                  className="text-blue-500 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
              {/* Project 2 */}
              <div className="bg-white p-4">
                <h3 className="text-xl font-semibold">Project 2</h3>
                <p>Description of Project 2</p>
                <a
                  href="link-to-project-2"
                  className="text-blue-500 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default Projects;
