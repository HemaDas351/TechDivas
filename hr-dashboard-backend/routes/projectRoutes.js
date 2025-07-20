const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');
const { createProject, getAllProjects } = require('../controllers/ProjectController');

// Create a new project
router.post('/create', verifyToken, createProject);

// Get all projects
router.get('/', verifyToken, getAllProjects);

module.exports = router;