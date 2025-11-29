const model = require("../models/catsModel");

async function getCats(req, res) {
    try {
        const response = await model.getCats()
        res.json(response);
    } catch (error) {
        console.error(error);
        res.json(error)
    }
}

module.exports = {
    getCats,
}