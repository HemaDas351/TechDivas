const Ticket = require('../models/Ticket');

const updateTicket = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updated = await Ticket.findByIdAndUpdate(id, updates, { new: true });

    if (!updated) {
      return res.status(404).json({ message: "Ticket not found" });
    }

    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: "Error updating ticket", error });
  }
};