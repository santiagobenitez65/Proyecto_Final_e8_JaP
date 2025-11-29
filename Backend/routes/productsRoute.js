const express = require("express");
const controller = require("../controllers/productsController");
const productsRouter = express.Router();

productsRouter.get("/:id", controller.getProducts)

module.exports = productsRouter;
