import React from 'react';
import {AiOutlineGithub, AiOutlineLinkedin, AiOutlineBehanceSquare, AiOutlineMail, AiOutlineArrowRight } from 'react-icons/ai';

function Navbar() {
  return (
    <header className="fixed w-full z-10 top-0 shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0" href="/">
          <span className="ml-3 text-xl">My Portfolio</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-white" href="#about">About</a>
          {/* <a className="mr-5 hover:text-white" href="#projects">Projects</a> */}
          <a className="mr-5 hover:text-white" href="#contact">Contact</a>
        </nav>
        <div className="flex items-center text-base justify-center">
          <a className="mr-5 hover:text-white" href="https://github.com/hereshecodes" target="_blank" rel="noopener noreferrer">
            <AiOutlineGithub size={24} />
          </a>
          <a className="mr-5 hover:text-white" href="https://linkedin.com/in/daniellehoopes" target="_blank" rel="noopener noreferrer">
            <AiOutlineLinkedin size={24} />
          </a>
          <a className="mr-5 hover:text-white" href="mailto:hereshecodes1@gmail.com" target="_blank" rel="noopener noreferrer">
          <AiOutlineMail size={24} />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
