const fs = require("fs");

async function getProductInfo(id) {
    return new Promise((resolve, reject) => {
        let response;

        fs.readFile(`./json/products/${id}.json`, (err, data) => {
            if (err) {
                response = "ID Invalida";
                return reject(response);
            }

            response = JSON.parse(data);
            return resolve(response);
        })
    })
}

module.exports = {
    getProductInfo,
}