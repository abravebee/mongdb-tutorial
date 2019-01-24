const express = require('express');
const router = express.Router();

//Require controllers (to be created)
const product_controller = require('../controllers/product');

//Test URL for file communication
router.get('/test', product_controller.test);

//Routes
router.post('/create', product_controller.product_create);

router.get('/:id', product_controller.product_details);

router.put('/:id/update', product_controller.product_update);
module.exports = router;

router.delete('/:id/delete', product_controller.product_delete);