const express = require('express');
const router = express.Router();
const {
  createUpdate,
  getAllUpdates,
  updateUpdate,
  deleteUpdate
} = require('../controllers/updateController');
const { authenticate, isAdmin } = require('../middleware/authMiddleware');

// POST a new update (only authenticated users)
router.post('/', authenticate, createUpdate);

// GET all updates (optional: public or protected)
router.get('/', getAllUpdates);

// PUT (edit) an update (only authenticated users)
router.put('/:id', authenticate, updateUpdate);

// DELETE an update (only admin)
router.delete('/:id', authenticate, isAdmin, deleteUpdate);

module.exports = router;