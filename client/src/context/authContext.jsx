// import axios from "axios";
// import { createContext, useEffect, useState } from "react";

// // eslint-disable-next-line react-refresh/only-export-components
// export const AuthContext = createContext();

// export const AuthContextProvider = ({ children }) => {

//     const [currentUser, setCurrentUser] = useState(() => {
//         try {
//             const savedUser = localStorage.getItem("user");
//             return savedUser ? JSON.parse(savedUser) : null;
//         } catch (e) {
//             console.error("Error parsing user data from localStorage", e);
//             return null;
//         }
//     });

//     useEffect(() => {
//         const savedUser = localStorage.getItem("user");
//         if (savedUser) {
//             setCurrentUser(JSON.parse(savedUser));
//         }
//     }, []);

//     const login = async (inputs) => {
//         try {
//             const res = await axios.post("/api/auth/login", inputs, { withCredentials: true });
//             localStorage.setItem("user", JSON.stringify(res.data.user));
//             localStorage.setItem("AccessToken", res.data.accessToken);

//             setCurrentUser(res.data.user);

//         } catch (err) {
//             console.error("Login failed", err);
//         }
//     };

//     const logout = async () => {
//         try {
//             // const token = localStorage.getItem("AccessToken");
//             // console.log("Sending token for logout:", AccessToken);

//             await axios.post("/api/auth/logout", {}, {
//                 withCredentials: true,
//                 headers: { Authorization: `Bearer ${localStorage.getItem("AccessToken")}` },
//             });

//             localStorage.removeItem("user");
//             localStorage.removeItem("AccessToken");
//             setCurrentUser(null);
//         } catch (err) {
//             console.error("Logout failed:", err.response ? err.response.data : err.message);
//         }
//     };

//     return (
//         <AuthContext.Provider value={{ currentUser, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

// eslint-disable-next-line react-refresh/only-export-components
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
      } else {
        console.error("Login response is missing expected data:", res.data);
      }
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  const logout = async () => {
    try {
      const token = localStorage.getItem("AccessToken"); 
      if (!token) {
        console.warn(
          "No token found in localStorage, skipping logout request."
        );
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

      // Clear user data from localStorage
      localStorage.removeItem("user");
      localStorage.removeItem("AccessToken");
      Cookies.remove("accessToken", { path: '/' });
      
      setCurrentUser(null);
    } catch (err) {
      console.error(
        "Logout failed:",
        err.response ? err.response.data : err.message
      );
    }
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
