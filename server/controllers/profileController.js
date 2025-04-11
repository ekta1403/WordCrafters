import { findUserProfileById, upsertUserProfile, updateProfilePicture } from "../models/Profile.Model.js";
import cloudinary from "../config/cloudinary.js";
// Get User Profile

export const getProfile = async (req, res) => {

  const userId = req.params.userId;
  // console.log("Extracted userId:", userId);

  if (!userId) return res.status(400).json({ message: "User ID is required" });
  try {
    const profile = await findUserProfileById(userId);
    if (!profile) {

      return res.status(404).json({ message: "Profile not found" });
    }

    // console.log("Profile found:", profile);
    res.json(profile);
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};




// Create or Update Profile
export const updateProfile = async (req, res) => {
  const userId = req.params.userId;
  const { bio, role, location, website } = req.body;

  try {
    await upsertUserProfile(userId, bio, role, location, website);

    res.json({ message: "Profile updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};




// Upload Profile Picture
export const uploadProfilePicture = async (req, res) => {
  const userId = req.params.userId;

  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  try {
    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "profile_pictures",
    });

    // Save the URL to the database
    await updateProfilePicture(userId, result.secure_url);

    res.json({ message: "Profile picture updated successfully", profilePicture: result.secure_url });
  } catch (error) {
    res.status(500).json({ message: "Cloudinary upload failed", error: error.message });
  }
};
