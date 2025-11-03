const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Artisan = sequelize.define("artisan", {
    id_artisan: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    site: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    ville: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    note: {
        type: DataTypes.DECIMAL(2, 1),
        allowNull: false,
    },
    top : {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
}, {
    tableName: 'artisan',
    timestamps: false
});

// Relations
Artisan.associate = (models) => {
    
    // Un artisan appartient a une specialite
    Artisan.belongsTo(models.Specialite, {
        foreignKey: "id_specialite",
        as: "specialite",
    });
};

module.exports = Artisan;