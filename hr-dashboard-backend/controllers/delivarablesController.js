const Deliverable = require('../models/Deliverable');

const updateDeliverable = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updated = await Deliverable.findByIdAndUpdate(id, updates, { new: true });

    if (!updated) {
      return res.status(404).json({ message: "Deliverable not found" });
    }

    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: "Error updating deliverable", error });
  }
};