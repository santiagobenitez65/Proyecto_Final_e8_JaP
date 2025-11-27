const fs = require("fs");

async function getProducts(cat) {
    return new Promise((resolve, reject) => {
        try {
            fs.readFile(`./json/cats_products/${cat}.json`, (err, data) => {
                if (err) return reject(err);
                console.log("MODEL DATA: " + data);
                return resolve(JSON.parse(data));
            })
        } catch (error) {
            console.error("EINVALIDCAT");
            return reject(false);
        }
    })
}

module.exports = {
    getProducts,
}