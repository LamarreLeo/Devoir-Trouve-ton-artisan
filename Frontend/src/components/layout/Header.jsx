import { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { getCategories } from "../../services/api";
import { Search } from "lucide-react";

function Header() {
    const [search, setSearch] = useState("");
    const [categories, setCategories] = useState([]);
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
        <header className="flex items-center justify-between shadow-sm h-[75px] md:h-[135px] lg:h-[135px] ">
            {/* Logo */}
            <Link to="/">
                <img
                    src="src/assets/img/Logo.png"
                    alt="Logo de Trouve Ton Artisan !"
                    className="w-[200px] md:w-[350px] lg:w-[380px]"
                />
            </Link>

            {/* Header Items */}
            <div className="flex md:flex-col pr-10 h-full justify-center gap-5">
                {/* Search Bar */}
                <div className="hidden md:flex justify-center">
                    <form
                        onSubmit={handleSearch}
                        className="border border-[#0074C5] rounded-md p-2 flex items-center"
                    >
                        <input
                            type="text"
                            placeholder="Chercher un artisan"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="focus:outline-none w-[250px]"
                        />
                        <button type="submit">
                            <Search className="w-5 h-5 text-[#0074C5]" />
                        </button>
                    </form>
                </div>

                {/* Header Links */}
                <nav className="hidden md:flex justify-center">
                    <ul className="flex gap-5">
                        {categories.map((category) => (
                            <li key={category.nom}>
                                <NavLink
                                    to={`/search?category=${category.nom}`}
                                    className="hover:underline"
                                >
                                    {category.nom}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
