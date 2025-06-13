import React, { useEffect, useState } from "react";
import Session from "./Session";
import "../style/Home.css";


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
  }, []);

  return (
    <>
      <div
        className="home-container"
        style={{ "--bg-color": colors[currentColor] }}
      >
        {/* Left Content */}
        <div className="home-left">
          <h1 className="home-heading">
            Where beautiful <br />
            <span style={{ color: "#7b2cbf" }}>
              {words[currentWordIndex]}
            </span>{" "}
            books <br /> are made
          </h1>
          <p className="home-paragraph">
            Meet the editor, designer, or marketer who can help bring your book
            to life.
          </p>

         
          <form className="home-form">
            <input
              type="email"
              placeholder="Enter your email..."
              required
              className="home-input"
            />
            <button type="submit" className="home-button">
              Get started
            </button>
          </form>

          {/* Social Signup */}
          <p className="home-social">
            Sign up with{" "}
            <span className="facebook">Facebook</span> or{" "}
            <span className="google">Google</span>
          </p>
        </div>

        {/* Right Content - Image */}
        <div className="home-right">
          <img
            src={images[currentImage]}
            alt="Book Category"
            className="home-image"
          />
        </div>
      </div>

      <Session />
    </>
  );
}

export default Home;
