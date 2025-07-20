const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');
const ticketController = require('../controllers/ticketsController');

// Create a ticket
router.post('/create', verifyToken, ticketController.createTicket);

// Get all tickets
router.get('/', verifyToken, ticketController.getAllTickets);

// Update a ticket
router.put('/:id', verifyToken, ticketController.updateTicket);

module.exports = router;