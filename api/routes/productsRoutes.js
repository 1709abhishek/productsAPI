const express = require('express');

const router = express.Router();

const productController = require('../controllers/productsController');

console.log('router loaded');

router.post('/products/create',productController.create);
router.get('/products',productController.list);
router.delete('/products/:id',productController.delete);
router.post('/products/:id/update_quantity/?number=10',productController.update);

module.exports = router;