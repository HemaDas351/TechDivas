const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const users = []; // In-memory for demo

// Registration route
app.post("/api/register", (req, res) => {
  const { name, email, password } = req.body;

  // Check if user exists
  const existing = users.find(user => user.email === email);
  if (existing) {
    return res.status(400).json({ message: "User already exists" });
  }

  users.push({ name, email, password });
  res.status(201).json({ message: "User registered successfully" });
});

// Login route
app.post("/api/users/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.name === username && u.password === password);
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json({ message: "Login successful", user });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
