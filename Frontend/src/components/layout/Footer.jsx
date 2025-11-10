import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center bg-[#0074c7] py-10">
            <div className="w-full max-w-[1280px] mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-around">
                    {/* Logo */}
                    <Link to="/">
                        <img
                            src="src/assets/img/Logo_white.png"
                            alt="Logo de Trouve Ton Artisan !"
                            className="w-[200px] md:w-[350px] lg:w-[380px]"
                        />
                    </Link>

                    {/* Adress */}
                    <div className="flex flex-col gap-2 text-white">
                        <h3 className="text-sm md:text-base lg:text-lg">
                            Lyon
                        </h3>
                        <address className="text-xs md:text-sm lg:text-base text-lt">
                            101 cours Charlemagne <br />
                            CS 20033 <br />
                            69269 LYON CEDEX 02 <br />
                            France <br />
                            <a
                                href="tel:+33426734000"
                                className="text-lt flex items-center gap-2"
                            >
                                <Phone /> +33 (0)4 26 73 40 00
                            </a>
                        </address>
                    </div>
                </div>

                {/* Links */}
                <div className="border-t border-white mt-10 pt-10">
                    <ul className="flex flex-col md:flex-row items-center justify-center gap-6 flex-wrap text-white text-xs md:text-sm lg:text-base">
                        <li>
                            <Link to="/" className="text-lt hover:underline">
                                Mentions légales
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="text-lt hover:underline">
                                Données personnelles
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="text-lt hover:underline">
                                Accessibilité
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="text-lt hover:underline">
                                Presse
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="text-lt hover:underline">
                                Marchés publics
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="text-lt hover:underline">
                                Venir à la région
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="text-lt hover:underline">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="text-lt hover:underline">
                                Politique de cookies
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="text-lt hover:underline">
                                Gestion des cookies
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
