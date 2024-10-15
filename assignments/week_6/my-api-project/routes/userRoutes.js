// routes/userRoutes.js
const express = require('express');
const router = express.Router();

// Sample list of users
const users = [
  { id: 1, name: 'Bolu A ', email: 'ba@sycamore.com', Stack: 'FE' },
  { id: 2, name: 'Omotomiwa A', email: 'oa@sycamore.com', Stack: 'BE' },
  { id: 3, name: 'Paul A', email: 'pa@sycamore.com', Stack: 'ME' },
];

// Route to get the list of users
router.get('/users', (req, res) => {
  res.json(users);
});

module.exports = router;
