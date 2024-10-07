// Set up an Express server using EJS (or Pug).
// Create a template that renders a list of products or users, passing the data from the server.
// Create reusable partials for the header and footer and include them in your templates.
// Experiment with rendering dynamic content like user input or query parameters.

const express = require('express');
const app = express();
const port = 5000;

app.set('view engine', 'ejs');

app.use(express.json());

app.use((req, res, next) => {
    console.log('Request received');
    next();
});

app.use('/products', (req, res, next) => {
    const { authorization } = req.headers;
    if (authorization === 'Auth123') {
        next();
    } else {    
        res.status(403).send('Unauthorized Route');
    }
}
);

app.get('/products', (req, res) => {
    res.render('products', { title: 'Products List', products: ['Laptops', 'Phones', 'Drones', 'Cars'] });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
