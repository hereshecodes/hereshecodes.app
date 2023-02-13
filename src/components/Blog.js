import React from "react";
import AboutImg from "../assets/BLOG.png";

const Blog = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="blog">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
        <iframe width="360" height="440"  src="https://rss.app/embed/v1/carousel/2ytTHH88xrAVfOeI" frameborder="0"></iframe>

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

export default Blog;