const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();

// for JSON requests in the req.body
app.use(express.json()); 

// Logging middleware to output the HTTP method and URL
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  });

//for the user route
app.use('/api', userRoutes);

//For home route
app.get('/', (req, res) => {
    res.send('<h1 style="color: Blue";>Welcome To My-API-Project!</h1>');
});

module.exports = app;