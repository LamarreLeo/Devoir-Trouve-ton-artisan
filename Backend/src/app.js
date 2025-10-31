const express = require("express");
const dotenv = require("dotenv");
const sequelize = require("./config/db");

dotenv.config();
const app = express();
app.use(express.json());

// Démarrage du serveur après la connexion à la base de données
const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log("✅ Connexion à la base de données établie");

        const HOST = process.env.HOST || "localhost";
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, HOST, () => {
            console.log(`🚀 Serveur démarré sur http://${HOST}:${PORT}`);
        });
    } catch (error) {
        console.error(
            "❌ Erreur lors de la connexion à la base de données:",
            error
        );
    }
};

startServer();
