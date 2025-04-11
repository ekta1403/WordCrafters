import express from "express";
import { registerUser, loginUser, logoutUser } from "../controllers/authController.js";
import { VERIFY_ACCESS_TOKEN } from "../middleware/jwtAuth.js";
import {
    getProfile,
    updateProfile,
    uploadProfilePicture,
} from "../controllers/profileController.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

/* Authentication Routes */
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", VERIFY_ACCESS_TOKEN, logoutUser);


/* User Profile Routes */
router.get("/profile/:userId",  getProfile);
router.put("/profile/:userId", VERIFY_ACCESS_TOKEN, updateProfile);
router.post("/profile/:userId/upload", VERIFY_ACCESS_TOKEN, upload.single("profilePicture"), uploadProfilePicture);

export default router;
