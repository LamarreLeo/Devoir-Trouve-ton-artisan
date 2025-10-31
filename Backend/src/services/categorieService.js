const Categorie = require("../models/categorieModel");

const getAllCategories = async () => {
    try {
        const categories = await Categorie.findAll();
        return categories;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAllCategories,
};
