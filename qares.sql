-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-12-2019 a las 07:44:45
-- Versión del servidor: 10.1.37-MariaDB
-- Versión de PHP: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `qares`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id_c` int(11) NOT NULL,
  `nombre_c` text NOT NULL,
  `descripcion_c` text,
  `foto_c` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id_c`, `nombre_c`, `descripcion_c`, `foto_c`) VALUES
(1, 'no binarix', NULL, NULL),
(2, 'mujer', NULL, NULL),
(3, 'hombre', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ciudades`
--

CREATE TABLE `ciudades` (
  `id_c` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `activa` int(11) DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `ciudades`
--

INSERT INTO `ciudades` (`id_c`, `nombre`, `activa`) VALUES
(1, 'Buenos Aires', 1),
(2, 'Avellaneda', 1),
(3, 'Bahia Blanca', 1),
(4, 'Bariloche', 1),
(5, 'Capital Federal', 1),
(6, 'Cordoba', 1),
(7, 'Comodoro Rivadavia', 1),
(8, 'Corrientes', 1),
(9, 'Jujuy', 1),
(10, 'La Plata', 1),
(11, 'Lanus', 1),
(12, 'Lomas de Zamora', 1),
(13, 'Mar del Plata', 1),
(14, 'Mendoza', 1),
(15, 'Merlo', 1),
(16, 'Moreno', 1),
(17, 'Moron', 1),
(18, 'Neuquen', 1),
(19, 'Obera', 1),
(20, 'Posadas', 1),
(21, 'Puerto Madryn', 1),
(22, 'Pilar', 1),
(23, 'Quilmes', 1),
(24, 'Ramos Mejia', 1),
(25, 'Rio Cuarto', 1),
(26, 'Rio Gallegos', 1),
(27, 'Rosario', 1),
(28, 'Salta', 1),
(29, 'San Fernando', 1),
(30, 'San Justo', 1),
(31, 'San Luis', 1),
(32, 'San Martin', 1),
(33, 'San Miguel', 1),
(34, 'Santa Fe', 1),
(35, 'Santa Rosa', 1),
(36, 'Santigo del Estero', 1),
(37, 'Temperley', 1),
(38, 'Tigre', 1),
(39, 'Trelew', 1),
(40, 'Tucuman', 1),
(41, 'Usuahia', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fotos`
--

CREATE TABLE `fotos` (
  `id_f` int(11) NOT NULL,
  `ruta_f` varchar(100) NOT NULL,
  `id_publicacion_f` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `franja_horaria`
--

CREATE TABLE `franja_horaria` (
  `id_fh` int(11) NOT NULL,
  `nombre_fh` varchar(10) NOT NULL,
  `dia_noche_fh` tinyint(2) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `planes`
--

CREATE TABLE `planes` (
  `id_p` int(11) NOT NULL,
  `nombre_p` varchar(20) NOT NULL,
  `cant_x_dia_p` int(2) NOT NULL,
  `dias_p` int(2) NOT NULL,
  `dia_noche_p` tinyint(4) DEFAULT '0',
  `precio` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `publicaciones`
--

CREATE TABLE `publicaciones` (
  `id_publi` int(11) NOT NULL,
  `id_usr` int(10) NOT NULL,
  `fecha_p` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `titulo_p` varchar(50) NOT NULL,
  `texto_p` varchar(500) NOT NULL,
  `edad_p` int(2) NOT NULL,
  `telefono_p` int(20) NOT NULL,
  `wsp_p` tinyint(4) DEFAULT '0',
  `mail_p` varchar(50) NOT NULL,
  `activa` tinyint(4) DEFAULT '0',
  `categoria_p` int(1) NOT NULL,
  `id_mail_p` varchar(100) DEFAULT NULL,
  `img_p` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `publicaciones`
--

INSERT INTO `publicaciones` (`id_publi`, `id_usr`, `fecha_p`, `titulo_p`, `texto_p`, `edad_p`, `telefono_p`, `wsp_p`, `mail_p`, `activa`, `categoria_p`, `id_mail_p`, `img_p`) VALUES
(8, 5, '2019-12-09 19:23:46', 'otro alexio de postrecito', 'el alexio clasico relleno con una suave pasta de mani', 24, 1169153556, NULL, 'alexisgatica75@gmail.com', 1, 1, '93c8f54f-2c74-4b36-9fce-0db8b138c493', ''),
(9, 5, '2019-12-15 20:56:50', 'alexis', 'alexis reload con baño de chocolate', 22, 122334556, 0, 'alexisgatica95@gmail.com', 0, 0, 'fa7ff9e2-ae0f-42e4-b448-9bd2a53e9b6d', ',ef30841d-28b8-4e6f-9709-888d03892257.jpeg'),
(10, 5, '2019-12-15 21:02:10', 'alexis gatica', 'de choco', 22, 1122334455, 0, 'alexisgatica95@gmail.com', 0, 0, '7edbdc89-ca31-4e09-b579-76835fd75cb9', ',2990821e-5e51-45bb-90ad-047cb0d2ca0d.jpeg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `id_cliente_usuario` int(11) NOT NULL,
  `nombre_usuario` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `apellido_usuario` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `mail_usuario` varchar(150) COLLATE utf8_spanish2_ci NOT NULL,
  `telefono_usuario` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `codigo_mail_usuario` varchar(150) COLLATE utf8_spanish2_ci NOT NULL,
  `cuenta_confirmada_usuario` tinyint(1) NOT NULL,
  `password_usuario` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `permisos_usuario` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `id_cliente_usuario`, `nombre_usuario`, `apellido_usuario`, `mail_usuario`, `telefono_usuario`, `codigo_mail_usuario`, `cuenta_confirmada_usuario`, `password_usuario`, `permisos_usuario`) VALUES
(1, 1, 'Franco', 'Di Leo', 'dileo.francoj@gmail.com', '1144739222', 'abahyuhamsoAfD923', 1, '81dc9bdb52d04dc20036dbd8313ed055', 0),
(2, 0, 'alexis', 'gaytica', 'daniocerebral1@gmail.com', '', '1e25a9c0-b184-4c50-9d04-8cbaf294b438', 1, '67ebb3a44d07706c5e86d2912433be58', 0),
(4, 0, 'ivan', 'putin', '666@gmail.com', '11223344', 'bc8596de-d7ee-4bbf-abdc-16d2f8a3545c', 0, 'c7560fee42b51b285014371541b3f39c', 0),
(5, 0, 'alexis', 'gatitogay', 'alexisgatica75@gmail.com', '1169153556', '67ebb3a44d07706c5e86d2912433be58', 1, '67ebb3a44d07706c5e86d2912433be58', 0),
(6, 0, 'alexis', 'gatica', 'alexisgatica95@gmail.com', '', '0211c5de-9f59-4506-a2a9-4bee138d0c0c', 0, '67ebb3a44d07706c5e86d2912433be58', 0),
(7, 0, 'alexis', 'alexisgatica', 'alexisgatica75@gmail.com', '', '2a820c3d-ba1a-4fd3-be7b-29864d4c5780', 0, 'e2d00ceda0a7feb3b2ea531d04659564', 0),
(8, 0, '', '', '', '', '03b89539-80de-4807-afac-f9014209a366', 0, 'd41d8cd98f00b204e9800998ecf8427e', 0),
(9, 0, '', '', '', '', 'ab53a08d-08f7-4fae-bbb7-2e167bbe940c', 0, 'd41d8cd98f00b204e9800998ecf8427e', 0),
(10, 0, '', '', '', '', '69842085-7514-4945-87cb-558c12c3952d', 0, 'd41d8cd98f00b204e9800998ecf8427e', 0),
(11, 0, '', '', '', '', '7da682a9-3a5f-40ed-8df0-49db250e97a2', 0, 'd41d8cd98f00b204e9800998ecf8427e', 0),
(12, 0, '', '', '', '', '4427408b-35f0-485b-b742-1e9356c72a64', 0, 'd41d8cd98f00b204e9800998ecf8427e', 0),
(13, 0, '', '', '', '', '5b502a49-3bf6-4271-9b44-80ed5bbc97a9', 0, 'd41d8cd98f00b204e9800998ecf8427e', 0),
(14, 0, '', '', '', '', '459aeef8-5c06-45c4-9cda-0e89f204853d', 0, 'd41d8cd98f00b204e9800998ecf8427e', 0),
(15, 0, '', '', '', '', '6ff9f073-6801-4945-bc30-bdc26075d333', 0, 'd41d8cd98f00b204e9800998ecf8427e', 0),
(16, 0, '', '', '', '', 'fca9f827-d8d8-459e-bc38-564f0947bd9e', 0, 'd41d8cd98f00b204e9800998ecf8427e', 0),
(17, 0, 'rerw', 'ferwer', 'alexis@gmail.com', '', '8c69e62c-7b64-41fb-b346-fa6f9112c2e6', 0, 'd41d8cd98f00b204e9800998ecf8427e', 0),
(18, 0, 'rerw', 'ferwer', 'alexis@gmail.com', '', '14d51f6f-2c18-4a28-9227-94d2b3dbf94b', 0, 'd41d8cd98f00b204e9800998ecf8427e', 0),
(19, 0, 'rerw', 'ferwer', 'alexis@gmail.com', '', '18eeff7c-e18c-444f-b7af-7dd26e38aa44', 0, 'd41d8cd98f00b204e9800998ecf8427e', 0),
(20, 0, 'rerw', 'ferwer', 'alexis@gmail.com', '', 'e3fc3de9-41f1-45dc-a9c1-359644010e54', 0, 'd41d8cd98f00b204e9800998ecf8427e', 0),
(21, 0, 'rerw', 'ferwer', 'alexis@gmail.com', '', '9e6db6d2-35d7-4ad8-aedf-2719c4b28d43', 0, 'd41d8cd98f00b204e9800998ecf8427e', 0),
(22, 0, 'rerw', 'ferwer', 'alexis@gmail.com', '', 'ca801ab3-5169-43a0-9e3d-8c4d70f1322e', 0, 'd41d8cd98f00b204e9800998ecf8427e', 0),
(23, 0, 'rerw', 'ferwer', 'alexis@gmail.com', '', 'bfb16c75-5080-4374-b419-04ddc050cbbd', 0, 'd41d8cd98f00b204e9800998ecf8427e', 0),
(24, 0, 'rerw', 'ferwer', 'alexis@gmail.com', '', 'e590780b-3a18-480d-92a6-005300f81b51', 0, 'd41d8cd98f00b204e9800998ecf8427e', 0),
(25, 0, 'rerw', 'ferwer', 'alexis@gmail.com', '', 'a034149a-6d3f-4c85-92a4-371dafd65cdc', 0, 'd41d8cd98f00b204e9800998ecf8427e', 0),
(26, 0, 'rerw', 'ferwer', 'alexis@gmail.com', '', '6ceecfe6-b442-4ddb-b4fc-a017b83be090', 0, 'd41d8cd98f00b204e9800998ecf8427e', 0),
(27, 0, 'rerw', 'ferwer', 'alexis@gmail.com', '', '3c3b3ec4-6e36-40e0-81bd-57ec171f09c7', 0, 'd41d8cd98f00b204e9800998ecf8427e', 0),
(28, 0, 'rerw', 'ferwer', 'alexis@gmail.com', '', '193f00c1-64b0-4173-af80-673e88b1c3a6', 0, 'd41d8cd98f00b204e9800998ecf8427e', 0),
(29, 0, 'rerw', 'ferwer', 'alexis@gmail.com', '', 'ba51ad70-df37-4c2d-ae76-695fde98ae79', 0, 'd41d8cd98f00b204e9800998ecf8427e', 0),
(30, 0, 'rerw', 'ferwer', 'alexis@gmail.com', '', '362e807b-7673-4c5d-a1b6-4f00f01c365d', 0, 'd41d8cd98f00b204e9800998ecf8427e', 0),
(31, 0, 'rerw', 'ferwer', 'alexis@gmail.com', '', '517535be-640d-4fa1-85c3-e9ac95ba5532', 0, 'd41d8cd98f00b204e9800998ecf8427e', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id_c`);

--
-- Indices de la tabla `ciudades`
--
ALTER TABLE `ciudades`
  ADD PRIMARY KEY (`id_c`);

--
-- Indices de la tabla `fotos`
--
ALTER TABLE `fotos`
  ADD PRIMARY KEY (`id_f`),
  ADD KEY `foto_usuario` (`id_publicacion_f`);

--
-- Indices de la tabla `franja_horaria`
--
ALTER TABLE `franja_horaria`
  ADD PRIMARY KEY (`id_fh`);

--
-- Indices de la tabla `planes`
--
ALTER TABLE `planes`
  ADD PRIMARY KEY (`id_p`);

--
-- Indices de la tabla `publicaciones`
--
ALTER TABLE `publicaciones`
  ADD PRIMARY KEY (`id_publi`),
  ADD KEY `publicacion_usr` (`id_usr`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`),
  ADD KEY `FK_CLIENTE_USUARIO` (`id_cliente_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id_c` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `ciudades`
--
ALTER TABLE `ciudades`
  MODIFY `id_c` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT de la tabla `fotos`
--
ALTER TABLE `fotos`
  MODIFY `id_f` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `franja_horaria`
--
ALTER TABLE `franja_horaria`
  MODIFY `id_fh` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `planes`
--
ALTER TABLE `planes`
  MODIFY `id_p` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `publicaciones`
--
ALTER TABLE `publicaciones`
  MODIFY `id_publi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `fotos`
--
ALTER TABLE `fotos`
  ADD CONSTRAINT `foto_usuario` FOREIGN KEY (`id_publicacion_f`) REFERENCES `publicaciones` (`id_publi`) ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
