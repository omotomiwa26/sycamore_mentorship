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
    //author_id: { type: Number, required: true, },
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    nationality: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
});

//Implementing pre-save middleware that logs whenever an author is added
authorSchema.pre('save', function (next) {
    console.log(`New Author Added Succesfully: ${this.name}`);
    next();
});

//Creating Author model from the Author 
const Author = mongoose.model('Author', authorSchema);

// Creating Schema For Book
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    genre: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author', required: true },
    created_at: { type: Date, default: Date.now }
});

// Create book model from the schema
const Book = mongoose.model('Book', bookSchema);

//Creating An Author
const createAuthor = async (name, email, nationality) => {
    const newAuthor = new Author({
        name,
        email,
        nationality
    });

    try {
        const saveAuthor = await newAuthor.save();
        console.log('Author Created sucesfully:', saveAuthor);
        return saveAuthor._id
    } catch (err) {
        console.error('Error Creating Author:', err);
    }
};

// Creating A Book And Associating It With An Author
const createBook = async (authorId, title, genre) => {
    const newBook = new Book({
        title,
        genre,
        author: authorId
    });

    try {
        const saveBook = await newBook.save();
        console.log('Book created Succesfully:', saveBook);
    } catch (err) {
        console.error('Error Creating Book:', err);
    }
};


//Retreiving And Populating Books With Authors Information
const populateBooksWithAuthors = async () => {
    try {
        const books = await Book.find().populate('author', 'name email nationality');
        console.log('Books with Author Information:', books);
    } catch (err) {
        console.error('Error Populating Books:', err);
    }
};

// createAuthor('Wole Soyinka', 'ws@gmail.com', 'Nigerian');
// createBook(authorId, 'Our Husband Has Run Mad Again', 'Drama',);
// populateBooksWithAuthors()
(async () => {
    const authorId = await createAuthor('Ola Rotimi', 'oa@gmail.com', 'Nigerian');
    await createBook(authorId, 'Ths gods Must Be Crazy', 'Drama');
    await populateBooksWithAuthors();
})();