const model = require("../models/productsModel");

async function getProducts(req, res) {
    await model.getProducts(parseInt(req.params.id))
        .then((response) => {
            if (!response.ok) throw new Error(response.data);
            res.json(response.data);
        })
        .catch((error) => {
            res.json(error.data);
        })
}

module.exports = {
    getProducts,
}