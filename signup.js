const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Dummy in-memory storage (optional, for test only)
const users = [];

// Register route
app.post("/api/register", (req, res) => {
  const { name, email, password } = req.body;
  if (users.find(user => user.email === email)) {
    return res.status(400).json({ message: "Email already registered" });
  }
  users.push({ name, email, password });
  res.status(201).json({ message: "User registered successfully" });
});

// Login route
app.post("/api/users/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  res.json({ message: "Login successful", token: "fake-token-123" });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
