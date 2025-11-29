const fs = require("fs")

async function getPublish() {
    return new Promise((resolve, reject) => {
        let response;

        fs.readFile("./json/sell/publish.json", (err, data) => {
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
    getPublish,
}