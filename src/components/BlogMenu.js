import React from "react";
import { Link } from "react-router-dom";

 const BlogMenu = () => {
 return (
  <div className="blog-container mx-auto my-8">
 
    <div className="grid grid-cols-3 gap-4">
      <div className="blog-card">
        <div className="blog-card-image" style={{backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/150px-Microsoft_.NET_logo.svg.png) '}}></div>
        <div className="blog-card-content">
          <h2 className="text-xl font-bold mb-2">Building a Conversational AI App with .NET, React, and ChatGPT</h2>
          <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
          <Link to="/blog" className="btn btn-primary mt-4">
              Read More
            </Link>      
              </div>
      </div>

    </div>
  </div>
);
};

export default BlogMenu;