const mongoose = require('mongoose');

const personalInfoSchema = new mongoose.Schema({
  name: String,
  bio: String,
  email: String,
  linkedin: String,
  github: String,
  profilePhoto: String,
  updatedAt: {
    type: Date,
    default: Date.now
  },
  
});

module.exports = mongoose.model('PersonalInfo', personalInfoSchema);
