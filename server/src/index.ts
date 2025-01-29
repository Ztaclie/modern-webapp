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

// Define Quote interface
interface Quote {
  id?: string;
  title: string;
  message: string;
  author?: string;
}

// Sample quotes storage (replace with MongoDB later)
let quotes: Quote[] = [
  {
    id: "1",
    title: "Success",
    message: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
];

// GET - Retrieve all quotes
app.get("/api/quotes", (req, res) => {
  res.json(quotes);
});

// GET - Retrieve single quote
app.get("/api/quotes/:id", (req, res) => {
  const quote = quotes.find((q) => q.id === req.params.id);
  if (!quote) {
    return res.status(404).json({ message: "Quote not found" });
  }
  res.json(quote);
});

// POST - Create new quote
app.post("/api/quotes", (req, res) => {
  const newQuote: Quote = {
    id: Date.now().toString(),
    title: req.body.title,
    message: req.body.message,
    author: req.body.author,
  };
  quotes.push(newQuote);
  res.status(201).json(newQuote);
});

// PUT - Update quote
app.put("/api/quotes/:id", (req, res) => {
  const index = quotes.findIndex((q) => q.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: "Quote not found" });
  }

  quotes[index] = {
    ...quotes[index],
    ...req.body,
    id: req.params.id,
  };

  res.json(quotes[index]);
});

// PATCH - Partial update quote
app.patch("/api/quotes/:id", (req, res) => {
  const index = quotes.findIndex((q) => q.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: "Quote not found" });
  }

  quotes[index] = {
    ...quotes[index],
    ...req.body,
  };

  res.json(quotes[index]);
});

// DELETE - Remove quote
app.delete("/api/quotes/:id", (req, res) => {
  const index = quotes.findIndex((q) => q.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: "Quote not found" });
  }

  quotes.splice(index, 1);
  res.status(204).send();
});

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
