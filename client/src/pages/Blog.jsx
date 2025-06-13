import React from "react";
import Navbar from "../components/Navbar";
import "../style/Blog.css";

function Blog() {
  return (
    <>
     <Navbar />
      <div className="blog-banner">
       
        <img
          src="https://blog-cdn.reedsy.com/assets/posts/header-bg-3176387ba4fbac32eeea54b65dfafb56e32eb5b54773e1e47449319b96333dfa.svg"
          alt="Blog Background"
        />
        <div className="blog-banner-content">
          <h1>Welcome to the WordCrafters Blog</h1>
          <p>A trusted place to learn how to successfully publish your book</p>
        </div>
      </div>
    </>
  );
}

export default Blog;
