const express = require('express');
const router = express.Router();

//Require controllers (to be created)
const product_controller = require('../controllers/product.controller');

//Test URL for file communication
router.get('/test', product_controller.test);

module.exports = router;