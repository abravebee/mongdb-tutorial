const express = require('express');
const router = express.Router();

//Require controllers (to be created)
const product_controller = require('../controllers/product');

//Test URL for file communication
router.get('/test', product_controller.test);

//Routes
router.post('/create', product_controller.product_create);


module.exports = router;