# Backend de Trouve Ton Artisan

## Introduction
Ce répertoire contient le code source du backend de l'application "Trouve Ton Artisan". Ce backend est développé en Node.js avec Express.js et utilise Sequelize pour la gestion de la base de données.

## Setup et Installation
1. Assurez-vous d'avoir Node.js installé sur votre machine.
2. Clonez le dépôt : `git clone https://github.com/LamarreLeo/Devoir-Trouve-ton-artisan`
3. Accédez au répertoire du backend : `cd Devoir-Trouve-ton-artisan/Backend`
4. Installez les dépendances : `npm install`
5. Configurez le fichier `.env` avec vos variables d'environnement.

## Scripts Disponibles
- `npm run dev` : Lance le serveur en mode développement avec Nodemon.
- `npm start` : Démarre le serveur en mode production.

## Structure du Projet
- `src/`: Contient le code source du backend.
- `config/`: Fichiers de configuration.
- `controllers/`: Logique métier pour les routes.
- `models/`: Modèles Sequelize pour la base de données.
- `routes/`: Définitions des routes API.
- `services/`: Services pour la gestion des données.

## Dépendances
- Express
- Sequelize
- MySQL2
- Cors
- Dotenv
- Helmet

## Outils de Développement
- Nodemon
