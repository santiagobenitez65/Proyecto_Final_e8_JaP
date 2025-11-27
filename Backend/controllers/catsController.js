const model = require("../models/catsModel");

async function getCats(req, res) {
    await model.getCats()
        .then((response) => {
            if (!response.ok) throw new Error(response.data);
            res.json(response.data);
        })
        .catch((error) => {
            console.error(error.data);
            res.json(error.data)
        })
}

module.exports = {
    getCats,
}