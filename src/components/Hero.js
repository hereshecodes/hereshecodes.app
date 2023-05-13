import React from "react";
import HeroImg from "../assets/heroimg.jpg";

import {
  AiOutlineTwitter,
  AiOutlineYoutube,
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineBehanceSquare,
  AiOutlineArrowRight,
} from "react-icons/ai";

const Hero = () => {
  return (
    <section className="bg-primary px-5 text-white py-32">
      {/* Add the stars as child elements */}
      {[...Array(50)].map((_, index) => (
        <div className="star" key={index}></div>
      ))}
      <div className="container mx-auto grid items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            Hi, <br />I am <span className="text-accent">da</span>nielle <br />
            Fullstack Developer
          </h1>

          <p className="py-5">
            I am proficient in JavaScript, React.js and Tailwind CSS.
           
          </p>
          <p className="text-accent-2">I also use Bootstrap and other frameworks</p>
          <div className="flex py-5 ">
            <a
              href="https://github.com/hereshecodes"
              target="_blank" className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineGithub size={40} />{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/daniellehoopes/"
              target="_blank" className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineLinkedin size={40} />{" "}
            </a>
            <a
              href="https://stackoverflow.com/users/7810770/danielle-hoopes"
              target="_blank" className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineArrowRight size={40} />{" "}
            </a>
          </div>

          {/* <a
            href="/#projects"
            className="btn bg-accent  border-2 border-[#7477FF] text-black px-6 py-3 hover:bg-transparent"
          >
            See Projects
          </a> */}
        </div>

        {/*<div className="hero-img">
          <img
            src={HeroImg}
            alt="coding illustration"
            className="lgw-[80%] ml-auto"
          />
  </div>*/}
      </div>
    </section>
  );
};

export default Hero;
