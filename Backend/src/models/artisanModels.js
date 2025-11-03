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
        unique: true,
        validate: {
            isEmail: true
        }
    },
    site: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isUrl: true
        }
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
        defaultValue: 0,
        validate: {
            min: 0,
            max: 5
        }
    },
    top: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    id_specialite: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'specialite',
            key: 'id_specialite'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
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