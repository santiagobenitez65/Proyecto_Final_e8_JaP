const model = require("../models/productInfoModel")

async function getProductInfo(req, res) {
    try {
        const response = await model.getProductInfo(parseInt(req.params.id));
        res.json(response);
    } catch (error) {
        console.error(error);
        res.json(error);
    }
}

module.exports = {
    getProductInfo,
}