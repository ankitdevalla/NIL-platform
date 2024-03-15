const express = require('express');
const app = express();
const port = process.env.PORT || 3001; // Use the environment's port if specified or 3001 by default

app.use(express.json()); // Middleware to parse JSON bodies

// Define a simple route for GET requests to the root URL '/'
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});