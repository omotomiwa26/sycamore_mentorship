// Create a basic Express server that:
//Logs every incoming request using a custom logging middleware.
//Uses express.json() to handle JSON request bodies.
//Protects a specific route (e.g., /dashboard ) with authentication middleware that checks for an authorization token.
//Test the server by making GET, POST, and PUT requests, and verify that the middleware is working correctly.

const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

app.use((req, res, next) => {
    console.log('Request received');
    next();
});

app.use('/dashboard', (req, res, next) => {
    const { authorization } = req.headers;
    if (authorization === 'Auth123') {
        next();
    } else {
        res.status(403).send('Unauthorized Route');
    }   
}   
);

app.get('/dashboard', (req, res) => {
    res.send('Get Dashboard');
});

app.post('/dashboard', (req, res) => {
    res.send('Post Dashboard');
});

app.put('/dashboard', (req, res) => {
    res.send('Put Dashboard');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});