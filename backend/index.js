// backend/index.js
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json()); // replaces bodyParser.json()

// Simple request logger
app.use((req, res, next) => {
  // console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  // console.log('Body:', req.body);
  next();
});

// API ROUTES
const sentimentRoute = require('./routes/sentiment');
app.use('/api/sentiment', sentimentRoute);

// JSON fallback for ANY unknown API route (prevents HTML responses)
app.use('/api', (req, res) => {
  res.status(404).json({ error: 'API endpoint not found' });
});

// --------------------------
// If deploying a React build
// --------------------------
const clientPath = path.join(__dirname, '../frontend/dist');
app.use(express.static(clientPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(clientPath, 'index.html'));
});

// Global error handler
app.use((err, req, res, next) => {
  // console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// Global error handler
app.use((err, req, res, next) => {
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(port, () => {});

// app.listen(port, () => {
//   console.log(`Backend server running on port ${port}`);
// });
