const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

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

app.get('/', (req, res) => {
  res.send('💡 HR Dashboard Backend Running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("🚀 Server running on port ${PORT}")
});