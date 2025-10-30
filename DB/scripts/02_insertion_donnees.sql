-- -----------------------------------------------------
-- BASE DE DONNÉES Trouve ton artisan
-- Script d'insertion des données
-- -----------------------------------------------------
-- Description : Alimentation de la base de données avec les données
--               issues du fichier Excel fournis (data.xlsx)
-- -----------------------------------------------------

USE TrouveTonArtisan;

-- -----------------------------------------------------
-- DÉSACTIVATION DES VÉRIFICATIONS (performance)
-- -----------------------------------------------------
SET FOREIGN_KEY_CHECKS = 0;
SET UNIQUE_CHECKS = 0;

-- -----------------------------------------------------
-- NETTOYAGE DES TABLES (pour pouvoir réexécuter le script)
-- -----------------------------------------------------
-- Suppression dans l'ordre inverse des dépendances
TRUNCATE TABLE artisan;
TRUNCATE TABLE specialite;
TRUNCATE TABLE categorie;

-- -----------------------------------------------------
-- INSERTION DES CATEGORIES
-- -----------------------------------------------------
INSERT INTO categorie (id_categorie, nom) VALUES
(1, 'Bâtiment'),
(2, 'Services'),
(3, 'Fabrication'),
(4, 'Alimentation');

-- -----------------------------------------------------
-- INSERTION DES SPECIALITES
-- -----------------------------------------------------
INSERT INTO specialite (id_specialite, nom, id_categorie) VALUES
(1, 'Chauffagiste', 1),
(2, 'Electricien', 1),
(3, 'Menuisier', 1),
(4, 'Plombier', 1),
(5, 'Coiffeur', 2),
(6, 'Fleuriste', 2),
(7, 'Toiletteur', 2),
(8, 'Webdesign', 2),
(9, 'Bijoutier', 3),
(10, 'Couturier', 3),
(11, 'Ferronnier', 3),
(12, 'Boucher', 4),
(13, 'Boulanger', 4),
(14, 'Chocolatier', 4),
(15, 'Traiteur', 4);

-- -----------------------------------------------------
-- INSERTION DES ARTISANS
-- -----------------------------------------------------
INSERT INTO artisan (id_artisan, nom, email, site, ville, description, note, top, id_specialite) VALUES
(1, 'Orville Salmons', 'o-salmons@live.com', '', 'Evian', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 5.0, 1, 1),
(2, 'Mont Blanc Eléctricité', 'contact@mont-blanc-electricite.com', 'https://mont-blanc-electricite.com', 'Chamonix', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 4.5, 0, 2),
(3, 'Boutot & fils', 'boutot-menuiserie@gmail.com', 'https://boutot-menuiserie.com', 'Bourg-en-bresse', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 4.7, 0, 3),
(4, 'Vallis Bellemare', 'v.bellemare@gmail.com', 'https://plomberie-bellemare.com', 'Vienne', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 4.0, 0, 4),
(5, 'Royden Charbonneau', 'r.charbonneau@gmail.com', '', 'Saint-Priest', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 3.8, 0, 5),
(6, 'Leala Dennis', 'l.dennis@hotmail.com', 'https://coiffure-leala-chambery.fr', 'Chambéry', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 3.8, 0, 5),
(7, "C'est sup'hair", 'sup-hair@gmail.com', 'https://sup-hair.fr', 'Romans-sur-Isère', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 4.1, 0, 5),
(8, 'Le monde des fleurs', 'contact@le-monde-des-fleurs-annonay.fr', 'https://le-monde-des-fleurs-annonay.fr', 'Annonay', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 4.6, 0, 6),
(9, 'Valérie Laderoute', 'v-laderoute@gmail.com', '', 'Valence', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 4.5, 0, 7),
(10, 'GM Graphisme', 'contact@cm-graphisme.com', 'https://cm-graphisme.com', 'Valence', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 4.4, 0, 8),
(11, 'Claude Quinn', 'claude.quinn@gmail.com', '', 'Aix-les-bains', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 4.2, 0, 9),
(12, 'Amitee Lécuyer', 'a.amitee@hotmail.com', 'https://lecuyer-couture.com', 'Annecy', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 4.5, 0, 10),
(13, 'Ernest Carignan', 'e-carigan@hotmail.com', '', 'Le Puy-en-Velay', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 5.0, 0, 11),
(14, 'Boucherie Dumont', 'boucherie.dumont@gmail.com', '', 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 4.5, 0, 12),
(15, 'Au pain chaud', 'aupainchaud@hotmail.com', '', 'Montélimar', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 4.8, 1, 13),
(16, 'Chocolaterie Labbé', 'chocolaterie-labbe@gmail.com', 'https://chocolaterie-labbe.fr', 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 4.9, 1, 14),
(17, 'Traiteur Truchon', 'contact@truchon-traiteur.fr', 'https://truchon-traiteur.fr', 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 4.1, 0, 15);


-- -----------------------------------------------------
-- RÉACTIVATION DES VÉRIFIACTIONS
-- -----------------------------------------------------
SET FOREIGN_KEY_CHECKS = 1;
SET UNIQUE_CHECKS = 1;