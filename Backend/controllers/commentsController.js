const model = require("../models/commentsModel");

async function getComments(req, res) {
    try {
        const response = await model.getComments(req.params.id);
        console.log(response);
        res.json(response);
    } catch (error) {
        console.error(error);
        res.json(error);
    }
}

module.exports = {
    getComments,
}