import React from "react";

const Blog = () => {
  return (
    <section className="bg-primary text-white px-5 py-32" id="blog">
      <div className="container mx-auto  items-center justify-center md:justify-between">
        <div className="stack-carousel scrollbar-hide overflow-auto">
        <iframe max-width="100%" height="440"  src="https://rss.app/embed/v1/carousel/2ytTHH88xrAVfOeI" frameborder="0"></iframe>
        </div>
      </div>
    </section>
  );
};

export default Blog;