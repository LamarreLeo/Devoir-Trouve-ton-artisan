const artisanService = require("../services/artisanService");

const getTopArtisans = async (req, res) => {
    try {
        const topArtisans = await artisanService.getTopArtisans();
        if (!topArtisans || topArtisans.length === 0) {
            return res.status(404).json({ message: "Aucun artisan trouvé" });
        }
        res.status(200).json(topArtisans);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getTopArtisans,
};