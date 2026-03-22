const express = require('express');
const loggerMiddleware = require('./loggerMiddleware');

const app = express();

// Use the logger middleware for all routes
app.use(loggerMiddleware);

// Example route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});