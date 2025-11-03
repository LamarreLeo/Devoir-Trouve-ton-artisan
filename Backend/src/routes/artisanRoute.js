const express = require("express");
const router = express.Router();
const artisanController = require("../controllers/artisanController");

router.get("/top", artisanController.getTopArtisans);

module.exports = router;
