import { useEffect, useState } from "react";
import axios from "axios";

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    bio: "",
    role: "",
    location: "",
    website: "",
  });
  const [profilePicture, setProfilePicture] = useState(null);

  const user = JSON.parse(localStorage.getItem("user"));
  const accessToken = localStorage.getItem("AccessToken");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/profile/${user.id}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
            withCredentials: true,
          }
        );
        setProfile(res.data);
        setFormData({
          bio: res.data.bio || "",
          role: res.data.role || "",
          location: res.data.location || "",
          website: res.data.website || "",
        });
      } catch (err) {
        console.error("Failed to load profile", err);
       }
    };

    if (user && accessToken) {
      fetchProfile();
    }
  }, [user, accessToken]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleProfileUpdate = async () => {
    try {
      await axios.put(
        `http://localhost:5000/api/profile/${user.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        }
      );
      setEditing(false);
    } catch (err) {
      console.error("Update failed", err);
    }
  };

  const handlePictureUpload = async () => {
    if (!profilePicture) return;
    const form = new FormData();
    form.append("profilePicture", profilePicture);

    try {
      const res = await axios.post(
        `http://localhost:5000/api/profile/${user.id}/upload`,
        form,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      setProfile((prev) => ({
        ...prev,
        profile_picture: res.data.profilePicture,
      }));
      setProfilePicture(null);
    } catch (err) {
      console.error("Failed to upload image", err);
    }
  };

  if (!profile) return <div className="container mt-5">Loading profile...</div>;

  return (
    <div className="container mt-5" style={{ maxWidth: "700px" }}>
      <h2>My Profile</h2>

      {/* Profile Picture */}
      <div className="mb-3">
        <img
          src={profile.profile_picture || "https://via.placeholder.com/100"}
          alt="Profile"
          style={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        <div className="mt-2">
          <input
            type="file"
            onChange={(e) => setProfilePicture(e.target.files[0])}
          />
          <button
            className="btn btn-sm btn-primary ms-2"
            onClick={handlePictureUpload}
          >
            Upload
          </button>
        </div>
      </div>

      {/* Info */}
      <p>
        <strong>Name:</strong> {profile.F_name} {profile.L_name}
      </p>
      <p>
        <strong>Email:</strong> {profile.email}
      </p>

      {/* Editable Fields */}
      {editing ? (
        <>
          <div className="mb-2">
            <label>Bio</label>
            <textarea
              name="bio"
              className="form-control"
              value={formData.bio}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label>Role</label>
            <input
              type="text"
              name="role"
              className="form-control"
              value={formData.role}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label>Location</label>
            <input
              type="text"
              name="location"
              className="form-control"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label>Website</label>
            <input
              type="text"
              name="website"
              className="form-control"
              value={formData.website}
              onChange={handleChange}
            />
          </div>
          <button
            className="btn btn-success me-2"
            onClick={handleProfileUpdate}
          >
            Save
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => setEditing(false)}
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <p>
            <strong>Bio:</strong> {profile.bio || "N/A"}
          </p>
          <p>
            <strong>Role:</strong> {profile.role || "N/A"}
          </p>
          <p>
            <strong>Location:</strong> {profile.location || "N/A"}
          </p>
          <p>
            <strong>Website:</strong> {profile.website || "N/A"}
          </p>
          <button className="btn btn-primary" onClick={() => setEditing(true)}>
            Edit Profile
          </button>
        </>
      )}
    </div>
  );
};

export default ProfilePage;
