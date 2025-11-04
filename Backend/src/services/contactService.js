const sendContactEmail = async (data) => {
    // Simuler un traitement de l'email
    console.log(`Traitement d'un email de la part de : ${data.nom} / ${data.email}`);

    // Simuler un léger délai
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Simuler un succès
    return {
        success: true,
        message: "Votre message a été transmis à l'artisan",
    };
};

module.exports = {
    sendContactEmail,
};
