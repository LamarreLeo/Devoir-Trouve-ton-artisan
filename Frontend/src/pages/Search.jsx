import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getArtisans } from "../services/api";
import ArtisanCard from "../components/ui/ArtisanCard";

function Search() {
    const [artisans, setArtisans] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchParams] = useSearchParams();

    const category = searchParams.get("category");
    const search = searchParams.get("search");

    useEffect(() => {
        const fetchArtisans = async () => {
            setLoading(true);
            try {
                const params = {};
                if (category) params.category = category;
                if (search) params.search = search;

                const data = await getArtisans(params);
                setArtisans(data);
            } catch (error) {
                console.error("Erreur lors du chargement des artisans", error);
            } finally {
                setLoading(false);
            }
        }

        fetchArtisans();
    }, [category, search]);

    return (
        <>
            <section className="flex flex-col justify-center items-center gap-10 md:gap-20 mt-10 md:mt-20 px-10">
                <h1 className="text-2xl md:text-3xl lg:text-4xl dark-blue">
                    {category 
                        ? `Artisans de la catégorie "${category}"` 
                        : search
                            ? `Résultats pour "${search}"`
                            : "Tous les artisans"}
                </h1>

                {loading ? (
                    <p className="text-lg">Chargement des artisans...</p>
                ) : artisans.length === 0 ? (
                    <p className="text-lg">Aucun artisan trouvé.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-2 lg:gap-14">
                        {artisans.map((artisan) => (
                            <ArtisanCard key={artisan.id} artisan={artisan} />
                        ))}
                    </div>
                )}
            </section>
        </>
    );
}

export default Search;
