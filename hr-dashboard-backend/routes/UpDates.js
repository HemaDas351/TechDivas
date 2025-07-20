const express = require('express');
const router = express.Router();
const {
  createUpdate,
  getAllUpdates,
  updateUpdate,
  deleteUpdate
} = require('../controllers/updateController');

// POST a new update
router.post('/', createUpdate);

// GET all updates
router.get('/', getAllUpdates);

// PUT (edit) an update
router.put('/:id', updateUpdate);

// DELETE an update
router.delete('/:id', deleteUpdate);

module.exports = router;

const { authenticate, isAdmin } = require('../middleware/authMiddleware');