import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const result = await login(formData);
    if (result.success) {
      navigate("/profile");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "94vh" }}
    >
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-6 d-flex align-items-center">
            <div className="w-100 px-4">
              <h2 className="fw-bold text-dark">
                WordCrafters{" "}
                <span className="fw-bold" style={{ color: "#7b2cbf" }}>
                  marketplace
                </span>
              </h2>

              <h3 className="fw-bold mt-3">Welcome back 👋</h3>
              <p className="text-secondary">
                Continue with your social account:
              </p>

              <div className="d-flex gap-3">
                <button className="btn btn-light border w-50">
                  <img
                    src="https://cdn-icons-png.freepik.com/256/13170/13170545.png"
                    alt="Google"
                    width="20"
                    className="me-2"
                  />
                  Google
                </button>
                <button className="btn btn-primary w-50">
                  <img
                    src="https://cdn-icons-png.freepik.com/256/12942/12942327.png"
                    alt="Facebook"
                    width="20"
                    className="me-2"
                  />
                  Facebook
                </button>
              </div>

              <p className="text-secondary mt-3">
                Or log in with your WordCrafters account:
              </p>
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  className="form-control my-2"
                  placeholder="Enter your email..."
                  onChange={handleChange}
                  required
                />
                <input
                  type="password"
                  name="password"
                  className="form-control my-2"
                  placeholder="Password..."
                  onChange={handleChange}
                  required
                />
                <button
                  type="submit"
                  className="btn w-100"
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
                  Log in
                </button>
              </form>

              {error && (
                <p className="text-danger mt-2" style={{ fontWeight: 500 }}>
                  {error?.message }
                </p>
              )}

              <div className="d-flex justify-content-between mt-3 text-secondary">
                <a href="#" className="text-decoration-none text-secondary">
                  Forgot your password?
                </a>
                <a href="#" className="text-decoration-none text-secondary">
                  Send a magic link
                </a>
              </div>
              <p className="mt-2">
                Need to create an account?{" "}
                <Link
                  to="/register"
                  className="text-decoration-none fw-bold"
                  style={{ color: "#7b2cbf" }}
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
