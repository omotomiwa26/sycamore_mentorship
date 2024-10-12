// Create two schemas: Author and Book . Each author can write multiple books (one-to-many relationship).
// Define a reference in the Book schema to the Author model.
// Write functions to:
// Create an author and a book.
// Retrieve books and populate the author information.
// Implement pre-save middleware that logs whenever an author is added.

require('dotenv').config();

const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected Succesfully!'))
    .catch(err => console.error('MongoDB Connection Error:', err));

// Creating Schema For Author
const authorSchema = new mongoose.Schema({
    author_id: { type: Number, required: true, },
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    nationality: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
});

// Create Author model from the schema
const Author = mongoose.model('Author', authorSchema);

// Creating Schema For Book
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    genre: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
});

// Create book model from the schema
const Book = mongoose.model('Book', bookSchema);