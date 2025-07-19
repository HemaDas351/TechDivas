const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');
const Ticket = require('../models/Ticket');
const ticketController=require('../controllers/ticketsController');

// Create a ticket
router.post('/create', verifyToken, async (req, res) => {
  try {
    const ticket = new Ticket(req.body);
    await ticket.save();
    res.json(ticket);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all tickets
router.get('/', verifyToken, async (req, res) => {
  const tickets = await Ticket.find()
    .populate('project')
    .populate('raisedBy');
  res.json(tickets);
});

router.put('/:id', ticketController.updateTicket);

module.exports = router;