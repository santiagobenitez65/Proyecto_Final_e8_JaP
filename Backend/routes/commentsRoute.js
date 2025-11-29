const express = require("express");
const controller = require("../controllers/commentsController");

const commentsRouter = express.Router();

commentsRouter.get("/:id", controller.getComments);

module.exports = commentsRouter;