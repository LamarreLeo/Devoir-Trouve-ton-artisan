const { Sequelize } = require("sequelize");
const dbConfig = require("../config/db");

const db = {};

db.Sequelize = Sequelize;
db.sequelize = dbConfig;

// Import des modèles
db.Artisan = require("./artisanModels");
db.Specialite = require("./specialiteModel");
db.Categorie = require("./categorieModel");

// Association des modèles
Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

// Synchronisation des modèles avec la base de données
db.sequelize
    .sync({ force: false })
    .then(() => {
        console.log("Base de données synchronisée");
    })
    .catch((err) => {
        console.error(
            "Erreur lors de la synchronisation de la base de données:",
            err
        );
    });

module.exports = db;
