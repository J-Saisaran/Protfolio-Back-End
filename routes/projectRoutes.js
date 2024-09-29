const express = require('express');
const Project = require('../models/Project');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, description, githubLink, deployedLink } = req.body;
    const newProject = new Project({ title, description, githubLink, deployedLink });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
