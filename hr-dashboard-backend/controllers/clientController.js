const Client = require('../models/Client');

exports.updateClient = async (req, res) => {
  const clientId = req.params.id;
  const updateData = req.body;

  try {
    const client = await Client.findById(clientId);
    if (!client) {
      return res.status(404).json({ message: 'Client not found' });
    }

    const updatedClient = await Client.findByIdAndUpdate(clientId, updateData, { new: true });
    res.status(200).json(updatedClient);
  } catch (error) {
    res.status(500).json({ message: 'Error updating client', error: error.message });
  }
};
