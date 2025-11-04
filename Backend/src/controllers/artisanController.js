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

const getArtisanById = async (req, res) => {
    try {
        const artisan = await artisanService.getArtisanById(
            req.params.id_artisan
        );
        if (!artisan) {
            return res.status(404).json({ message: "Artisan non trouvé" });
        }
        res.status(200).json(artisan);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getArtisansList = async (req, res) => {
    const category = req.query.category;
    const search = req.query.search;

    try {
        const artisans = await artisanService.getArtisansFiltered(
            category,
            search
        );
        res.json(artisans);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getTopArtisans,
    getArtisanById,
    getArtisansList,
};
