const fs = require("fs");

async function getCartInfo() {
    return new Promise((resolve, reject) => {
        let response;
        fs.readFile("./json/user_cart/25801.json", (err, data) => {
            if (err) {
                response = "Error al leer el archivo";
                return reject(response)
            }

            response = JSON.parse(data);
            return resolve(response);
        });
    })
}

async function getBuyCart() {
    return new Promise((resolve, reject) => {
        let response;
        fs.readFile("./json/cart/buy.json", (err, data) => {
            if (err) {
                response = "Error al leer el archivo";
                return reject(response)
            }

            response = JSON.parse(data);
            return resolve(response);
        });
    })
}

module.exports = {
    getCartInfo,
    getBuyCart,
}