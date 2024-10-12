// Create a table for products with fields for id , name , description , and price .
// Write Node.js functions to:
// Insert a new product into the products table.
// Update the price of a product based on the id .
// Delete a product by id .
// Test your functions by running the queries from Node.js.

require('dotenv').config();

const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

pool.connect((err) => {
    if (err) {
        console.error('Error Connecting To PostgreSQL:', err);
    } else {
        console.log('Connected To PostgreSQL Succesfully!');
    }
});

//Creating Products table
pool.query(`
CREATE TABLE IF NOT EXISTS products (
id SERIAL PRIMARY KEY,
name VARCHAR(100),
description VARCHAR(100),
price VARCHAR(10),
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`, (err, res) => {
    if (err) {
        console.error('Error Creating Products Table:', err);
    } else {
        console.log('Products Table Created Successfully');
    }
});

//Inserting Products Data
const insertProducts = (name, description, price) => {
    const query = 'INSERT INTO products (name, description, price) VALUES ($1, $2, $3)';
    const values = [name, description, price];
    pool.query(query, values, (err, res) => {
        if (err) {
            console.error('Error Inserting Products Data:', err);
        } else {
            console.log('Products Inserted Successfully');
        }
    });
};

//insertProducts('Iphone 16', 'Mobiles', '$5000')
//insertProducts('Macbook Pro', 'Laptops', '$15000')
insertProducts('Washing Machine', 'Home Appliances', '$3000')

//Upadating Products Data
const updateProducts = (id, newPrice) => {
    const query = 'UPDATE Products SET price = $1 WHERE id = $2';
    const values = [newPrice, id];
    pool.query(query, values, (err, res) => {
        if (err) {
            console.error('Error Updating Products Data:', err);
        } else {
            console.log('Products Data Updated Successfully');
        }
    });
};

updateProducts(2, '$7500');

//Deleting Products Data
const deleteProducts = (id) => {
    const query = 'DELETE FROM Products WHERE id = $1';
    const values = [id];
    pool.query(query, values, (err, res) => {
        if (err) {
            console.error('Error Deleting Products Data:', err);
        } else {
            console.log('Products Data Deleted Successfully');
        }
    });
};

deleteProducts(4)