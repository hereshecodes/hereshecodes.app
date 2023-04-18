import React from "react";

const BlogMenu = () => {
  const blogPosts = [
    {
      title: "Building a Conversational AI App with .NET, React, and ChatGPT",
      url: "/blog/1",
    },
    {
      title: "How to Build a React Native App with Expo",
      url: "/blog/2",
    },
    {
      title: "Tips for Writing Clean and Maintainable JavaScript Code",
      url: "/blog/3",
    },
  ];

  return (
    <div className="blog-menu">
      <h1 className="text-3xl font-bold mb-4">
        New Posts every Tuesday and Thursday!
      </h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.title}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <a href={post.url}>{post.title}</a>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogMenu;
