
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from './config/db.js'
import cookieParser from 'cookie-parser';
import  userRoutes from "./routes/user.Router.js"

dotenv.config();
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",  
    credentials: true, 
  })
);

app.use("/api/auth", userRoutes);

db.getConnection((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    process.exit(1);
  }
  console.log("Connected to MySQL");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
