const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load env variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

const projectRoutes = require('./routes/projectRoutes');
app.use('/api/projects', projectRoutes);

const ticketRoutes = require('./routes/ticketRoutes');
app.use('/api/tickets', ticketRoutes);

const clientDashboard = require('./routes/clientDashboard');
app.use('/api/client/dashboard', clientDashboard);

const adminDashboard = require('./routes/adminDashboard');
app.use('/api/admin/dashboard', adminDashboard);

// Test route
app.get("/", (req, res) => {
  res.send('💡 HR Dashboard Backend Running');
});

app.get("/test", (req, res) => {
  res.json({ message: "Frontend connected!" });
});

// ✅ FIXED: Template literal for PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("🚀 Server running on port ${PORT}");
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'frontend/404.html'));
});

const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);