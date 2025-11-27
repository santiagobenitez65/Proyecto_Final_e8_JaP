const express = require("express");
const productsController = require("../controllers/productsController");
const productsRouter = express.Router();

productsRouter.get("/:id", productsController.getProducts)

module.exports = productsRouter;
