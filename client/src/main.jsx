import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthContextProvider } from "./context/authContext.jsx";
import { ProfileContextProvider } from "./context/authProfile.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
    <ProfileContextProvider>
      <App />
      </ProfileContextProvider >
    </AuthContextProvider>
  </StrictMode>
);
