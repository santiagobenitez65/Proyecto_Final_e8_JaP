const fs = require("fs");

async function getProducts(cat) {
    return new Promise((resolve, reject) => {
        let response;

        fs.readFile(`./json/cats_products/${cat}.json`, (err, data) => {
            if (err) {
                response = "Categoría inválida";
                return reject(response);
            }
            response = JSON.parse(data);
            return resolve(response);
        })

    })
}

module.exports = {
    getProducts,
}