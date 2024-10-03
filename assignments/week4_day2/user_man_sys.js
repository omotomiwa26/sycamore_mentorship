// // Create an Express.js server that handles routes for a simple user management system.
// GET /users: Retrieve a list of users.
// POST /users: Create a new user.
// PUT /users/
// : Update an existing user by ID.
// DELETE /users/
// : Delete a user by ID.
// Test the routes using Postman.

const express = require('express');
const app = express();
app.use(express.json());
app.listen(3000, () => console.log('Server is running on port 3000'));

let users = [ { id: 1,
                name: "Omotomiwa", 
                age: 105 , 
                Track: "Backend", 
                Level: "Senior"},

                {   id: 2,
                    name: "Paul", 
                    age: 100 , 
                    Track: "Mobile", 
                    Level: "Senior"},

                    {   id: 3,
                        name: "George", 
                        age: 130 , 
                        Track: "Frontend", 
                        Level: "Senior"}
             ];


app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/users', (req, res) => {
    const user = req.body;
    res.json({ id: 4,
            name: "Bolu", 
            age: 146 , 
            Track: "Fullstack", 
            Level: "Senior"});
});

app.put('/users/:id', (req, res) => {
    const id = req.params.id;
    const updated_json = req.body;
    res.json({ message: `User with id ${id} updated`, user: updated_json });
    });

app.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    res.json({ message: `User with id ${id} deleted` });
});     