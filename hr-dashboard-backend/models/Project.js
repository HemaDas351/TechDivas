const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  deliverables: [String],
  status: { type: String, default: 'Ongoing' },
  deadline: Date,
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },
});

module.exports = mongoose.model('Project', projectSchema);