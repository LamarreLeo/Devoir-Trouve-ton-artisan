const { Op } = require("sequelize");
const db = require("../models");

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

const getArtisanById = async (id_artisan) => {
    const artisan = await Artisan.findByPk(id_artisan, {
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
    });

    return artisan;
};

const getArtisansFiltered = async (categoryName, searchName) => {
    let whereCondition = {};

    let includeOptions = [
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
    ];

    try {
        if (categoryName) {
            includeOptions[0].include[0].where = {
                nom: categoryName,
            };
        }

        if (searchName) {
            whereCondition.nom = db.sequelize.where(
                db.sequelize.fn('LOWER', db.sequelize.col('artisan.nom')), 
                'LIKE', 
                `%${searchName.toLowerCase()}%`
            );
        }

        const artisans = await Artisan.findAll({
            where: whereCondition,
            include: includeOptions,
            order: [["note", "ASC"]],
        });

        const filteredArtisans = artisans.filter((artisan) => {
            if (!categoryName) return true;
            return (
                artisan.specialite &&
                artisan.specialite.categorie &&
                artisan.specialite.categorie.nom === categoryName
            );
        });

        return filteredArtisans;
    } catch (error) {
        console.error("Erreur lors de la récupération des artisans:", error);
        throw error;
    }
};

module.exports = {
    getTopArtisans,
    getArtisanById,
    getArtisansFiltered,
};
