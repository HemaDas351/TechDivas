const Ticket = require('../models/Ticket');

// Create a new ticket
const createTicket = async (req, res) => {
  try {
    const ticket = new Ticket(req.body);
    await ticket.save();
    res.status(201).json(ticket);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all tickets
const getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find()
      .populate('project')
      .populate('raisedBy');
    res.status(200).json(tickets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a ticket
const updateTicket = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedTicket = await Ticket.findByIdAndUpdate(id, updates, { new: true });

    if (!updatedTicket) {
      return res.status(404).json({ message: "Ticket not found" });
    }

    res.status(200).json(updatedTicket);
  } catch (error) {
    res.status(500).json({ message: "Error updating ticket", error });
  }
};

module.exports = {
  createTicket,
  getAllTickets,
  updateTicket
};