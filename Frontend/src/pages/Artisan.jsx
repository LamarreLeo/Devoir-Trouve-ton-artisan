import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArtisanById, sendContactMessage } from "../services/api";
import { MapPin, Hammer, User, ChefHat, Factory, Star } from "lucide-react";

function Artisan() {
    const { id_artisan } = useParams();
    const [artisan, setArtisan] = useState(null);
    const [loading, setLoading] = useState(true);
    const [form, setForm] = useState({
        nom: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState(null);

    // Mapping des icônes selon la catégorie
    const categoryIcons = {
        Bâtiment: <Hammer className="blue w-6 h-6" />,
        Services: <User className="blue w-6 h-6" />,
        Fabrication: <Factory className="blue w-6 h-6" />,
        Alimentation: <ChefHat className="blue w-6 h-6" />,
    };

    // Récupération de l'artisan
    useEffect(() => {
        const fetchArtisan = async () => {
            try {
                const data = await getArtisanById(id_artisan);
                setArtisan(data);
            } catch (error) {
                console.error("Erreur lors du chargement de l'artisan", error);
            } finally {
                setLoading(false);
            }
        };
        fetchArtisan();
    }, [id_artisan]);

    // Gestion du formulaire
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await sendContactMessage(form);
            setStatus("success");
            setForm({
                nom: "",
                email: "",
                message: "",
            });
        } catch (error) {
            console.error("Erreur lors de l'envoi du message", error);
            setStatus("error");
        }
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

    if (loading) return <p>Chargement...</p>;
    if (!artisan) return <p>Artisan non trouvé</p>;

    return (
        <>
            {/* Section présentation de l'artisan */}
            <section className="flex flex-col w-full justify-center items-center gap-10 md:gap-20 px-10">
                {/* Nom, note et site */}
                <div className="flex flex-col items-center justify-center gap-6">
                    <div className="flex flex-col items-center gap-4">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl dark-blue">
                            {artisan.nom}
                        </h1>
                        <p className="flex items-center text-sm md:text-md lg:text-md gap-2 dark">
                            {renderStars(artisan.note)} {artisan.note}/5
                        </p>
                    </div>
                    {artisan.site && (
                        <a
                            href={artisan.site}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-4 py-2 rounded-md text-[#F1F8FC] bg-[#0074C7] hover:bg-[#00497C] transition-colors duration-300"
                        >
                            Voir le site de l'artisan
                        </a>
                    )}
                </div>

                {/* Informations */}
                <div className="flex flex-col md:flex-row w-full justify-around items-center gap-10">
                    {/* Specialité et ville */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            {categoryIcons[artisan.specialite.categorie.nom]}
                            <p className="text-sm">{artisan.specialite.nom}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="blue w-6 h-6" />
                            <p className="text-sm">{artisan.ville}</p>
                        </div>
                    </div>

                    {/* A propos */}
                    <div className="flex flex-col justify-center items-center gap-4 max-w-[420px]">
                        <h2 className="text-lg md:text-xl lg:text-2xl blue">
                            A propos
                        </h2>
                        <p className="dark text-center md:text-sm lg:text-lg">
                            {artisan.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Section formulaire de contact */}
            <section className="flex flex-col w-full justify-center items-center gap-10 md:gap-20 px-10">
                <h2 className="text-2xl md:text-3xl lg:text-4xl dark-blue">
                    Contacter l'artisan :
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4 border border-[#0074C7] p-8 rounded-md md:w-1/2"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="nom">Nom</label>
                            <input
                                type="text"
                                name="nom"
                                placeholder="Votre nom"
                                value={form.nom}
                                onChange={handleChange}
                                className="border border-[#0074C7] p-2 rounded-md"
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Votre email"
                                value={form.email}
                                onChange={handleChange}
                                className="border border-[#0074C7] p-2 rounded-md"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 mb-6">
                        <label htmlFor="message">Votre message</label>
                        <textarea
                            name="message"
                            placeholder="Votre message"
                            value={form.message}
                            onChange={handleChange}
                            className="border border-[#0074C7] p-2 rounded-md h-32"
                            required
                        ></textarea>
                    </div>
                    <div className="flex gap-6 w-full justify-center">
                        <button
                            onClick={handleSubmit}
                            type="submit"
                            className="bg-green text-[#F1F8FC] p-2 rounded-md w-1/3"
                        >
                            Envoyer
                        </button>
                        <button
                            onClick={() =>
                                setForm({ nom: "", email: "", message: "" })
                            }
                            type="button"
                            className="bg-red text-[#F1F8FC] p-2 rounded-md w-1/3"
                        >
                            Effacer
                        </button>
                    </div>

                    {status === "success" && (
                        <p className="flex w-full text-center justify-center mt-6">
                            Message envoyé avec succès !
                        </p>
                    )}
                    {status === "error" && (
                        <p className="flex w-full text-center justify-center mt-6">
                            Une erreur est survenue, veuillez réessayer.
                        </p>
                    )}
                </form>
            </section>
        </>
    );
}

export default Artisan;
