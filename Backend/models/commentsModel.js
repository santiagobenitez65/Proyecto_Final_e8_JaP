const fs = require("fs");

async function getComments(prod) {
    return new Promise((resolve, reject) => {
        let response;
        fs.readFile(`./json/products_comments/${prod}.json`, (err, data) => {
            if (err) {
                response = "Producto inválido";
                return reject(response);
            }

            response = JSON.parse(data);
            return resolve(response);
        })
    })
}

module.exports = {
    getComments,
}