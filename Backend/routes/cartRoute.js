const express = require("express");
const controller = require("../controllers/cartController");

const cartRouter = express.Router();

cartRouter.get("/", controller.getCart);

cartRouter.post("/", controller.postToCart);

cartRouter.get("/info", controller.getCartInfo);

cartRouter.get("/buy", controller.getBuyCart);

module.exports = cartRouter;