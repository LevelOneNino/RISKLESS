const router = require("express").Router();

const dataController = require("../controllers/data.controller.js")

router.get("/", dataController.getData);

module.exports = router;

