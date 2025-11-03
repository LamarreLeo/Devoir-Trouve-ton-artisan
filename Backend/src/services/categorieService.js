const db = require("../models");

const getAllCategories = async () => {
    try {
        const categories = await db.Categorie.findAll({
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
