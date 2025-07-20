const mongoose = require('mongoose');

const updateSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  createdBy: {
    type: String,
    default: 'Admin'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Update', updateSchema);