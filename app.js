const express = require('express');
const bodyParser = require('body-parser');

//Import routes for products
const product = require('./routes/product');

//Initialize our express app
const app = express();

//Connecting app to the remote database
//Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://someuser:abcd1234@ds211625.mlab.com:11625/productstutorial';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//Body Parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Routes
app.use('/products', product);

//Port
let port = 5500;

app.listen(port, () => {
  console.log(`\n=== Server Running on Port ${port} ===\n`)
})