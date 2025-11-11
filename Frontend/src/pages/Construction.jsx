import { Helmet } from "react-helmet-async";

function Construction() {
    return (
        <>
            <Helmet>
                <title>Page en construction - Trouve Ton Artisan !</title>
                <meta
                    name="description"
                    content="Cette page sera bientôt disponible."
                />
            </Helmet>
            <div className="min-h-100 flex items-center justify-center p-6">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4 dark-blue">
                        Page en construction
                    </h1>
                    <p className="dark">Cette page sera bientôt disponible.</p>
                </div>
            </div>
        </>
    );
}

export default Construction;
