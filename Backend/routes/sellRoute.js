const express = require("express");
const controller = require("../controllers/sellController");
const sellRouter = express.Router();

sellRouter.get("/", controller.getPublish);

module.exports = sellRouter;
