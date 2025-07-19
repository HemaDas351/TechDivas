const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');
const User = require('../models/User');
const Project = require('../models/Project');
const Ticket = require('../models/Ticket');

// Only allow access to admins
router.get('/', verifyToken, async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied' });
    }

    const users = await User.find({ role: 'client' }).select('-password');
    const projects = await Project.find();
    const tickets = await Ticket.find();

    res.json({ users, projects, tickets });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;