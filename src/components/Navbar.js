import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub, faProductHunt, faPeace, faEnvelope } from '@fortawesome/free-brands-svg-icons';

function Navbar() {
  return (
    <header className="bg-gray-900 fixed w-full z-10 top-0 shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0" href="/">
          <span className="ml-3 text-xl">My Portfolio</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-white" href="#about">About</a>
          <a className="mr-5 hover:text-white" href="#projects">Projects</a>
          <a className="mr-5 hover:text-white" href="#news">News</a>
          <a className="mr-5 hover:text-white" href="#contact">Contact</a>
        </nav>
        <div className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-white" href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a className="mr-5 hover:text-white" href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a className="mr-5 hover:text-white" href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a className="mr-5 hover:text-white" href="https://producthunt.com/@yourprofile" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faProductHunt} />
          </a>
          <a className="mr-5 hover:text-white" href="https://yourprofile.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faPeace} />
          </a>
          <a className="mr-5 hover:text-white" href="mailto:youremail@example.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
    </header>
  );
}
