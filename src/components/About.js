import React from "react";
import AboutImg from "../assets/About me.png";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
       
          <p className="pb-5">
            Hi, I'm Danielle. I am a
            Fullstack Developer. 
            I like to build cool websites with React and
            Tailwind CSS.
          </p>
          <p className="pb-5">
            I am proficient in Frontend skills like React.js,
             Tailwind CSS, SaSS, Css3 and many more.
          </p>

          <p className="pb-5" >In backend I know Node.js, C#, SQL Server and MongoDB</p>
<p className="pb-5 text-accent-2">If you are here for my freelance work head to </p>
      
        <a
            href="https://www.fiverr.com/daniellehoopes1?up_rollout=true"
            className=" btn bg-accent pb-5 border-2 border-[#7477FF] text-black px-6 py-3 hover:bg-transparent"
          >
           Fiverr
          </a>
</div>
        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;