-- --------------------------------------------------------
-- Host:                         localhost
-- Versión del servidor:         8.0.39 - MySQL Community Server - GPL
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.8.0.6908
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para elearning
DROP DATABASE IF EXISTS `cursoteka`;
CREATE DATABASE IF NOT EXISTS `cursoteka` /*!40100 DEFAULT CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `cursoteka`;

-- Volcando estructura para tabla elearning.persona
DROP TABLE IF EXISTS `persona`;
CREATE TABLE IF NOT EXISTS `persona` (
  `id_persona` bigint NOT NULL AUTO_INCREMENT,
  `nombres` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL DEFAULT '',
  `paterno` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL DEFAULT '',
  `materno` VARCHAR(80) NULL DEFAULT NULL COLLATE 'utf8mb4_spanish_ci',  
  `direccion` text CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci,
  `telefono` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `mobile` varchar(15) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `fecha_registro` timestamp NULL DEFAULT (now()),
  `id_usuario_reg` bigint DEFAULT NULL,
  `fecha_mod` timestamp NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
  `id_user_mod` bigint DEFAULT NULL,
  `id_profesion` bigint DEFAULT NULL,
  PRIMARY KEY (`id_persona`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

INSERT INTO `persona` ( `nombres`, `paterno`, `materno`, `direccion`, `telefono`, `mobile`, `fecha_nacimiento`, `fecha_registro`, `id_usuario_reg`, `fecha_mod`, `id_user_mod`, `id_profesion`) VALUES
('Juan', 'Pérez', '', 'Calle Falsa 123', '555-1234', NULL, '1990-04-23', '2024-08-27 13:52:32', 1, '2024-08-27 13:52:32', 1, 101),
('María', 'Gómez', '', 'Av. Siempre Viva 456', '555-5678', NULL, '1985-09-15', '2024-08-27 13:52:32', 1, '2024-08-27 13:52:32', 2, 102),
('Pedro', 'Martínez', '', 'Plaza Mayor 789', '555-9876', NULL, '1978-12-02', '2024-08-27 13:52:32', 2, '2024-08-27 13:52:32', 2, 103),
('Lucía', 'Rodríguez', '', 'Calle Luna 321', '555-4321', NULL, '1992-03-08', '2024-08-27 13:52:32', 3, '2024-08-27 13:52:32', 3, 104),
('Carlos', 'Fernández', '', 'Av. Sol 654', '555-8765', NULL, '1980-06-30', '2024-08-27 13:52:32', 2, '2024-08-27 13:52:32', 4, 105);

-- Volcando estructura para tabla elearning.usuario
DROP TABLE IF EXISTS `usuario`;
CREATE TABLE IF NOT EXISTS `usuario` (
	`id_usuario` BIGINT NOT NULL AUTO_INCREMENT,
	`nombre_usuario` VARCHAR(250) NOT NULL DEFAULT '' COLLATE 'utf8mb4_spanish_ci',
	`email` VARCHAR(250) NOT NULL DEFAULT '' COLLATE 'utf8mb4_spanish_ci',
	`password` VARCHAR(250) NOT NULL DEFAULT '' COLLATE 'utf8mb4_spanish_ci',
	`fecha_registro` TIMESTAMP NULL DEFAULT (CURRENT_TIMESTAMP),
	`id_persona` BIGINT NULL DEFAULT NULL,
	`id_usuario_reg` BIGINT NULL DEFAULT NULL,
	`fecha_mod` TIMESTAMP NULL DEFAULT NULL,
	`id_user_mod` BIGINT NULL DEFAULT NULL,
	`rol` ENUM('estudiante','instructor','administrador') NOT NULL DEFAULT 'estudiante' COLLATE 'utf8mb4_spanish_ci',
	PRIMARY KEY (`id_usuario`) USING BTREE,
	INDEX `id_persona` (`id_persona`) USING BTREE,
	CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`id_persona`) REFERENCES `persona` (`id_persona`) ON UPDATE CASCADE ON DELETE SET NULL
)
COLLATE='utf8mb4_spanish_ci'
ENGINE=InnoDB
AUTO_INCREMENT=29
;

INSERT INTO `usuario` ( `nombre_usuario`, `email`, `password`, `fecha_registro`, `id_persona`, `id_usuario_reg`, `fecha_mod`, `id_user_mod`, `rol`) VALUES
('juanperez', 'juanperez@example.com', 'password123', '2024-08-27 14:20:08', 11, NULL, NULL, NULL, 'estudiante'),
('mariagomez', 'mariagomez@example.com', 'password456', '2024-08-27 14:20:08', 12, NULL, NULL, NULL, 'instructor'),
('pedromartinez', 'pedromartinez@example.com', 'password789', '2024-08-27 14:20:08', 13, NULL, NULL, NULL, 'estudiante'),
('luciarodriguez', 'luciarodriguez@example.com', 'password123', '2024-08-27 14:20:08', 14, NULL, NULL, NULL, 'estudiante'),
('carlosfernandez', 'carlosfernandez@example.com', 'password456', '2024-08-27 14:20:08', 15, NULL, NULL, NULL, 'administrador');

DROP TABLE IF EXISTS `curso`;
CREATE TABLE IF NOT EXISTS `curso` (
  `id_curso` bigint NOT NULL AUTO_INCREMENT,
  `titulo` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `descripcion` text CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci,
  `contenido` text CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci,
  `duracion` int DEFAULT NULL,
  `foto` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `valoracion` int DEFAULT NULL,
  `costo` float DEFAULT NULL,
  `id_instructor` bigint DEFAULT NULL,
  `fecha_registro` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `id_usuario_reg` bigint DEFAULT NULL,
  `fecha_mod` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `id_user_mod` bigint DEFAULT NULL,
  PRIMARY KEY (`id_curso`),
  KEY `fk_instructor` (`id_instructor`),
  CONSTRAINT `fk_instructor` FOREIGN KEY (`id_instructor`) REFERENCES `usuario` (`id_usuario`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

INSERT INTO `curso` (  `titulo`, `descripcion`, `contenido`, `duracion`, `foto`, `valoracion`, `costo`, `id_instructor`, `fecha_registro`, `id_usuario_reg`) VALUES
('Curso de Programación en Python', 'Un curso completo para aprender Python desde cero.', 'Contenido detallado sobre Python', 30, 'foto_python.jpg', 5, 99.99, 26, '2024-08-27 15:41:20', 26 ),
('Curso de Programación en Python', 'Un curso completo para aprender Python desde cero.', 'Contenido detallado sobre Python.', 30, 'foto_python.jpg', 5, 99.99, 27, '2024-08-27 15:42:21', 27 ),
('Introducción al Desarrollo Web', 'Curso básico de desarrollo web con HTML, CSS y JavaScript.', 'Material introductorio y ejemplos prácticos.', 20, 'foto_web.jpg', 4, 49.99, 27, '2024-08-27 15:42:21', 27 ),
('Diseño Gráfico con Photoshop', 'Aprende a usar Photoshop para crear diseños impactantes.', 'Tutoriales paso a paso sobre Photoshop.', 25, 'foto_photoshop.jpg', 4, 79.99, 27, '2024-08-27 15:42:21', 26 ),
('Análisis de Datos con R', 'Curso avanzado sobre análisis de datos utilizando R.', 'Contenido especializado en análisis estadístico.', 40, 'foto_r.jpg', 5, 149.99, 27, '2024-08-27 15:42:21', 26 ),
('Manejo de Bases de Datos con MySQL', 'Curso práctico para aprender a manejar bases de datos con MySQL.', 'Material exhaustivo sobre administración de bases de datos.', 35, 'foto_mysql.jpg', 4, 89.99, 30, '2024-08-27 15:42:21', 26 );

CREATE TABLE IF NOT EXISTS `curso_recursos` (
  `id_curso_recurso` bigint NOT NULL AUTO_INCREMENT,
  `id_curso` bigint NOT NULL,
  `detalle_recurso` text COLLATE utf8mb3_spanish_ci,
  `tipo_recurso` varchar(250) COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `nombre` varchar(250) COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `fecha_reg` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_mod` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `user_ad` bigint DEFAULT NULL,
  `user_mod` bigint DEFAULT NULL,
  PRIMARY KEY (`id_curso_recurso`),
  KEY `fk_curso_rec` (`id_curso`),
  CONSTRAINT `fk_curso_rec` FOREIGN KEY (`id_curso`) REFERENCES `curso` (`id_curso`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

 -- Volcando datos para la tabla elearning.curso_recursos: ~0 rows (aproximadamente)
INSERT INTO `curso_recursos` (  `id_curso`, `detalle_recurso`, `tipo_recurso`, `nombre`, `fecha_reg`, `user_ad`) VALUES
(29, 'Recurso detallado para el curso 11', 'Video', 'Introducción al curso', '2024-08-28 15:53:23',  26 ),
(30, 'Recurso adicional para el curso 12', 'Documento', 'Guía del estudiante', '2024-08-28 15:53:23',  27 ),
(31, 'Material de apoyo para el curso 13', 'Presentación', 'Diapositivas del módulo 1', '2024-08-28 15:53:23', 28 ),
(32, 'Recurso interactivo para el curso 14', 'Quiz', 'Evaluación inicial', '2024-08-28 15:53:23',  29 ),
(33, 'Bibliografía recomendada para el curso 15', 'Documento', 'Lecturas complementarias', '2024-08-28 15:53:23',  30 );


-- Volcando estructura para tabla elearning.estudiante_curso
DROP TABLE IF EXISTS `estudiante_curso`;
CREATE TABLE IF NOT EXISTS `estudiante_curso` (
  `id_curso_estudiante` bigint NOT NULL AUTO_INCREMENT,
  `id_estudiante` bigint NOT NULL,
  `id_curso` bigint NOT NULL,
  `fecha_registro` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `tipo_pago` varchar(255) COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `direccion_facturacion` varchar(255) COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `id_user_add` bigint DEFAULT NULL,
  `fecha_mod` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `id_user_mod` bigint DEFAULT NULL,
  PRIMARY KEY (`id_curso_estudiante`),
  KEY `fk_estudiante` (`id_estudiante`),
  KEY `fk_curso` (`id_curso`),
  CONSTRAINT `fk_curso` FOREIGN KEY (`id_curso`) REFERENCES `curso` (`id_curso`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_estudiante` FOREIGN KEY (`id_estudiante`) REFERENCES `usuario` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;


INSERT INTO `estudiante_curso` ( `id_estudiante`, `id_curso`, `fecha_registro`, `tipo_pago`, `direccion_facturacion`, `id_user_add`) VALUES
(26, 29, '2024-08-27 16:01:01', 'Tarjeta de Crédito', 'Calle Falsa 123', 26 ),
(27, 30, '2024-08-27 16:01:01', 'Transferencia Bancaria', 'Avenida Siempre Viva 742', 27),
(28, 31, '2024-08-27 16:01:01', 'PayPal', 'Plaza Mayor 456', 28),
(29, 32, '2024-08-27 16:01:01', 'Efectivo', 'Calle del Pez 89', 29),
(30, 33, '2024-08-27 16:01:01', 'Tarjeta de Débito', 'Calle Luna 321', 30);

 
