const express = require("express");
const router = express.Router();
const artisanController = require("../controllers/artisanController");

router.get("/top", artisanController.getTopArtisans);
router.get("/:id_artisan", artisanController.getArtisanById);
router.get("/", artisanController.getArtisansList);

module.exports = router;
