const Update = require('../models/update');

// Create new update
const createUpdate = async (req, res) => {
  try {
    const { title, message, createdBy } = req.body;
    const update = new Update({ title, message, createdBy });
    await update.save();
    res.status(201).json(update);
  } catch (err) {
    res.status(500).json({ message: 'Error creating update', error: err });
  }
};

// Get all updates
const getAllUpdates = async (req, res) => {
  try {
    const updates = await Update.find().sort({ createdAt: -1 });
    res.status(200).json(updates);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching updates', error: err });
  }
};

// Update an existing update
const updateUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Update.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Error updating update', error: err });
  }
};

// Delete an update
const deleteUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    await Update.findByIdAndDelete(id);
    res.status(200).json({ message: 'Update deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting update', error: err });
  }
};

module.exports = {
  createUpdate,
  getAllUpdates,
  updateUpdate,
  deleteUpdate
};