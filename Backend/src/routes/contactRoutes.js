const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");
const contactValidator = require("../validators/contactValidator");

router.post("/", contactValidator, contactController.sendContactEmail);

module.exports = router;