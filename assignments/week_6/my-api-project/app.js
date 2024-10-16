const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json()); // Parses JSON requests
// Placeholder route
app.use('/api', userRoutes);

app.get('/', (req, res) => {
    res.send('<h1 style="color: Blue";>Welcome To My-API-Project!</h1>');
});

module.exports = app;