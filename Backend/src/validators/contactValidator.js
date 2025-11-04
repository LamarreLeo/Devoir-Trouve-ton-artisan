const { body, validationResult } = require("express-validator");

const contactFormValidator = [
    body("nom").trim().notEmpty().withMessage("Le nom est requis"),

    body("email")
        .notEmpty()
        .withMessage("L'email est requis")
        .isEmail()
        .withMessage("L'email est invalide")
        .normalizeEmail(),

    body("message")
        .notEmpty()
        .withMessage("Le message est requis")
        .isLength({ min: 10 })
        .withMessage("Le message doit contenir au moins 10 caractères"),
];

module.exports = contactFormValidator;
