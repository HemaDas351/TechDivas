const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  company: String,
  projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }],
});

module.exports = mongoose.model('Client', clientSchema);