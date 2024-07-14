import React from 'react';

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
      </div>
    </header>
  );
}

export default Navbar;
