const model = require("../models/productsModel");

async function getProducts(req, res) {
    const products = await model.getProducts(req.body.cat);
    console.log("CONTROLLER DATA:" + products);
    if (!products) console.log("Error!");
    res.json(products);
}

module.exports = {
    getProducts,
}