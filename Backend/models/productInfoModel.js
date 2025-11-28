const fs = require("fs");

async function getProductInfo(id) {
    return new Promise((resolve, reject) => {
        const response = {
            ok: true,
            data: {}
        }

        fs.readFile(`./json/products/${id}.json`, (err, data) => {
            if (err) {
                response.ok = false;
                response.data = "ID Invalida";
                return reject(response);
            }

            response.data = JSON.parse(data);
            return resolve(response);
        })
    })
}

module.exports = {
    getProductInfo,
}