import StepItem from "../components/ui/StepItem";

function Home() {
    return (
        <div className="flex items-center justify-between w-full max-w-[1280px] gap-10">
            {/* Section Comment trouver mon artisan */}
            <section>
                <h1>Comment trouver mon artisan ?</h1>
                <ol>
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
        </div>
    );
}

export default Home;
