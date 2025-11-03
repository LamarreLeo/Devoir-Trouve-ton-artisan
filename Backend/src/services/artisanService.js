const db = require("../config/db");

const Artisan = db.Artisan;

const getTopArtisans = async () => {
    const topArtisans = await Artisan.findAll({
        where: {
            top: true,
        },

        include: [
            {
                model: db.Specialite,
                as: "specialite",
                include: [
                    {
                        model: db.Categorie,
                        as: "categorie",
                    },
                ],
            },
        ],

        order: [["note", "DESC"]],
    });
    return topArtisans;
};

module.exports = {
    getTopArtisans,
};
