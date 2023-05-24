import React from "react";
import AboutImg from "../assets/About me.png";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
       
        
          <p className="pb-5">
            I am proficient in Frontend skills like React.js,
             Tailwind CSS, SaSS, Css3 and many more.
          </p>
          <p className="pb-5">During the day, I code .NET Applications using C#, SQL Server, and Azure</p>

<p className="pb-5 text-accent">If you are here for my freelance work where I  
work with clients to update their storefronts, WordPress sites, custom coded apps, and 
lots more head over to Fiver
</p>
      
     
</div>
        <div className="about-img pt-10">
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