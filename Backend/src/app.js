const express = require("express");
const dotenv = require("dotenv");
const sequelize = require("./config/db");
const corsMiddleware = require("./security/corsConfig");
const categorieRoutes = require("./routes/categorieRoutes");
const artisanRoutes = require("./routes/artisanRoutes");
const contactRoutes = require("./routes/contactRoutes");
dotenv.config();
const app = express();

// Middleware
app.use(corsMiddleware);
app.use(express.json());

// Routes
app.use("/api/categories", categorieRoutes);
app.use("/api/artisans", artisanRoutes);
app.use("/api/contact", contactRoutes);

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
