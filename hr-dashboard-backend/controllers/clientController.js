// const Client = require('../models/Client');

// const updateClient = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updates = req.body;

//     const updated = await Client.findByIdAndUpdate(id, updates, { new: true });

//     if (!updated) {
//       return res.status(404).json({ message: "Client not found" });
//     }

//     res.status(200).json(updated);
//   } catch (error) {
//     res.status(500).json({ message: "Error updating client profile", error });
//   }
// };
exports.updateClient = async (req, res) => {
  const clientId = req.params.id;
  const updateData = req.body;

  try {
    const updatedClient = await Client.findByIdAndUpdate(clientId, updateData, { new: true });
    res.json(updatedClient);
  } catch (error) {
    res.status(500).json({ error: 'Error updating client' });
  }
};