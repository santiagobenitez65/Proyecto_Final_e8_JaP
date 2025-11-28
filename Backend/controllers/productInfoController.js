const model = require("../models/productInfoModel")

async function getProductInfo(req, res) {
    await model.getProductInfo(parseInt(req.params.id))
        .then((response) => {
            if (!response.ok) throw new Error(response.data);
            res.json(response.data);
        })
        .catch((error) => {
            console.error(error.data);
            res.json(error.data);
        })
}

module.exports = {
    getProductInfo,
}