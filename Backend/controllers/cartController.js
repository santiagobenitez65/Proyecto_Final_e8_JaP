const model = require("../models/cartModel");

async function getCart(req, res) {
    try {
        const response = await model.getCart();
        res.json(response)
    } catch (error) {
        console.error(error);
        res.json(error);
    }
}

async function postToCart(req, res) {
    try {
        const response = await model.postToCart(req.body.producto, req.body.total)
        res.status(201).send("POSTEDO CON EXITO")
    } catch (error) {
        console.error(error);
        res.json(error);
    }
}

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
    getBuyCart,
    getCart,
    postToCart,
}