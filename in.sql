-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 12/04/2018 às 11:08
-- Versão do servidor: 5.7.14
-- Versão do PHP: 7.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `MIPS`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `aulas`
--

CREATE TABLE `instruction` (
  `id` int(11) NOT NULL,
  `titulo` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `ordem` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `aulas`
--

INSERT INTO `instruction` (`id`, `titulo`, `img`, `ordem`) VALUES
(1, 'ApresentaÃ§Ã£o do Curso', 'add.png', 2),
(2, 'Primeiro Programa PHP', 'add.png', 4),
(3, 'Criar VariÃ¡veis', 'add.png', 5),
(4, 'Converter VariÃ¡vel', 'add.png', 3),
(5, 'Operadores AritmÃ©ticos', 'add.png', 6),
(6, 'Operadores de AtribuiÃ§Ã£o', 'add.png', 7),
(7, 'Operadores de Incremento e Decremento', 'add.png', 1);

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `aulas`
--
ALTER TABLE `instruction`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `aulas`
--
ALTER TABLE `instruction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
