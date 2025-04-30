import React, { useEffect, useState } from "react";
import Session from "./Session";
// import "../style/Home.css"

function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentColor, setCurrentColor] = useState(0);

  const images = [
    "https://assets-cdn.reedsy.com/assets/landing/landing-v2/index/adventure-8ebc331f6001ab3c274fcd64c62bf0e8ff6184be3f3ec8866e269db41c2aa4ff.svg",
    "https://assets-cdn.reedsy.com/assets/landing/landing-v2/index/mystery-8f4fff9dad01d9375a3ea1fe0519428036ad1f394dfae203842db4afffa55414.svg",
    "https://assets-cdn.reedsy.com/assets/landing/landing-v2/index/self-help-1d3ba3278a473a0f5c2ce2352ada3fbc80184f5fcc5a0e8338f18355de361144.svg",
  ];

  const words = ["adventure", "mystery", "self-help"];
  const colors = ["#f4f8ec", "#e7f0ff", "#fff4e6"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
      setCurrentColor((prev) => (prev + 1) % colors.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length, words.length, colors.length]);

  return (
    <>
      <div
        style={{
          backgroundColor: colors[currentColor],
          display: "flex",
          // flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          padding: "1px  10%",
          maxHeight: "65vh",
          width: "100%",
        }}
      >
        {/* Left Content */}
        <div className="flex justify-content-center align-items-center"
          style={{
            flex: 1,
            minWidth: "300px",
            maxWidth: "600px",
            marginTop: "100px",
            marginLeft:"30px"
          }}
        >
          <h1 style={{ fontSize: "3rem", fontWeight: "bold", color: "#333" }}>
            Where beautiful <br />
            <span className="typed-text" style={{ color: "#7b2cbf" }}>
              {words[currentWordIndex]}
            </span>{" "}
            books <br /> are made
          </h1>
          <p style={{ fontSize: "1.34rem", color: "#555", marginTop: "15px" }}>
            Meet the editor, designer, or marketer who can help bring your book
            to life.
          </p>

          {/* Email Form */}
          <form
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginTop: "20px",
            }}
          >
            <input
              type="email"
              placeholder="Enter your email..."
              required
              style={{
                padding: "12px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                flex: 1,
                fontSize: "1rem",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "12px 20px",
                backgroundColor: "#7b2cbf",
                color: "white",
                fontSize: "1rem",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "background 0.3s",
              }}
            >
              Get started
            </button>
          </form>

          {/* Social Signup */}
          <p className=" mt-2" style={{ fontSize: "1rem", color: "#555" }}>
            Sign up with{" "}
            <span
              style={{
                color: "#1877F2",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Facebook
            </span>{" "}
            or{" "}
            <span
              style={{
                color: "#DB4437",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Google
            </span>
          </p>
        </div>

        {/* Right Content - Image */}
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "55vh",
            marginLeft: "150px",
            marginTop: "140px",
          }}
        >
          <img
            src={images[currentImage]}
            alt="Book Category"
            style={{
              maxWidth: "90%",
              height: "auto",
              transition: "opacity 0.5s ease-in-out",
            }}
          />
        </div>
      </div>

      <Session />
    </>
  );
}

export default Home;
