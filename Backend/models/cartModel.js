const fs = require("fs");
const database = require("../database");

async function getCart() {
    return new Promise((resolve, reject) => {

        database.getCart()
            .then(response => {
                console.log(response);
                return resolve(response.productos);
            })
            .catch(error => {
                return reject(error);
            })
    })
}

async function postToCart(product, total) {
    return new Promise((resolve, reject) => {
        try {
            database.postProductToCart(product, total)
            return resolve()
        } catch (error) {
            return reject(error)
        }
    })
}

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
    getCart,
    postToCart,
}