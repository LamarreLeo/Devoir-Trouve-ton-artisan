const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Specialite = sequelize.define("specialite", {
    id_specialite: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'specialite',
    timestamps: false
});

// Relations
Specialite.associate = (models) => {

    // Une specialite appartient a une categorie
    Specialite.belongsTo(models.Categorie, {
        foreignKey: "id_categorie",
        as: "categorie",
    });

    // Une specialite peut avoir plusieurs artisans
    Specialite.hasMany(models.Artisan, {
        foreignKey: "id_specialite",
        as: "artisans",
    });
};

module.exports = Specialite;
