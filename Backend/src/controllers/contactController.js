const { validationResult } = require("express-validator");
const contactService = require("../services/contactService");

const sendContactEmail = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const result = await contactService.sendContactEmail(req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    sendContactEmail,
};
