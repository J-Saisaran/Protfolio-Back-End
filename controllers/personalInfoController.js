const PersonalInfo = require("../models/PersonalInfo"); 

// Get personal information
const getPersonalInfo = async (req, res) => {
  try {
    const personalInfo = await PersonalInfo.findOne(); 
    if (!personalInfo) {
      return res.status(404).json({ message: 'Personal information not found' });
    }
    res.status(200).json(personalInfo);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching personal information', error: error.message });
  }
};

// Create personal information
const createPersonalInfo = async (req, res) => {
  try {
    const { name, bio, email, linkedin, github, skills, education, contact } = req.body;

    // Validation
    if (!name || !bio || !email) {
      return res.status(400).json({ message: 'Name, bio, and email are required.' });
    }

    const newInfo = new PersonalInfo({
      name,
      bio,
      email,
      linkedin,
      github,
      skills,        // Array of skills
      education,     // Array of education objects
      contact        // Contact object
    });

    const savedInfo = await newInfo.save();
    res.status(201).json({ message: 'Personal information created successfully', data: savedInfo });
  } catch (error) {
    res.status(500).json({ message: 'Error saving personal information', error: error.message });
  }
};

// Update personal information
const updatePersonalInfo = async (req, res) => {
  try {
    const { name, bio, email, linkedin, github, skills, projects, education, contact } = req.body;

    // Validation
    if (!name || !bio || !email) {
      return res.status(400).json({ message: 'Name, bio, and email are required for update.' });
    }

    const updatedInfo = await PersonalInfo.findOneAndUpdate(
      {}, 
      {
        name,
        bio,
        email,
        linkedin,
        github,
        skills,        // Update skills
        education,     // Update education
        contact        // Update contact
      }, 
      { new: true }
    );

    if (!updatedInfo) {
      return res.status(404).json({ message: 'Personal information not found' });
    }

    res.status(200).json({ message: 'Personal information updated successfully', data: updatedInfo });
  } catch (error) {
    res.status(500).json({ message: 'Error updating personal information', error: error.message });
  }
};

module.exports = {
  getPersonalInfo,
  createPersonalInfo,
  updatePersonalInfo,
};
