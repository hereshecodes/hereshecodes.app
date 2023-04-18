import React from "react";

 const BlogMenu = () => {
 return (
  <div className="blog-container mx-auto my-8">
 
    <div className="grid grid-cols-3 gap-4">
      <div className="blog-card">
        <div className="blog-card-image" style={{backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/150px-Microsoft_.NET_logo.svg.png) '}}></div>
        <div className="blog-card-content">
          <h2 className="text-xl font-bold mb-2">Building a Conversational AI App with .NET, React, and ChatGPT</h2>
             
              </div>
      </div>

    </div>
  </div>
);
};

export default BlogMenu;