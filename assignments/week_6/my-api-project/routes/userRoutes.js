// routes/userRoutes.js
const express = require('express');
const router = express.Router();

//list of users
const users = [
  { id: 1, name: 'Bolu A', email: 'ba@sycamore.ng', stack: 'FE' },
  { id: 2, name: 'Omotomiwa A', email: 'oa@sycamore.ng', stack: 'BE' },
  { id: 3, name: 'Paul A', email: 'pa@sycamore.ng', stack: 'ME' }
]

//Route to list all users
router.get('/users', (req, res) => {
  res.json(users);
});

//Route to create new users
router.post('/users', (req, res) => {
  console.log(req.body)
  users.push({
      id: users[users.length - 1].id + 1,
      name: req.body.name,
      email: req.body.email,
      stack: req.body.stack
    })

  res.status(201).json(users[users.length - 1]);
})

//Route to list a specific user by id
router.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.status(201).json(users[userId])
})

//Route to update specific user by id
router.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  const { stack } = req.body;
  
  res.json({ message: `User ${userId} updated`, updatedUser: { id: userId, stack} });
  });


//Route for deleting a specific user by id
router.delete('/users/:id', (req, res) => {
  const userId = req.params.id;
 
  res.json({ message: `User ${userId} deleted` });
  });

module.exports = router;
