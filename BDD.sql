-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mer. 09 fév. 2022 à 07:22
-- Version du serveur :  8.0.21
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `memorie_game`
--

-- --------------------------------------------------------

--
-- Structure de la table `times`
--

DROP TABLE IF EXISTS `times`;
CREATE TABLE IF NOT EXISTS `times` (
  `id_time` int NOT NULL AUTO_INCREMENT,
  `time` time NOT NULL,
  `date_time` date NOT NULL,
  PRIMARY KEY (`id_time`)
) ENGINE=MyISAM AUTO_INCREMENT=48 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `times`
--

INSERT INTO `times` (`id_time`, `time`, `date_time`) VALUES
(18, '00:00:06', '2022-02-07'),
(17, '00:00:03', '2022-02-07'),
(16, '00:00:12', '2022-02-07'),
(15, '00:00:08', '2022-02-07'),
(14, '00:00:09', '2022-02-07'),
(13, '00:00:19', '2022-02-07'),
(12, '00:00:14', '2022-02-07'),
(11, '00:00:09', '2022-02-07'),
(10, '00:00:08', '2022-02-07'),
(19, '00:00:14', '2022-02-07'),
(20, '00:00:09', '2022-02-07'),
(21, '00:00:15', '2022-02-07'),
(22, '00:00:08', '2022-02-07'),
(23, '00:00:06', '2022-02-07'),
(24, '00:00:07', '2022-02-07'),
(25, '00:00:04', '2022-02-07'),
(26, '00:00:15', '2022-02-07'),
(27, '00:00:08', '2022-02-07'),
(28, '00:00:12', '2022-02-07'),
(29, '00:00:24', '2022-02-07'),
(30, '00:00:00', '2022-02-07'),
(31, '00:00:00', '2022-02-07'),
(32, '00:00:00', '2022-02-07'),
(33, '00:00:00', '2022-02-07'),
(34, '00:00:17', '2022-02-07'),
(35, '00:00:00', '2022-02-07'),
(36, '00:00:07', '2022-02-07'),
(37, '00:00:18', '2022-02-07'),
(38, '00:00:20', '2022-02-07'),
(39, '00:00:07', '2022-02-07'),
(40, '00:00:43', '2022-02-07'),
(41, '00:00:01', '2022-02-07'),
(42, '00:00:16', '2022-02-07'),
(43, '00:00:20', '2022-02-07'),
(44, '00:00:21', '2022-02-08'),
(45, '00:00:05', '2022-02-08'),
(46, '00:00:06', '2022-02-08'),
(47, '00:00:16', '2022-02-08');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;