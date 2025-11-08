import StepItem from "../components/ui/StepItem";
import TopArtisans from "../components/ui/TopArtisans.jsx";

function Home() {
    return (
        <>
            {/* Section "Comment trouver mon artisan" */}
            <section className="flex flex-col justify-center items-center gap-10 md:gap-20 mt-10 md:mt-20 px-10">
                <h1 className="text-2xl md:text-3xl lg:text-4xl dark-blue">Comment trouver mon artisan ?</h1>
                <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-14 lg:gap-14">
                    <StepItem
                        stepNumber={1}
                        stepDescription="Choisir la catégorie d'artisanat dans le menu."
                    />
                    <StepItem
                        stepNumber={2}
                        stepDescription="Choisir un artisan."
                    />
                    <StepItem
                        stepNumber={3}
                        stepDescription="Le contacter via le formulaire de contact."
                    />
                    <StepItem
                        stepNumber={4}
                        stepDescription="Une réponse sera apportée sous 48h."
                    />
                </ol>
            </section>

            {/* Section "Les artisans du mois" */}
            <section className="flex flex-col justify-center items-center gap-10 md:gap-20 px-10">
                <h1 className="text-2xl md:text-3xl lg:text-4xl dark-blue">Les artisans du mois</h1>
                <TopArtisans />
            </section>
        </>
    );
}

export default Home;
