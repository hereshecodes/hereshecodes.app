import React from "react";

const Blog = () => {
  return (
    <section className="bg-primary text-white px-5 py-32" id="blog">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="scrollbar-hide overflow-auto">
        <iframe width="1000" height="440"  src="https://rss.app/embed/v1/carousel/2ytTHH88xrAVfOeI" frameborder="0"></iframe>
        </div>
      </div>
    </section>
  );
};

export default Blog;