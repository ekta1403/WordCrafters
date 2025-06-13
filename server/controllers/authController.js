import bcrypt from "bcryptjs"
import { findUserByEmail, createUser } from '../models/User.Model.js';
import {
  generateAccessToken,
  generateRefreshToken,
} from "../middleware/jwtAuth.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export const registerUser = async (req, res) => {
  try {
      const{ F_name,L_name, email, password } = req.body;
      console.log(req.body);

      if (!F_name || !L_name || !email || !password) {
          throw new ApiError(400, "All fields are required");
      }

      const existingUser = await findUserByEmail(email);

      if (existingUser) {
          throw new ApiError(409, "User already exists");
      }

      const hashedPassword = await bcrypt.hash(password, 10);


      const createdUser = await createUser(F_name,L_name, email, hashedPassword);

      return res.status(201).json(
          new ApiResponse(201, { user: createdUser }, "User registered successfully")
      );

  } catch (error) {
      console.error(error);

      return res.status(error.statusCode || 500).json({
          message: error.message || "Something went wrong while registering the user",
      });
  }
};


export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await findUserByEmail(email);
    if (!user) {
      throw new ApiError(404 , "user does not exist")
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new ApiError(401, "Invalid credentials")
    }

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    const cookieOptions = {
      httpOnly: true,
      sameSite: "None",
      secure:false
    };

     const { password: _, refreshToken: __, ...userWithoutPassword } = user;

    return res
    .status(200)
    .cookie("accessToken", accessToken,cookieOptions)
    .cookie("refreshToken", refreshToken, cookieOptions)
    .json(
        new ApiResponse(
            200,
            {
                user: userWithoutPassword, accessToken, refreshToken
            },
            "User logged In successfully"

        )
      )

  } catch (error) {
    res.status(500).json({ message: "Database error", error });
  }
};

 
export const logoutUser = (req, res) => {
  try {
      // Extract accessToken or refreshToken from cookies or Authorization header
      const token = req.cookies.accessToken || 
                    req.cookies.refreshToken || 
                    (req.headers.authorization && req.headers.authorization.split(" ")[1]);

      if (!token) {
          return res.status(401).json(new ApiError(401, "No token provided"));
      }

      
      res.clearCookie("accessToken", {
          httpOnly: true,
          secure: true,
          sameSite: "None",
      });

      res.clearCookie("refreshToken", {
          httpOnly: true,
          secure: true,
          sameSite: "None",
      });

      return res.status(200).json(new ApiResponse(200, {}, "User Logged Out"));
  
  } catch (error) {
      console.error("Logout failed:", error);
      return res.status(500).json(new ApiError(500, "Logout failed"));
  }
};


export const refreshAccessToken = (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.status(401).json({ message: "Refresh token required" });

    try {
        const user = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

        const newAccessToken = generateAccessToken(user);
        const newRefreshToken = generateRefreshToken(user); 

        res
          .cookie("accessToken", newAccessToken, {
              httpOnly: true,
              secure: true,
              sameSite: "Strict",
              maxAge: 24 * 60 * 60 * 1000
          })
          .cookie("refreshToken", newRefreshToken, {
              httpOnly: true,
              secure: true,
              sameSite: "Strict",
              maxAge: 20 * 24 * 60 * 60 * 1000
          })
          .json({ accessToken: newAccessToken });

    } catch (error) {
        return res.status(403).json({ message: "Invalid or expired refresh token" });
    }
};
