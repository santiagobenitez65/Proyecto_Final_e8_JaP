const model = require("../models/cartModel");

async function getCartInfo(req, res) {
    try {
        const response = await model.getCartInfo();
        res.json(response);
    } catch (error) {
        console.error(error);
        res.json(error)
    }
}

async function getBuyCart(req, res) {
    try {
        const response = await model.getBuyCart();
        res.json(response);
    } catch (error) {
        console.error(error);
        res.json(error)
    }
}

module.exports = {
    getCartInfo,
    getBuyCart
}