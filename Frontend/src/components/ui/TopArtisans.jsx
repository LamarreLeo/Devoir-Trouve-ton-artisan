import { useEffect, useState } from "react";
import { getTopArtisans } from "../../services/api";
import ArtisanCard from "./ArtisanCard";

function TopArtisans() {
    const [topArtisans, setTopArtisans] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTopArtisans = async () => {
            try {
                const data = await getTopArtisans();
                setTopArtisans(data);
            } catch (err) {
                console.error(
                    "Erreur lors de la récupération des artisans",
                    err
                );
            } finally {
                setLoading(false);
            }
        };
        fetchTopArtisans();
    }, []);

    if (loading) {
        return (
            <p>Chargement en cours...</p>
        )
    }

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {topArtisans.map((artisan) => (
                    <ArtisanCard key={artisan.id} artisan={artisan} />
                ))}
            </div>
        </div>
    );
}

export default TopArtisans;
