import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Navbar = () => {
  // const { currentUser, logout } = useContext(AuthContext);
  const [scrolled, setScrolled] = useState(false);
  const [activeComponent, setActiveComponent] = useState("connect");

  // const handleLogout = async () => {
  //   await logout();
  // };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top fw-bold ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
      style={{
        transition: "background-color 0.3s ease, box-shadow 0.3s ease",
        zIndex: 999,
      }}
    >
      <div className="container fs-6">
        <button
          className="navbar-toggler me-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <a
          className="navbar-brand ml-3"
          style={{
            color: "#7b2cbf",
            fontWeight: "700",
            cursor: "pointer",
            fontSize: "1.8rem",
          }}
          href="#"
        >
          WordCrafters
        </a>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-3">
              {/* <Link className="nav-link active" to="/">
                Connect
              </Link> */}

              <Link
                className={`nav-link  btn btn-link ${
                  activeComponent === "Connect" ? " fw-bold " : ""
                }`}
                to="/"
                onClick={() => {
                  // e.preventDefault();
                  setActiveComponent("Connect");
                }}
              >
                Connect
              </Link>
            </li>
            <li className="nav-item mx-3">
              {/* <Link className="nav-link" to="/blog">
                Blog
              </Link> */}
              <Link
                className={`nav-link  btn btn-link ${
                  activeComponent === "Blog" ? " fw-bold" : ""
                }`}
                to="/blog"
                onClick={() => {
                  setActiveComponent("Blog");
                }}
              >
                Blog
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link
                className={`nav-link  btn btn-link ${
                  activeComponent === "App" ? " fw-bold" : ""
                }`}
                to="/app"
                onClick={() => {
                  setActiveComponent("App");
                }}
              >
                App
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link
                className={`nav-link  btn btn-link ${
                  activeComponent === "Tools" ? " fw-bold" : ""
                }`}
                to="/tools"
                onClick={() => {
                  setActiveComponent("Tools");
                }}
              >
                Tools
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link
                className={`nav-link  btn btn-link ${
                  activeComponent === "About" ? " fw-bold" : ""
                }`}
                to="/about"
                onClick={() => {
                  setActiveComponent("About");
                }}
              >
                About
              </Link>
            </li>
          </ul>
        </div>

        <Link
          to="/login"
          className="btn"
          style={{
            backgroundColor: "#7b2cbf",
            color: "white",
            fontWeight: "500",
            border: "none",
            padding: "5px 15px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Log In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
