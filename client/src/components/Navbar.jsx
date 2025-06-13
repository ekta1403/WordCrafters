import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeComponent, setActiveComponent] = useState("connect");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top fw-bold ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container  d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ border: "none" }}
          >
            <span className="navbar-toggler-icon" />
          </button>

          <a className="navbar-logo" href="#">
            WordCrafters
          </a>
        </div>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            {["Connect", "Blog", "App", "Tools", "About"].map((item) => (
              <li className="nav-item mx-2" key={item}>
                <Link
                  className={`nav-link ${activeComponent === item ? "fw-bold" : ""}`}
                  to={`/${item.toLowerCase()}`}
                  onClick={() => setActiveComponent(item)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Link to="/login" className="button mt-0">
          Log In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
