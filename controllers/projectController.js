const Project = require('../models/Project');

// Get all projects
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add new project
exports.createProject = async (req, res) => {
  const { title, description, technologies, link, imageUrl } = req.body;
  try {
    const newProject = new Project({ title, description, technologies, link, imageUrl });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
