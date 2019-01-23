const express = require('express');
const bodyParser = require('body-parser');

//Import routes for products
const product = require('./routes/product.route');
// initialize our express app
const app = express();

let port = 5500;

app.listen(port, () => {
  console.log(`\n=== Server Running on Port ${port} ===\n`)
})