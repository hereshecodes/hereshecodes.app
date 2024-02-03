import React from "react";

const Projects = () => {
  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
        
       
        
          <div>
            <h2 className="text-lg font-semibold mb-2">Live Templates</h2>
            <div className="grid grid-cols-2 gap-4">
     
              <div className="bg-white p-4">
                <h3 className="text-xl font-semibold">SB Lash and Wax - Beauty Services</h3>
                <p>Aesthetics Website</p>
                <a
                  href="https://sb-lash-and-wax-fort-smith-git-master-daniellehoopes.vercel.app/services.html"
                  className="text-blue-500 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Template
                </a>
              </div>
           
          {/* Projects */}
         
        </div>
       </div>
      </div>
      </div>
    </section>
  );
};

export default Projects;
