const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController.js');
const productService = require('../services/product.service.js');

router.use(async (req, res, next) => {
    const products = await productService.get();
    if (products) {
        req.products = products;
        next();
    } else {
        res.send(500, { err: 'Ошибка сервера' });
    }
})
router.route('/')
    .get(ProductController.get)
    .post(ProductController.add)
    .put(ProductController.update)
    .delete(ProductController.delete)

module.exports = router;