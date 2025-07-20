const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUserProfile,
} = require('../controllers/userController');
const protect = require('../middleware/authMiddleware');

// @route   POST /api/users/register
// @desc    Register a new user
router.post('/register', registerUser);

// @route   POST /api/users/login
// @desc    Authenticate user & get token
router.post('/login', loginUser);

// @route   GET /api/users/profile
// @desc    Get user profile (protected route)
router.get('/profile', protect, getUserProfile);

module.exports = router;