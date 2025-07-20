const Deliverable = require('../models/Deliverable');

const updateDeliverable = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedDeliverable = await Deliverable.findByIdAndUpdate(
      id,
      updates,
      { new: true, runValidators: true }
    );

    if (!updatedDeliverable) {
      return res.status(404).json({ message: "Deliverable not found" });
    }

    res.status(200).json({
      message: "Deliverable updated successfully",
      deliverable: updatedDeliverable
    });
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({ message: "Error updating deliverable", error });
  }
};

module.exports = { updateDeliverable };