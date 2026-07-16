import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("AI Nexus Backend is Running ");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});