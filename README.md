# Trouve ton Artisan

## Description
Application permettant aux particuliers de trouver un artisan et de lui demander facilement des renseignements,
prestations ou encore des tarifs via un formulaire de contact.

## Fonctionnalités
- Recherche d'artisans par catégorie ou par nom d'artisan
- Consultation des fiches artisans
- Contact d'artisans via un formulaire de contact

## API / Backend

L'API REST de l'application est construite avec Node.js, Express et utilise une base de données MySQL. Elle permet d'intéragir avec la base de données et de récupérer les informations des artisans, des catégories et l'envoi (fictif) des mail grâce au formulaire de contact.

### Points d'accès API

#### Artisans
- `GET /api/artisans` - Liste tous les artisans (avec filtres optionnels)
  - Paramètres de requête :
    - `?category` (optionnel) : Filtre par nom exact de catégorie (ex: "Plomberie")
      - Ne renvoie que les artisans dont la spécialité appartient à la catégorie spécifiée
    - `?search` (optionnel) : Recherche par nom d'artisan
      - Effectue une recherche partielle (LIKE) sur le nom de l'artisan
  - Réponse : Liste des artisans avec leurs spécialités et catégories associées

- `GET /api/artisans/top` - Récupère les artisans du mois
  - Réponse : Liste des artisans marqués comme "top" avec leurs spécialités et catégories

- `GET /api/artisans/:id_artisan` - Récupère les détails d'un artisan spécifique
  - Paramètres d'URL :
    - `id_artisan` : ID de l'artisan à récupérer
  - Réponse : Détails complets de l'artisan, y compris ses spécialités et catégories

#### Catégories
- `GET /api/categories` - Liste toutes les catégories d'artisans disponibles
  - Réponse : Liste des catégories triées par ID

#### Contact
- `POST /api/contact` - Traite une demande de contact
  - Corps de la requête (JSON) :
    ```json
    {
      "nom": "Nom du contact",
      "email": "email@exemple.com",
      "message": "Contenu du message"
    }
    ```
  - Validation :
    - `nom` : Requis
    - `email` : Doit être une adresse email valide
    - `message` : Requis, doit contenir au moins 10 caractères
  - Réponse :
    ```json
    {
      "success": true,
      "message": "Votre message a été transmis à l'artisan"
    }
    ```
  - Note : Actuellement, l'email est simulé et affiché dans les logs du serveur

### Technologies utilisées
- **Backend** : Node.js, Express
- **Base de données** : MySQL avec Sequelize comme ORM
- **Sécurité** : CORS, validation des entrées
- **Validation** : express-validator

### Structure de la base de données

- **categorie** :
  - `id_categorie` (PK, auto-incrémenté)
  - `nom` : Nom de la catégorie (obligatoire)

- **specialite** :
  - `id_specialite` (PK, auto-incrémenté)
  - `nom` : Nom de la spécialité (obligatoire, unique)
  - `id_categorie` (FK vers categorie)

- **artisan** : 
  - `id_artisan` (PK, auto-incrémenté)
  - `nom` : Nom de l'artisan (obligatoire)
  - `email` : Email de contact (unique, validé)
  - `site` : Site web (optionnel, doit être une URL valide)
  - `ville` : Ville d'exercice (obligatoire)
  - `description` : Description de l'activité (obligatoire)
  - `note` : Note moyenne (entre 0 et 5)
  - `top` : Booléen indiquant si l'artisan est mis en avant

- **Relations** :
  - Une catégorie peut avoir plusieurs spécialités
  - Les spécialités sont liées à une seule catégorie
  - Un artisan ne peut avoir qu'une seule spécialité

### Configuration requise
- Node.js (version 14.x ou supérieure)
- Base de données MySQL
- Variables d'environnement (créer un fichier `.env` à la racine du dossier Backend) :
  ```
  DB_NAME=votre_base_de_donnees
  DB_USER=votre_utilisateur
  DB_PASSWORD=votre_mot_de_passe
  DB_HOST=localhost
  DB_PORT=3306
  HOST=localhost
  PORT=3000
  ```

### Installation et démarrage

1. Installer les dépendances :
   ```bash
   cd Backend
   npm install
   ```

2. Configurer la base de données :
   - Créer une base de données MySQL
   - Exécuter le script SQL fourni dans le dossier `DB`

3. Démarrer le serveur :
   ```bash
   npm start
   ```
   Le serveur sera accessible à l'adresse : `http://localhost:3000`

## Auteur
Lamarre Léo - https://github.com/LamarreLeo
