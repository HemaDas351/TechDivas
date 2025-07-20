const express = require('express');
const router = express.Router();
const { updateDeliverable } = require('../controllers/deliverableController');
const verifyToken = require('../middleware/authMiddleware');

// PUT /:id -> Update a deliverable (protected route)
router.put('/:id', verifyToken, updateDeliverable);

module.exports = router;