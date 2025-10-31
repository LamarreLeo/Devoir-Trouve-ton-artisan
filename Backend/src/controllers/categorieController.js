const categorieService = require("../services/categorieService");

const getAllCategories = async (req, res) => {
    try {
        const categories = await categorieService.getAllCategories();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllCategories,
};
