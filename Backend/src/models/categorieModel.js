const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Categorie = sequelize.define("categorie", {
    id_categorie: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'categorie',
    timestamps: false
});

// Une categorie peut avoir plusieurs specialites
Categorie.associate = (models) => {
    Categorie.hasMany(models.Specialite, {
        foreignKey: "id_categorie",
        as: "specialites",
    });
};

module.exports = Categorie;
