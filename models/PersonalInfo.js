const mongoose = require('mongoose');

const personalInfoSchema = new mongoose.Schema({
  name: String,
  bio: String,
  email: String,
  linkedin: String,
  github: String,
  skills: [String],
  education: [
    {
      institution: String,
      degree: String,
      startDate: Date,
      endDate: Date
    }
  ],
  contact: {
    phone: String,
    address: String
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('PersonalInfo', personalInfoSchema);
