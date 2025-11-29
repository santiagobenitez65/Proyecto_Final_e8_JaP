const express = require("express");
const controller = require("../controllers/cartController");

const cartRouter = express.Router();

cartRouter.get("/info", controller.getCartInfo);

cartRouter.get("/buy", controller.getBuyCart);

module.exports = cartRouter;