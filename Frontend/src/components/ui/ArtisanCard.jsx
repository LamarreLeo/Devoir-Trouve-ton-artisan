import { Link } from "react-router-dom";
import { MapPin, Hammer, User, ChefHat, Factory, Star } from "lucide-react";

function ArtisanCard({ artisan }) {
    // Mapping des icônes selon la catégorie
    const categoryIcons = {
        Bâtiment: <Hammer className="blue w-4 h-4" />,
        Services: <User className="blue w-4 h-4" />,
        Fabrication: <Factory className="blue w-4 h-4" />,
        Alimentation: <ChefHat className="blue w-4 h-4" />,
    };

    // Mapping des icônes de fond selon la catégorie
    const bgCategoryIcons = {
        Bâtiment: <Hammer className="blue w-full h-full opacity-10" />,
        Services: <User className="blue w-full h-full opacity-10" />,
        Fabrication: <Factory className="blue w-full h-full opacity-10" />,
        Alimentation: <ChefHat className="blue w-full h-full opacity-10" />,
    };

    // Calcul des étoiles de note
    const renderStars = (note) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <Star
                    key={i}
                    size={14}
                    className={`${
                        i <= Math.min(note, 5)
                            ? "fill-[#FFD700] text-[#FFD700]"
                            : "text-gray-300"
                    }`}
                />
            );
        }
        return stars;
    };

    return (
        <Link to={`/artisan/:${artisan.id_artisan}`}>
            <div className="relative flex flex-col items-center justify-center gap-2 md:gap-4 bg-light p-4 md:p-8 rounded-lg dark shadow-md hover:shadow-xl transition-all duration-300">
                {/* Icône de fond */}
                <div className="absolute w-36 h-36">
                    {bgCategoryIcons[artisan.specialite.categorie.nom]}
                </div>

                {/* Nom et note */}
                <div className="flex flex-col items-center gap-2">
                    <h3 className="md:text-md lg:text-lg">{artisan.nom}</h3>
                    <div className="flex items-center gap-1">
                        {renderStars(artisan.note)}
                        <p className="md:text-sm lg:text-md">
                            ({artisan.note}/5)
                        </p>
                    </div>
                </div>

                {/* Specialité et ville */}
                <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center gap-2">
                        {categoryIcons[artisan.specialite.categorie.nom]}
                        <p className="text-sm">
                            {artisan.specialite.nom}
                        </p>
                    </div>

                    <div className="flex items-center gap-2">
                        <MapPin className="blue w-4 h-4" />
                        <p className="text-sm">{artisan.ville}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default ArtisanCard;
