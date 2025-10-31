const Categorie = require("../models/categorieModel");

const getAllCategories = async () => {
    try {
        const categories = await Categorie.findAll({
            order: [
                ['id_categorie', 'ASC']
            ]
        });
        return categories;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAllCategories,
};
