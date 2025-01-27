import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/myapp")
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

// Quote interface
interface Quote {
  title: string;
  message: string;
}

// Daily quote route
app.get("/api/quote", (req, res) => {
  const todayQuote: Quote = {
    title: "Today's Inspiration",
    message: "The only way to do great work is to love what you do.",
  };
  res.json(todayQuote);
});

// Basic route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
