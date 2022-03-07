import React from "react";
import "./blog.css";
import { Post1, Post2, Post3, Post4 } from "./post";

const Blog = () => {
  return (
    <div className="wrapper">
      <Post4 />
      <Post3 />
      <Post2 />
      <Post1 />
    </div>
  );
};
export default Blog;
