import React from "react";

const BlogMenu = () => {
  return (
    <div className="blog-menu">
      <h1 className="text-3xl font-bold mb-4">New Posts every Tuesday and Thursday!</h1>
      <ul>
        <li>
          <a href="/blog/1">
            Building a Conversational AI App with .NET, React, and ChatGPT
          </a>
        </li>
        <li>
          <a href="/blog/2">
            How to Build a React Native App with Expo
          </a>
        </li>
        <li>
          <a href="/blog/3">
            Tips for Writing Clean and Maintainable JavaScript Code
          </a>
        </li>
      </ul>
    </div>
  );
};

export default BlogMenu;
