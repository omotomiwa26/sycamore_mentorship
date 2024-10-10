// Create a MongoDB schema for a Product collection with fields for name , price , and category .
// Write the following functions using Mongoose:
// Insert a new product.
// Retrieve all products.
// Update a product’s price.
// Delete a product by its name.
// Test your functions by running CRUD operations.


require('dotenv').config();

const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected Succesfully!'))
    .catch(err => console.error('MongoDB Connection Error:', err));


//Creating a schema

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    category: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
});

//Creating a model

const Product = mongoose.model('Product', productSchema);

//Insert a new product

const insertProduct = async (name, price, category) => {
    try {
        const product = new Product({
            name: 'Iphone 16',
            price: '$5000',
            category: 'Mobiles',

            name: 'Washing Machine',
            price: '$4000',
            category: 'Home Appliances',

            name: 'Macbook Pro',
            price: '$2500',
            category: 'Laptops'
        });
        const saved_product = await product.save();
        console.log(`Product Saved Succesfully: ${saved_product}`);
    } catch (error) {
        console.error(`Error Saving Product`, error);
    }
};

insertProduct();

//Retrieve all products

const listProducts = async () => {
    try {
        const products = await Product.find();
        console.log(`Products Listed Succesfully: ${products}`);
    } catch (error) {
        console.error(`Error Listing Products`, error);
    }
};

listProducts();

//Update a product's price

const updateProduct = async (name, price) => {
    try {
        const updated_product = await Product.findOneAndUpdate(
            { name: name }, 
            { price: price }, 
            { new: true });
        console.log(`Product Updated Succesfully: ${updated_product}`);
    }
    catch (error) {
        console.error(`Error Updating Product`, error);
    }
}

updateProduct('Iphone 16', '$6000');

//Delete a product by its name  

const deleteProduct = async (name) => {
    try {
        const deleted_product = await Product.findOneAndDelete({ name: name});
        console.log(`Product Deleted Succesfully: ${deleted_product}`);
    }
    catch (error) {
        console.error(`Error Deleting Product`, error);
    }
}

deleteProduct('Macbook Pro');

//Close the connection

//mongoose.connection.close();
