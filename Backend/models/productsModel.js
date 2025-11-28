const fs = require("fs");

async function getProducts(cat) {
    return new Promise((resolve, reject) => {
        const response = {
            ok: true,
            data: {}
        }

        fs.readFile(`./json/cats_products/${cat}.json`, (err, data) => {
            if (err) {
                response.ok = false;
                response.data = "Error al leer el archivo";
                return reject(response);
            }
            response.data = JSON.parse(data);
            return resolve(response);
        })

    })
}

module.exports = {
    getProducts,
}