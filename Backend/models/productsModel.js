const fs = require("fs");

async function getProducts(cat) {
    return new Promise((resolve, reject) => {
        const validCats = [101, 102, 103, 104, 105, 106, 107, 108, 109]

        const response = {
            ok: true,
            data: {}
        }

        if (!validCats.includes(cat)) {
            response.ok = false;
            response.data = "Categoria Invalida";
            return reject(response);
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