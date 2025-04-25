import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Marketplace from "../components/Marketplace.jsx";
import Projects from "../components/Projects.jsx";

const ProfileNavbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [activeComponent, setActiveComponent] = useState("marketplace");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("AccessToken");
    localStorage.removeItem("user");
    navigate("/");
  };

  const getInitials = (fname, lname) => {
    return `${fname?.[0] || ""}${lname?.[0] || ""}`.toUpperCase();
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg sticky-top px-4 py-2 "
        style={{ backgroundColor: "#26343f" }}
      >
        <div
          className="container d-flex justify-content-between"
          style={{ maxWidth: "1080px" }}
        >
          <Link className="navbar-brand fw-bold text-white" to="/">
            WordCrafters
          </Link>

          <div className="d-none d-lg-flex gap-4 ">
            <Link
              className={`nav-link text-white btn btn-link ${
                activeComponent === "marketplace"
                  ? "border-bottom fw-bold"
                  : ""
              }`}
              to="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveComponent("marketplace");
              }}
            >
              Marketplace
            </Link>

            <Link
              className={`nav-link text-white btn btn-link ${
                activeComponent === "Projects"
                  ? "border-bottom border-1 border-white fw-bold"
                  : ""
              }`}
              to="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveComponent("Projects");
              }}
            >
              Projects
            </Link>
            <Link className="nav-link text-white" to="/app">
              Books
            </Link>
            <Link className="nav-link text-white" to="/tools">
              Learning
            </Link>
            <Link className="nav-link text-white" to="/about">
              Help
            </Link>
          </div>

          <div className="d-flex align-items-center gap-3">
            <button className="btn btn-outline-light btn-sm rounded-circle">
              <i className="bi bi-bell"></i>
            </button>
            <button className="btn btn-outline-light btn-sm rounded-circle">
              <i className="bi bi-envelope"></i>
            </button>

            {/* Profile  */}
            {user ? (
              <div className="dropdown">
                <button
                  className="btn d-flex align-items-center gap-1 w-auto  rounded-pill "
                  style={{
                    backgroundColor: "#455a64",
                    color: "white",
                    padding: "2px",
                  }}
                  type="button"
                  id="profileDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {/* Profile initials or image */}
                  {user.profile_picture ? (
                    <img
                      src={user.profile_picture}
                      alt="Profile"
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        width: "35px",
                        height: "30px",
                        borderRadius: "50%",
                        backgroundColor: "#c5cae9",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "bold",
                        fontSize: ".8rem",
                      }}
                    >
                      {getInitials(user.F_name, user.L_name)}
                    </div>
                  )}
                  {/* Name */}
                  <span className="fw-bold">
                    {user.F_name.charAt(0).toUpperCase() +
                      user.F_name.slice(1).toLowerCase()}
                  </span>

                  {/* Bootstrap dropdown caret will auto-appear */}
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-end shadow rounded"
                  aria-labelledby="profileDropdown"
                  style={{ minWidth: 220 }}
                >
                  <li className="px-3 py-2">
                    <div className="fw-semibold">
                      {user.F_name} {user.L_name}
                    </div>
                    {user.email && (
                      <small className="text-muted">{user.email}</small>
                    )}
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/profile">
                      My Profile
                    </Link>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/login" className="btn btn-primary">
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>

      <div>
        <div className="content">
          {activeComponent === "marketplace" && <Marketplace />}
          {activeComponent === "Projects" && <Projects />}
        </div>
      </div>
    </>
  );
};

export default ProfileNavbar;
