const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: { type: String, default: 'Open' }, // Open, In Progress, Closed
  createdAt: { type: Date, default: Date.now },
  project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
  raisedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },
});

module.exports = mongoose.model('Ticket', ticketSchema);