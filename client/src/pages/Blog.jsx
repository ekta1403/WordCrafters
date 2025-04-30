import React from "react";

function Blog() {
  return (
    // <div className=' '
    // style={{marginLeft:"250px", backgroundColor:"#aaeef5"}}>
    // <img src="https://blog-cdn.reedsy.com/assets/posts/header-bg-3176387ba4fbac32eeea54b65dfafb56e32eb5b54773e1e47449319b96333dfa.svg" alt="" />

    // </div>
    <div
      style={{
        backgroundColor: "#f3fcff", 
        padding: "60px 0",
        textAlign: "center",
        height:"323px"
      }}
    >
      {/* Background banner image */}
      <img
        src="https://blog-cdn.reedsy.com/assets/posts/header-bg-3176387ba4fbac32eeea54b65dfafb56e32eb5b54773e1e47449319b96333dfa.svg"
        alt=" Blog Background"
        style={{
          width: "60%",
          maxHeight: "750px",
          objectFit: "cover",
          marginBottom: "-120px",
          zIndex: "1",
          position: "relative",
        }}
      />

      {/* Text content on top */}
      <div
        style={{
          position: "relative",
          zIndex: "1",
          marginTop: "-70px",
        }}
      >
        <h1
          style={{
            fontSize: "34px",
            color: "#222",
            fontWeight: "700",
            marginBottom: "10px",
          }}
        >
          Welcome to the WordCrafters Blog
        </h1>
        <p
          style={{
            fontSize: "15px",
            color: "#333",
          }}
        >
          A trusted place to learn how to successfully publish your book
        </p>
      </div>
    </div>
  );
}

export default Blog;
