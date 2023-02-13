import React from "react";

import {

    AiOutlineMail,
  } from "react-icons/ai";

const Contact = () => {
  return (
    <section className="bg-primary text-white px-5 py-32" id="contact">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
       
        <h2 className="text-4xl  text-center font-bold mb-5 border-b-[5px] w-[180px] border-blue pb-2">
            Contact Me
          </h2>
          <p className="pb-5">
          Visit one of my social links or: 
          </p>
            
          <a href="mailto:hereshecodes1@gmail.com"
          className="pr-4  text-accent hover:text-white">

            hereshecodes1@gmail.com
            {" "}
              <AiOutlineMail size={40} />{" "}
              </a>

        </div>

 
      </div>
    </section>
  );
};

export default Contact;