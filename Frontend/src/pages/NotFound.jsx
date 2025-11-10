import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="min-h-100 flex flex-col items-center justify-center p-6 gap-6 text-center">
            <h1 className="text-2xl md:text-4xl dark-blue">Erreur 404</h1>
            <p className="dark text-xs md:text-sm lg:text-base">
                Cette page n'existe pas ! Elle n'a jamais franchi la ligne
                d'arrivée.
            </p>
            <Link to="/" className="blue text-xs md:text-sm lg:text-base hover:underline">
                Retour à l'accueil
            </Link>
            <img src="src/assets/img/ERREUR 404-VISU.jpg" alt="Erreur 404" />
        </div>
    );
}

export default NotFound;
