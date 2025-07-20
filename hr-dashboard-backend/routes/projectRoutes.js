const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');
const Project = require('../models/Project');
// const ProjectController=require('../controllers/ProjectController');
// const {addProject}=require('../controllers/ProjectController');

// Create a new project
router.post('/create', verifyToken, async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// router.post('/addProject',ProjectController.addProject);
// Get all projects
router.get('/', verifyToken, async (req, res) => {
  const projects = await Project.find().populate('client');
  res.json(projects);
});

module.exports = router;