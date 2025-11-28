const model = require("../models/productsModel");

async function getProducts(req, res) {
    try {
        const response = await model.getProducts(parseInt(req.params.id))
        res.json(response);
    } catch (error) {
        console.error(error)
        res.json(error);
    }
}

module.exports = {
    getProducts,
}