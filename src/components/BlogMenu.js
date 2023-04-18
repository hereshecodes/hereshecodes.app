import React from "react";

 const BlogMenu = () => {
 return (
  <div className="blog-container mx-auto my-8">
 
    <div className="grid grid-cols-3 gap-4">
      <div className="blog-card">
        <div className="blog-card-image" style={{backgroundImage: 'url(/public/src/assets/dotnet.jpg) '}}></div>
        <div className="blog-card-content">
          <h2 className="text-xl font-bold mb-2">Building a Conversational AI App with .NET, React, and ChatGPT</h2>
          <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
          <a href="/src/components/Blog.js" className="btn btn-primary mt-4">Read More</a>
        </div>
      </div>
      <div className="blog-card">
        <div className="blog-card-image" style={{backgroundImage: 'url(https://source.unsplash.com/random/400x400)'}}></div>
        <div className="blog-card-content">
          <h2 className="text-xl font-bold mb-2">Blog Post Title</h2>
          <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
          <a href="#" className="btn btn-primary mt-4">Read More</a>
        </div>
      </div>
      <div className="blog-card">
        <div className="blog-card-image" style={{backgroundImage: 'url(https://source.unsplash.com/random/400x400)'}}></div>
        <div className="blog-card-content">
          <h2 className="text-xl font-bold mb-2">Blog Post Title</h2>
          <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
          <a href="/blog" className="btn btn-primary mt-4">Read More</a>
        </div>
      </div>
      {/* Add more blog cards here */}
    </div>
  </div>
);
};

export default BlogMenu;