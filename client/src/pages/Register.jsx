import { useState } from "react";
// import { registerUser } from "../services/api";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    F_name: "",
    L_name: "",
    email: "",
    password: "",
  });
  // const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const res = await registerUser(formData);
      // setMessage(res.data.message);
      await axios.post("http://localhost:5000/api/auth/register", formData);
      console.log(formData);
      alert("User registered successfully");
      navigate("/");

    } catch (error) {
      // setMessage(error.response?.data?.message || "Registration failed");
      console.log(error);
    }
  };
  
  return (
    <div
      className="d-flex align-items-center justify-content-center "
      style={{
        backgroundColor: "#e7ebed",
        height: "94vh",
      }}
    >
      <div className="container-fluid ">
        <div className="row justify-content-center">
          <div className="col-md-6 d-flex align-items-center">
            <div className="w-100 px-4">
              <h2 className="fw-bold text-dark">
                WordCrafters<span className="" style={{
                    color: "#7b2cbf"
                  }}>marketplace</span>
              </h2>

              <h3 className="fw-bold mt-3">
                Welcome to WordCrafters{" "}
                <span role="img" aria-label="wave">
                  👋
                </span>
              </h3>
              <p className="text-secondary">
                Continue with your social account:
              </p>

              <div className="d-flex gap-3">
                <button
                  className="btn btn-light border w-50"
                  style={{
                    backgroundColor: "#FFFFFF",
                    color: "#5F6368",
                    border: "1px solid #DADCE0",
                    padding: "8px 16px",
                    borderRadius: "5px",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src="https://cdn-icons-png.freepik.com/256/13170/13170545.png?ga=GA1.1.1056015979.1741176897&semt=ais_hybrid"
                    alt="Google"
                    width="20"
                    className="me-2"
                  />
                  Google
                </button>
                <button
                  className="btn btn-primary w-50"
                  style={{
                    backgroundColor: "#1877F2",
                    color: "white",
                    padding: "8px 16px",
                    borderRadius: "5px",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    cursor: "pointer",
                    border: "none",
                  }}
                >
                  <img
                    src="https://cdn-icons-png.freepik.com/256/12942/12942327.png?ga=GA1.1.1056015979.1741176897&semt=ais_hybrid"
                    alt="Google"
                    width="20"
                    className="me-2"
                  />
                  Facebook
                </button>
              </div>

              <p className="text-secondary mt-3">
                Or create a new WordCrafters account:
              </p>

              <input
                type="email"
                className="form-control my-2 "
                placeholder="Enter your email..."
                name="email"
                onChange={handleChange}
              />
              <input
                type="text"
                className="form-control my-2 "
                placeholder="First Name..."
                name="F_name"
                onChange={handleChange}
              />
              <input
                type="textl"
                className="form-control my-2"
                placeholder="Last Name..."
                name="L_name"
                onChange={handleChange}
              />
              <input
                type="password"
                className="form-control my-2"
                placeholder="Password..."
                name="password"
                onChange={handleChange}
              />

              <Link
                  to="/home"
                className="btn w-100 fw-bold"
                onClick={handleSubmit}
                style={{ backgroundColor: "#7b2cbf", color: "white" }}
              >
                Sign up
              </Link>

              <div
                 className="d-flex mt-3 text-secondary">
                Already got an account?
                <Link
                to="/login"
                  className="text-decoration-none fw-bold "
                  style={{ color: "#7b2cbf" }}
                >
                   Log in
                </Link>
              </div>
              <div className="d-flex flex-wrap mt-3 text-secondary">
                By creating an account, you accept our{"   "}
                <a
                  href="#"
                  className="text-decoration-none fw-bold "
                  style={{ color: "#7b2cbf" }}
                >
                  -terms of service.
                </a>
              </div>
              {/* <p className=" mt-2 text-secondary">
                By creating an account, you accept our{" "}
                <a
                  href="#"
                  className="text-decoration-none "style={{ color: "#8CC63F" }}
                >
                  terms of service.
                </a>
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
