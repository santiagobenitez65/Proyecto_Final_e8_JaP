const model = require("../models/productsModel");

function getProducts(req, res) {
    const products = model.getProducts();
    if (!products) return false;
    res.json(products);
}

module.exports = {
    getProducts,
}