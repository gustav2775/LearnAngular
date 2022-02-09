const productService = require('../services/product.service.js')

class ProductController {
    constructor() { }
    get = async (req, res) => {
        const products = await productService.get();
        if (req.query.id) {
            const product = products.find(el => el.id === req.query.id);
            if (product) {
                res.send({result:product});
            } else {
                res.send(400, { err: 'Товар не найден' });
            }
        } else {
            if (products) {
                res.send({results:products});
            } else {
                res.send(400, { err: 'Список товаров пуст' });
            }
        }
    }
    add = (req, res) => {
        const products = productService.get();
    }
    update = (req, res) => {
        const products = productService.get();
    }
    delete = (req, res) => {
        const products = productService.get();
    }
}

module.exports = new ProductController();