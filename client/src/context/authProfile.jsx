import axios from "axios";
import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ProfileContext = createContext();

export const ProfileContextProvider = ({ children }) => {
  const [profile, setProfile] = useState(() => {
    try {
      const savedProfile = localStorage.getItem("profile");
      return savedProfile ? JSON.parse(savedProfile) : null;
    } catch (e) {
      console.error("Error parsing profile data from localStorage", e);
      return null;
    }
  });

  useEffect(() => {
    const savedProfile = localStorage.getItem("profile");
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }
  }, []);

  const fetchProfile = async (userId) => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        console.error("No access token found. User is not authenticated.");
        return;
      }

      const res = await axios.get(`http://localhost:5000/api/users/profile/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      localStorage.setItem("profile", JSON.stringify(res.data));
      setProfile(res.data);
    } catch (err) {
      console.error("Failed to fetch profile:", err);
    }
  };

  const updateProfile = async (userId, profileData) => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        console.error("No access token found.");
        return;
      }

      const res = await axios.put(`http://localhost:5000/api/users/profile/${userId}`, profileData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      localStorage.setItem("profile", JSON.stringify(res.data));
      setProfile(res.data);
    } catch (err) {
      console.error("Failed to update profile:", err);
    }
  };

  const updateProfilePicture = async (userId, profilePic) => {
    try {
      const formData = new FormData();
      formData.append("profilePic", profilePic);

      const token = localStorage.getItem("accessToken");
      if (!token) {
        console.error("No access token found.");
        return;
      }

      const res = await axios.post(`http://localhost:5000/api/users/profile/${userId}/upload`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      const updatedProfile = { ...profile, profilePic: res.data.profilePic };
      localStorage.setItem("profile", JSON.stringify(updatedProfile));
      setProfile(updatedProfile);
    } catch (err) {
      console.error("Failed to update profile picture:", err);
    }
  };

  return (
    <ProfileContext.Provider value={{ profile, fetchProfile, updateProfile, updateProfilePicture }}>
      {children}
    </ProfileContext.Provider>
  );
};
