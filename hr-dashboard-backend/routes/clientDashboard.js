const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');
const Project = require('../models/Project');
const Ticket = require('../models/Ticket');
const clientController = require('../controllers/clientController');

// GET / -> Dashboard route: Get client projects and tickets
router.get('/', verifyToken, async (req, res) => {
  try {
    const clientId = req.user.id;

    const projects = await Project.find({ client: clientId });
    const tickets = await Ticket.find({ raisedBy: clientId });

    res.json({ projects, tickets });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT /:id -> Update client info
router.put('/:id', verifyToken, clientController.updateClient);

module.exports = router;