const express = require('express');

const router = express.Router();

//importing the model
const productController = require('../controllers/productsController');

console.log('router loaded');


//router for creating the product
router.post('/products/create',productController.create);

//router for showing the product
router.get('/products',productController.list);

//router for deleting the product
router.delete('/products/:id',productController.delete);

//router for updating the product
router.post('/products/:id/update_quantity',productController.update);

module.exports = router;