const express = require("express");
const controller = require("../controllers/catsController");
const catsRouter = express.Router();

catsRouter.get("/", controller.getCats);

module.exports = catsRouter;
