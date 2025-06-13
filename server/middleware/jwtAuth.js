import jwt from 'jsonwebtoken';
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
const app = express();
dotenv.config();
 
app.use(cookieParser()); 


const JWT_ACCESS_SECRET = process.env.ACCESS_TOKEN_SECRET;
const JWT_REFRESH_SECRET = process.env.REFRESH_TOKEN_SECRET;
 
//GENERATE ACCESS TOKEN(short-live)
export const generateAccessToken = (user) => {
    const payload = {
        id: user.id,
        F_name: user.F_name,
        L_name: user.L_name,
        email: user.email
    };
    const token = jwt.sign(payload, JWT_ACCESS_SECRET,
        {
            expiresIn : '10seconds'
        }
    );
    return token;
}

 
//GENERATE REFRESH TOKEN(long-live)
export const generateRefreshToken = (user) => {
    const payload = {
        id: user.id,
        F_name: user.F_name,
        L_name: user.L_name,
        email: user.email
    };
    const token = jwt.sign(payload, JWT_REFRESH_SECRET,
        {
            expiresIn : "20d"
        }
    );
    return token;
}
 
//VERIFY ACCESS TOKEN
export const VERIFY_ACCESS_TOKEN = (req, res, next) => {
    const token = req.headers.authorization
    ? req.headers.authorization.split(" ")[1]
    : req.cookies.accessToken;

      if (!token) {
          return res.status(401).json("Not authenticated!");
      }
  
      try {
          const decoded = jwt.verify(token, JWT_ACCESS_SECRET);
          req.user = decoded;  
          next();
      } catch (error) {
          return res.status(403).json("Token is not valid!");
      }
  };
  
  
//VERIFY REFRESH TOKEN
export const VERIFY_REFRESH_TOKEN = (req, res, next) => {
    const token = req.cookies.refreshToken;
    if(!token) return res.status(401).json("Not authenticated!");
    try {
       const decoded = jwt.verify(token, JWT_REFRESH_SECRET);
       req.user = decoded;
       next();
    } catch (error) {
       return res.status(403).json("Token is not valid!");
    }
}