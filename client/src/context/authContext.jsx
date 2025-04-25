// /context/authContext.jsx

import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem("user");
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (e) {
      console.error("Error parsing user data from localStorage", e);
      return null;
    }
  });

  useEffect(() => {
    try {
      const savedUser = localStorage.getItem("user");
      if (savedUser) {
        setCurrentUser(JSON.parse(savedUser));
      }
    } catch (e) {
      console.error("Error parsing user data from localStorage", e);
    }
  }, []);

  const login = async (inputs) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        inputs,
        { withCredentials: true }
      );

      if (res.data && res.data.data) {
        const { accessToken, user } = res.data.data;
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("AccessToken", accessToken);
        setCurrentUser(user);
        return { success: true };
      } else {
        return { success: false, message: "Invalid server response." };
      }
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
      return {
        success: false,
        message: err.response?.data || "Login failed",
      };
    }
  };

  const logout = async () => {
    try {
      const token = localStorage.getItem("AccessToken");
      if (!token) {
        console.warn("No token found in localStorage.");
      } else {
        await axios.post(
          "http://localhost:5000/api/auth/logout",
          {},
          {
            withCredentials: true,
            headers: { Authorization: `Bearer ${token}` },
          }
        );
      }

      localStorage.removeItem("user");
      localStorage.removeItem("AccessToken");
      Cookies.remove("accessToken", { path: '/' });
      setCurrentUser(null);
    } catch (err) {
      console.error("Logout failed:", err.response?.data || err.message);
    }
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
