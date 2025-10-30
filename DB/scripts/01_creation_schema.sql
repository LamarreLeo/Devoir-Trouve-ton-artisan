-- -----------------------------------------------------
-- BASE DE DONNÉES Trouve ton artisan
-- Script de création du schéma et de l'utilisateur
-- -----------------------------------------------------
-- Description : Création de la base de données pour la plateforme Trouve ton artisan
--               incluant les tables, contraintes et utilisateur d'administration.
--               La majeur partie du script a été généré par MySQL Workbench.
-- -----------------------------------------------------

-- -----------------------------------------------------
-- SAUVEGARDE DES PARAMÈTRES MYSQL
-- -----------------------------------------------------
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- CRÉATION DU SCHEMA
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `TrouveTonArtisan` ;
CREATE SCHEMA IF NOT EXISTS `TrouveTonArtisan` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `TrouveTonArtisan` ;

-- -----------------------------------------------------
-- CRÉATION DE L'UTILISATEUR D'ADMINISTRATION
-- -----------------------------------------------------
DROP USER IF EXISTS 'ttaAdmin'@'localhost';
CREATE USER 'ttaAdmin'@'localhost' IDENTIFIED BY 'ttaAdmin2025!';
GRANT ALL PRIVILEGES ON TrouveTonArtisan.* TO 'ttaAdmin'@'localhost';
FLUSH PRIVILEGES;



-- -----------------------------------------------------
-- CRÉATION DES TABLES
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Table `TrouveTonArtisan`.`categorie`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `TrouveTonArtisan`.`categorie` (
    `id_categorie` INT NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(50) NOT NULL,
    PRIMARY KEY (`id_categorie`),
    UNIQUE INDEX `nom_UNIQUE` (`nom` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
DEFAULT COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `TrouveTonArtisan`.`specialite`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `TrouveTonArtisan`.`specialite` (
    `id_specialite` INT NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(50) NOT NULL,
    `id_categorie` INT NOT NULL,
    PRIMARY KEY (`id_specialite`),
    UNIQUE INDEX `nom_UNIQUE` (`nom` ASC) VISIBLE,
    INDEX `fk_categorie_specialite_idx` (`id_categorie` ASC) VISIBLE,
    CONSTRAINT `fk_categorie_specialite`
        FOREIGN KEY (`id_categorie`)
        REFERENCES `TrouveTonArtisan`.`categorie` (`id_categorie`)
        ON DELETE RESTRICT
        ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
DEFAULT COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `TrouveTonArtisan`.`artisan`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `TrouveTonArtisan`.`artisan` (
    `id_artisan` INT NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `site` VARCHAR(255) NULL DEFAULT NULL,
    `ville` VARCHAR(50) NOT NULL,
    `description` TEXT NOT NULL,
    `note` DECIMAL(2,1) NULL DEFAULT NULL,
    `top` TINYINT NOT NULL DEFAULT '0',
    `id_specialite` INT NOT NULL,
    PRIMARY KEY (`id_artisan`),
    UNIQUE INDEX `nom_UNIQUE` (`nom` ASC) VISIBLE,
    UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
    INDEX `fk_specialite_artisan_idx` (`id_specialite` ASC) VISIBLE,
    CONSTRAINT `fk_specialite_artisan`
        FOREIGN KEY (`id_specialite`)
        REFERENCES `TrouveTonArtisan`.`specialite` (`id_specialite`)
        ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
DEFAULT COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- RESTAURATION DES PARAMÈTRES MYSQL
-- -----------------------------------------------------
SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
