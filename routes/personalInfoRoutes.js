const express = require('express');
const {
  getPersonalInfo,
  updatePersonalInfo,
  createPersonalInfo,
} = require('../controllers/personalInfoController');

const router = express.Router();

// Public route: Get personal information
router.get('/', getPersonalInfo);

// Public route: Create personal information
router.post('/', createPersonalInfo);

// Public route: Update personal information
router.put('/update', updatePersonalInfo);

module.exports = router;
