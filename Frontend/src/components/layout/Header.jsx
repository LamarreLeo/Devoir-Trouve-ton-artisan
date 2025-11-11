import { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { getCategories } from "../../services/api";
import { Search, Menu } from "lucide-react";

function Header() {
    const [search, setSearch] = useState("");
    const [categories, setCategories] = useState([]);
    const [searchExpanded, setSearchExpanded] = useState(false);
    const [menuExpanded, setMenuExpanded] = useState(false);
    const navigate = useNavigate();

    // Gestion de la recherche
    const handleSearch = (e) => {
        e.preventDefault();
        if (search.trim() !== "") {
            navigate(`/search?search=${search}`);
        }
    };

    // Charger les catégories au chargement du composant
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await getCategories();
                setCategories(data);
            } catch (error) {
                console.error(
                    "Erreur lors du chargement des catégories :",
                    error
                );
            }
        };
        fetchCategories();
    }, []);

    return (
        <header
            className={`flex flex-col items-center shadow-sm md:h-[135px] lg:h-[135px] 
                w-full transition-all duration-300 
                ${searchExpanded ? "h-[170px]" : "h-[75px]"}
                ${menuExpanded ? "h-[170px]" : "h-[75px]"}`}
            aria-label="En-tête principal"
            role="banner"
        >
            <div className="flex items-center justify-between w-full max-w-[1280px] md:px-4 mt-[-18px] md:mt-[-28px] lg:mt-[-36px]">
                {/* Logo */}
                <Link to="/">
                    <img
                        src="/assets/img/Logo.png"
                        alt="Logo de Trouve Ton Artisan !"
                        className="w-[200px] md:w-[350px] lg:w-[380px]"
                    />
                </Link>

                {/* Header Items */}
                <div className="flex items-center md:flex-col pr-10 h-full justify-center gap-5">
                    {/* Search Bar */}
                    <div className="hidden md:flex justify-center">
                        <form
                            onSubmit={handleSearch}
                            className="border border-[#0074C5] rounded-md p-2 flex items-center"
                        >
                            <label htmlFor="search-input" className="sr-only">
                                Rechercher un artisan
                            </label>
                            <input
                                id="search-input"
                                type="search"
                                placeholder="Chercher un artisan"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="focus:outline-none w-[250px]"
                                aria-required="true"
                            />
                            <button type="submit">
                                <Search className="w-5 h-5 text-[#0074C5] cursor-pointer" />
                            </button>
                        </form>
                    </div>

                    {/* Header Links */}
                    <nav
                        className="hidden md:flex justify-center"
                        role="navigation"
                        aria-label="Navigation principale"
                    >
                        <ul className="flex gap-5">
                            {categories.map((category) => (
                                <li key={category.nom} role="none">
                                    <NavLink
                                        to={`/search?category=${category.nom}`}
                                        className="hover:underline text-sm lg:text-base dark"
                                    >
                                        {category.nom}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Header Mobile */}
                    <div className="md:hidden flex gap-5">
                        {/* Search Icon */}
                        <button
                            type="button"
                            onClick={() => {
                                if (searchExpanded) {
                                    setSearchExpanded(false);
                                } else {
                                    setMenuExpanded(false);
                                    setSearchExpanded(true);
                                }
                            }}
                            aria-expanded={searchExpanded}
                            aria-controls="mobile-search"
                            aria-label={
                                searchExpanded
                                    ? "Fermer la recherche"
                                    : "Ouvrir la recherche"
                            }
                        >
                            <Search
                                className="w-6 h-6 text-[#0074C5] cursor-pointer"
                                aria-hidden="true"
                            />
                        </button>

                        {/* Menu Icon */}
                        <button
                            type="button"
                            onClick={() => {
                                if (menuExpanded) {
                                    setMenuExpanded(false);
                                } else {
                                    setSearchExpanded(false);
                                    setMenuExpanded(true);
                                }
                            }}
                            aria-expanded={menuExpanded}
                            aria-controls="mobile-menu"
                            aria-label={
                                menuExpanded
                                    ? "Fermer le menu"
                                    : "Ouvrir le menu"
                            }
                            aria-haspopup="true"
                        >
                            <Menu
                                className={`w-6 h-6 text-[#0074C5] cursor-pointer transition-all duration-300 ${
                                    menuExpanded ? "rotate-270" : ""
                                }`}
                                aria-hidden="true"
                            />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Search Bar */}
            <div
                id="mobile-search"
                role="search"
                aria-label="Recherche mobile"
                className={`px-4 transition-all duration-300 ${
                    searchExpanded ? "opacity-100" : "opacity-0 h-0"
                }`}
            >
                {searchExpanded && (
                    <form
                        onSubmit={handleSearch}
                        className="border border-[#0074C5] rounded-md p-2 flex items-center"
                    >
                        <label
                            htmlFor="mobile-search-input"
                            className="sr-only"
                        >
                            Rechercher un artisan
                        </label>
                        <input
                            id="mobile-search-input"
                            type="search"
                            placeholder="Chercher un artisan"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="focus:outline-none w-[300px]"
                            aria-required="true"
                        />
                        <button type="submit">
                            <Search className="w-5 h-5 text-[#0074C5] cursor-pointer" />
                        </button>
                    </form>
                )}
            </div>

            {/* Mobile Menu */}
            <nav
                id="mobile-menu"
                role="navigation"
                aria-label="Menu principal"
                className={`w-full flex justify-center px-4 transition-all duration-300 ${
                    menuExpanded ? "opacity-100" : "opacity-0 h-0"
                }`}
            >
                {menuExpanded && (
                    <ul
                        className="flex gap-4"
                        role="menubar"
                        aria-label="Catégories"
                    >
                        {categories.map((category) => (
                            <li key={category.nom} role="none">
                                <NavLink
                                    to={`/search?category=${category.nom}`}
                                    className="hover:underline text-sm lg:text-base block py-2"
                                    onClick={() => setMenuExpanded(false)}
                                    role="menuitem"
                                    tabIndex={menuExpanded ? 0 : -1}
                                >
                                    {category.nom}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                )}
            </nav>
        </header>
    );
}

export default Header;
