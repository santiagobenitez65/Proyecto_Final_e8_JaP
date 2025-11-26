const fs = require("fs");

async function getProducts() {
    let products = "";
    fs.readdir("./json/products", (err, files) => {
        files.forEach((file, index) => {
            try {
                fs.readFile(file, (err, data) => {
                    if (err) return false;
                    console.log(data);
                    products += data;
                })

            } catch (error) {
                console.error(error);
                return false;
            }
        })
    })

    console.log(products);

    try {
        let data = JSON.parse(products);
        return data;
    } catch (error) {
        console.error(error);
        return false;
    }
}

module.exports = {
    getProducts,
}