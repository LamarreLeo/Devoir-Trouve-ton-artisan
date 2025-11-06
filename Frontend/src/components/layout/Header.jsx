import { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { getCategories } from "../../services/api";

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
        <header className="flex items-center justify-between shadow-sm lg:h-[135px] ">
            {/* Logo */}
            <Link to="/">
                <img
                    src="src/assets/img/Logo.png"
                    alt="Logo de Trouve Ton Artisan !"
                    className="w-[380px]"
                />
            </Link>

            {/* Header Items */}
            <div className="flex flex-col pr-10">
                {/* Search Bar */}
                <div className="flex items-center">
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Rechercher"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button type="submit">Rechercher</button>
                    </form>
                </div>

                {/* Header Links */}
                <nav>
                    <ul className="flex gap-5">
                        {categories.map((category) => (
                            <li key={category.nom}>
                                <NavLink to={`/search?category=${category.nom}`}>
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
