const express = require("express");
const controller = require("../controllers/productInfoController");

const productInfoRouter = express.Router();

productInfoRouter.get("/:id", controller.getProductInfo)

module.exports = productInfoRouter;