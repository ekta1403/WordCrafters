import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/authContext";

function Profile() {
  const { currentUser } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        if (!currentUser || !currentUser.id) {
          console.error("No authenticated user found.");
          setLoading(false);
          return;
        }

        const token = localStorage.getItem("token");
        if (!token) {
          console.error("No access token found. User is not authenticated.");
          setLoading(false);
          return;
        }

        const response = await axios.get(
          `http://localhost:5000/api/auth/profile/${currentUser.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setProfile(response.data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [currentUser]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profile) {
    return <div>No profile data available.</div>;
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
    <div className="card shadow-lg p-4" style={{ width: "400px", borderRadius: "12px" }}>
      {/* Profile Header */}
      <div className="text-center">
        <img
          className="rounded-circle border border-primary"
          src={profile.profile_picture || "https://via.placeholder.com/150"}
          alt="Profile"
          width="120"
          height="120"
        />
      </div>

      {/* Profile Info */}
      <div className="text-center mt-3">
        <h2 className="fw-bold">{profile.full_name || "Profile Name"}</h2>
        <p className="text-muted">@{profile.username || "username"}</p>
        <p className="text-secondary">{profile.bio || "No bio available."}</p>
      </div>

      {/* Other Info */}
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><strong>City:</strong> {profile.location || "Not specified"}</li>
        <li className="list-group-item">
          <strong>Website:</strong>{" "}
          {profile.website ? (
            <a href={profile.website} target="_blank" rel="noopener noreferrer">
              {profile.website}
            </a>
          ) : (
            "Not provided"
          )}
        </li>
        <li className="list-group-item">
          <strong>Joined:</strong> {profile.joinDate?.split("T")[0] || "Unknown"}
        </li>
      </ul>
    </div>
  </div>
  );
}

export default Profile;