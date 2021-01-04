// import Express
const express = require('express');

// Create an Express app
const app = express();

// Hello, world!
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Hello, {name}!
app.get('/:name', (req, res) => {
  res.send(`Hello, ${req.params.name}!`);
});

// Define the server port to 8080
const PORT = 8080;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
