// Set up a basic Express.js server, and define routes for / (home) and /about .


const express = require('express');
const app = express();
const port = 5000;

app.get('/',  (req, res) => {
  res.send('<h1>Welcome to the home page!</h1>');
});

app.get('/about', (req, res) => {
  res.send('<h1>This is the about page!</h1>');
});

app.listen(port, () => {
  console.log('Server is running on port' + ' ' +port);
});

