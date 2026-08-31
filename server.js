const express = require('express');
const connectDB = require('./config/db');
const personalInfoRoutes = require('./routes/personalInfoRoutes');
const projectRoutes = require('./routes/projectRoutes');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
connectDB();

// Fast Health check endpoint (for keep-alive pingers to prevent sleep on Render free tier)
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Routes
app.use('/api/personalinfos', personalInfoRoutes);
app.use('/api/projects', projectRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
