const fs = require("fs")

async function getCats() {
    return new Promise((resolve, reject) => {
        let response;

        fs.readFile("./json/cats/cat.json", (err, data) => {
            if (err) {
                response = err;
                return reject(response);
            }
            response = JSON.parse(data);
            return resolve(response);
        })
    })
}

module.exports = {
    getCats,
}