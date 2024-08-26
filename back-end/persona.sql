/*
 Created by            : fabinnerself
 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version :  8.0.39
 

 Date: 26/08/2024 11:40:55
*/


drop DATABASE if EXISTS elearning; 
CREATE DATABASE elearning CHARACTER SET utf8 COLLATE utf8_spanish_ci;

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for persona
-- ----------------------------
 CREATE TABLE `persona` (
	`id_persona` BIGINT NOT NULL AUTO_INCREMENT,
	`nombres` TEXT NOT NULL COLLATE 'utf8mb3_spanish_ci',
	`apellidos` TEXT NOT NULL COLLATE 'utf8mb3_spanish_ci',
	`direccion` TEXT NULL DEFAULT NULL COLLATE 'utf8mb3_spanish_ci',
	`telefono` TEXT NULL DEFAULT NULL COLLATE 'utf8mb3_spanish_ci',
	`fecha_nacimiento` DATE NULL DEFAULT NULL,
	`fecha_registro` TIMESTAMP NULL DEFAULT (CURRENT_TIMESTAMP),
	`id_usuario_reg` BIGINT NULL DEFAULT NULL,
	`fecha_mod` TIMESTAMP NULL DEFAULT (CURRENT_TIMESTAMP) ON UPDATE CURRENT_TIMESTAMP,
	`id_user_mod` BIGINT NULL DEFAULT NULL,
	`id_profesion` BIGINT NULL DEFAULT NULL,
	PRIMARY KEY (`id_persona`) USING BTREE
)
COLLATE='utf8mb3_spanish_ci'
ENGINE=InnoDB
;