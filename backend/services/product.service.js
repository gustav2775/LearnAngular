const fs = require('fs');

class ProductService {
    constructor() { }
    get = () => {
        return new Promise((res, rej) => {
            fs.readFile('./dataBase/nodb/products.json', 'utf-8', (err, data) => {
                if (err) {
                    return res(JSON.stringify({ text: err }));
                } else {
                    return res(JSON.parse(data));
                }
            })
        })
    }
}

module.exports = new ProductService();