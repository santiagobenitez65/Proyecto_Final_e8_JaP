const model = require("../models/sellModel");

async function getPublish(req, res) {
    try {
        const response = await model.getPublish()
        res.json(response);
    } catch (error) {
        console.error(error);
        res.json(error)
    }
}

module.exports = {
    getPublish,
}