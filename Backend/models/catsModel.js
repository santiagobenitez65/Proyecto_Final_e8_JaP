const fs = require("fs")

async function getCats() {
    return new Promise((resolve, reject) => {
        const response = {
            ok: true,
            data: {}
        }

        fs.readFile("./json/cats/cat.json", (err, data) => {
            if (err) {
                response.ok = false;
                response.data = err;
                return reject(response);
            }
            response.data = JSON.parse(data);
            return resolve(response);
        })
    })
}

module.exports = {
    getCats,
}