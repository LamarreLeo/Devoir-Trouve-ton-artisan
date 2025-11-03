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

module.exports = Specialite;
