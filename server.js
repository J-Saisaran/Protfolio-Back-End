const express = require('express');
const connectDB = require('./config/db');
const personalInfoRoutes = require('./routes/personalInfoRoutes');
const projectRoutes = require('./routes/projectRoutes');
const cors = require('cors'); // Import cors
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Use CORS middleware
app.use(express.json());

// Database Connection
connectDB();

// Routes
app.use('/api/personalinfos', personalInfoRoutes);
app.use('/api/projects', projectRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
