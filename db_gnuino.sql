-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-04-2021 a las 05:54:53
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_gnuino`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `banco`
--

CREATE TABLE `banco` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `descripcion_banco` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idNroCuenta` int(11) NOT NULL,
  `estado` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `banco`
--

INSERT INTO `banco` (`id`, `descripcion_banco`, `idNroCuenta`, `estado`, `created_at`, `updated_at`) VALUES
(16, 'CONTINENTAL', 29, 1, '2021-04-09 03:54:01', '2021-04-19 01:43:04'),
(17, 'CONTINENTAL 2', 30, 1, '2021-04-09 04:02:52', '2021-04-19 01:43:14'),
(18, 'BCP', 29, 1, '2021-04-16 23:42:13', '2021-04-16 23:42:13'),
(19, 'SCOTIABANK', 31, 1, '2021-04-17 21:57:48', '2021-04-17 21:57:48');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nombre_categoria` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `estado` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`id`, `nombre_categoria`, `estado`, `created_at`, `updated_at`) VALUES
(18, 'CUEROS.', 1, '2021-04-07 20:45:38', '2021-04-12 04:27:33'),
(19, 'CUERO 21CM', 1, '2021-04-08 02:54:10', '2021-04-10 22:40:15');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cotizacion`
--

CREATE TABLE `cotizacion` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nroCotizacion` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `idProovedor` int(11) NOT NULL,
  `idEmpleado` int(11) NOT NULL,
  `idEstadoFlujo` int(11) NOT NULL,
  `detalle` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `estado` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `codigo_cotizacion_num` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `fecha_entrega` date NOT NULL,
  `descuento_cot` decimal(8,2) NOT NULL,
  `costo_envio` decimal(8,2) NOT NULL,
  `total_costo` decimal(8,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `cotizacion`
--

INSERT INTO `cotizacion` (`id`, `nroCotizacion`, `idProovedor`, `idEmpleado`, `idEstadoFlujo`, `detalle`, `estado`, `created_at`, `updated_at`, `codigo_cotizacion_num`, `fecha_entrega`, `descuento_cot`, `costo_envio`, `total_costo`) VALUES
(45, '0000000001', 2, 1, 2, 'sin detalle', '1', '2021-04-29 20:05:07', '2021-04-29 20:06:51', 'COT-0000000001', '2021-04-29', '5.00', '5.00', '64.00'),
(46, '0000000002', 4, 2, 2, 'detalle', '1', '2021-04-29 20:05:38', '2021-04-29 20:06:07', 'COT-0000000002', '2021-04-29', '6.00', '6.00', '877.00'),
(47, '0000000003', 2, 3, 2, 'sin', '1', '2021-04-29 20:24:54', '2021-04-29 20:25:10', 'COT-0000000003', '2021-04-29', '5.00', '5.00', '25.00'),
(48, '0000000004', 1, 1, 1, '', '1', '2021-04-29 21:15:54', '2021-04-29 21:15:54', 'COT-0000000004', '2021-08-30', '3.00', '3.00', '9.00'),
(49, '0000000005', 2, 2, 1, 'sd', '1', '2021-04-30 03:47:33', '2021-04-30 03:47:33', 'COT-0000000005', '2021-04-30', '3.00', '3.00', '9.00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cotizacion_detalle`
--

CREATE TABLE `cotizacion_detalle` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `idCotizacion` int(11) NOT NULL,
  `idProducto` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `precio_unidad` decimal(8,2) NOT NULL,
  `precio_total` decimal(8,2) NOT NULL,
  `estado` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `observaciones` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `cotizacion_detalle`
--

INSERT INTO `cotizacion_detalle` (`id`, `idCotizacion`, `idProducto`, `cantidad`, `precio_unidad`, `precio_total`, `estado`, `created_at`, `updated_at`, `observaciones`) VALUES
(71, 45, 4, 4, '12.00', '48.00', '1', '2021-04-29 20:05:07', '2021-04-29 20:05:07', 'sin obs'),
(72, 45, 6, 4, '4.00', '16.00', '1', '2021-04-29 20:05:07', '2021-04-29 20:05:07', '-'),
(73, 46, 6, 4, '4.00', '16.00', '1', '2021-04-29 20:05:38', '2021-04-29 20:05:38', ''),
(74, 46, 7, 7, '123.00', '861.00', '1', '2021-04-29 20:05:38', '2021-04-29 20:05:38', ''),
(75, 47, 5, 5, '5.00', '25.00', '1', '2021-04-29 20:24:54', '2021-04-29 20:24:54', ''),
(76, 48, 5, 3, '3.00', '9.00', '1', '2021-04-29 21:15:54', '2021-04-29 21:15:54', ''),
(77, 49, 5, 3, '3.00', '9.00', '1', '2021-04-30 03:47:33', '2021-04-30 03:47:33', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `departamento`
--

CREATE TABLE `departamento` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nombre` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `estado` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `departamento`
--

INSERT INTO `departamento` (`id`, `nombre`, `estado`, `created_at`, `updated_at`) VALUES
(1, 'Amazonas', 1, '2018-04-24 20:37:48', '2018-04-24 20:37:48'),
(2, 'Ancash', 1, '2018-04-24 20:38:04', '2018-04-24 20:38:04'),
(3, 'Apurimac', 1, '2018-04-24 20:40:07', '2018-04-24 20:40:07'),
(4, 'Arequipa', 1, '2018-04-24 20:40:19', '2018-04-24 20:40:19'),
(5, 'Ayacucho', 1, '2018-04-24 20:41:09', '2018-04-24 20:41:09'),
(6, 'Cajamarca', 1, '2018-04-24 20:41:24', '2018-04-24 20:41:24'),
(7, 'Cusco', 1, '2018-04-24 20:42:57', '2018-04-24 20:42:57'),
(8, 'Huancavelica', 1, '2018-04-24 20:43:09', '2018-04-24 20:43:09'),
(9, 'Huanuco', 1, '2018-04-24 20:46:19', '2018-04-24 20:46:19'),
(10, 'Ica', 1, '2018-04-24 20:46:35', '2018-04-24 20:46:35'),
(11, 'Junin', 1, '2018-04-24 20:46:48', '2018-04-24 20:46:48'),
(12, 'La Libertad', 1, '2018-04-24 20:48:41', '2018-04-24 20:48:41'),
(13, 'Lambayeque', 1, '2018-04-24 20:49:00', '2018-04-24 20:49:00'),
(14, 'Lima', 1, '2018-04-24 20:51:05', '2018-04-24 20:51:05'),
(15, 'Loreto', 1, '2018-04-24 20:51:19', '2018-04-24 20:51:19'),
(16, 'Madre de Dios', 1, '2018-04-24 20:51:40', '2018-04-24 20:51:40'),
(17, 'Moquegua', 1, '2018-04-24 20:52:02', '2018-04-24 20:52:02'),
(18, 'Pasco', 1, '2018-04-24 20:52:17', '2018-04-24 20:52:17'),
(19, 'Piura', 1, '2018-04-24 20:53:17', '2018-04-24 20:53:17'),
(20, 'Puno', 1, '2018-04-24 20:53:59', '2018-04-24 20:53:59'),
(21, 'San Martin', 1, '2018-04-24 20:54:33', '2018-04-24 20:54:33'),
(22, 'Tacna', 1, '2018-04-24 20:54:46', '2018-04-24 20:54:46'),
(23, 'Tumbes', 1, '2018-04-24 20:55:45', '2018-04-24 20:55:45'),
(24, 'Prov.Const. Del Callao', 1, '2018-04-24 20:56:06', '2018-04-24 20:56:06'),
(25, 'Ucayali', 1, '2018-04-24 20:56:26', '2018-04-24 20:56:26');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_entrada_sin_oc`
--

CREATE TABLE `detalle_entrada_sin_oc` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `idEntradaSinOc` int(11) NOT NULL,
  `idProducto` int(11) NOT NULL,
  `precioUnitario` decimal(8,2) NOT NULL,
  `precioTotal` decimal(8,2) NOT NULL,
  `idSedePrincipal` int(11) NOT NULL,
  `idSedeSecundaria` int(11) NOT NULL,
  `cantidadGlobal` int(11) NOT NULL,
  `cantidadPrincipal` int(11) NOT NULL,
  `cantidaSecundaria` int(11) NOT NULL,
  `cantidadDevuelta` int(11) NOT NULL,
  `observaciones` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `estado` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `estadoflujo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `detalle_entrada_sin_oc`
--

INSERT INTO `detalle_entrada_sin_oc` (`id`, `idEntradaSinOc`, `idProducto`, `precioUnitario`, `precioTotal`, `idSedePrincipal`, `idSedeSecundaria`, `cantidadGlobal`, `cantidadPrincipal`, `cantidaSecundaria`, `cantidadDevuelta`, `observaciones`, `estado`, `created_at`, `updated_at`, `estadoflujo`) VALUES
(7, 6, 5, '2.00', '4.00', 5, 4, 2, 1, 1, 0, 'asdas', '1', '2021-04-30 03:52:54', '2021-04-30 03:52:54', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `distrito`
--

CREATE TABLE `distrito` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nombre_distrito` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idProvincia` int(11) NOT NULL,
  `idDepartamento` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `distrito`
--

INSERT INTO `distrito` (`id`, `nombre_distrito`, `idProvincia`, `idDepartamento`, `created_at`, `updated_at`) VALUES
(1, 'Chachapoyas', 101, 1, NULL, NULL),
(3, 'Asuncion', 101, 1, NULL, NULL),
(4, 'Balsas', 101, 1, NULL, NULL),
(5, 'Cheto', 101, 1, NULL, NULL),
(6, 'Chiliquin', 101, 1, NULL, NULL),
(7, 'Chuquibamba', 101, 1, NULL, NULL),
(8, 'Granada', 101, 1, NULL, NULL),
(9, 'Huancas', 101, 1, NULL, NULL),
(10, 'La Jalca', 101, 1, NULL, NULL),
(11, 'Leimebamba', 101, 1, NULL, NULL),
(12, 'Levanto', 101, 1, NULL, NULL),
(13, 'Magdalena', 101, 1, NULL, NULL),
(14, 'Mariscal Castilla', 101, 1, NULL, NULL),
(15, 'Molinopampa', 101, 1, NULL, NULL),
(16, 'Montevideo', 101, 1, NULL, NULL),
(17, 'Olleros', 101, 1, NULL, NULL),
(18, 'Quinjalca', 101, 1, NULL, NULL),
(19, 'San Fco De Daguas', 101, 1, NULL, NULL),
(20, 'San Isidro De Maino', 101, 1, NULL, NULL),
(21, 'Soloco', 101, 1, NULL, NULL),
(22, 'Sonche', 101, 1, NULL, NULL),
(23, 'La Peca', 102, 1, NULL, NULL),
(24, 'Aramango', 102, 1, NULL, NULL),
(25, 'Copallin', 102, 1, NULL, NULL),
(26, 'El Parco', 102, 1, NULL, NULL),
(27, 'Imaza', 102, 1, NULL, NULL),
(28, 'Jumbilla', 103, 1, NULL, NULL),
(29, 'Corosha', 103, 1, NULL, NULL),
(30, 'Cuispes', 103, 1, NULL, NULL),
(31, 'Chisquilla', 103, 1, NULL, NULL),
(32, 'Churuja', 103, 1, NULL, NULL),
(33, 'Florida', 103, 1, NULL, NULL),
(34, 'Recta', 103, 1, NULL, NULL),
(35, 'San Carlos', 103, 1, NULL, NULL),
(36, 'Shipasbamba', 103, 1, NULL, NULL),
(37, 'Valera', 103, 1, NULL, NULL),
(38, 'Yambrasbamba', 103, 1, NULL, NULL),
(39, 'Jazan', 103, 1, NULL, NULL),
(40, 'Lamud', 104, 1, NULL, NULL),
(41, 'Camporredondo', 104, 1, NULL, NULL),
(42, 'Cocabamba', 104, 1, NULL, NULL),
(43, 'Colcamar', 104, 1, NULL, NULL),
(44, 'Conila', 104, 1, NULL, NULL),
(45, 'Inguilpata', 104, 1, NULL, NULL),
(46, 'Longuita', 104, 1, NULL, NULL),
(47, 'Lonya Chico', 104, 1, NULL, NULL),
(48, 'Luya', 104, 1, NULL, NULL),
(49, 'Luya Viejo', 104, 1, NULL, NULL),
(50, 'Maria', 104, 1, NULL, NULL),
(51, 'Ocalli', 104, 1, NULL, NULL),
(52, 'Ocumal', 104, 1, NULL, NULL),
(53, 'Pisuquia', 104, 1, NULL, NULL),
(54, 'San Cristobal', 104, 1, NULL, NULL),
(55, 'San Francisco De Yeso', 104, 1, NULL, NULL),
(56, 'San Jeronimo', 104, 1, NULL, NULL),
(57, 'San Juan De Lopecancha', 104, 1, NULL, NULL),
(58, 'Santa Catalina', 104, 1, NULL, NULL),
(59, 'Santo Tomas', 104, 1, NULL, NULL),
(60, 'Tingo', 104, 1, NULL, NULL),
(61, 'Trita', 104, 1, NULL, NULL),
(62, 'Providencia', 104, 1, NULL, NULL),
(63, 'San Nicolas', 105, 1, NULL, NULL),
(64, 'Cochamal', 105, 1, NULL, NULL),
(65, 'Chirimoto', 105, 1, NULL, NULL),
(66, 'Huambo', 105, 1, NULL, NULL),
(67, 'Limabamba', 105, 1, NULL, NULL),
(68, 'Longar', 105, 1, NULL, NULL),
(69, 'Milpuc', 105, 1, NULL, NULL),
(70, 'Mcal Benavides', 105, 1, NULL, NULL),
(71, 'Omia', 105, 1, NULL, NULL),
(72, 'Santa Rosa', 105, 1, NULL, NULL),
(73, 'Totora', 105, 1, NULL, NULL),
(74, 'Vista Alegre', 105, 1, NULL, NULL),
(75, 'Nieva', 106, 1, NULL, NULL),
(76, 'Rio Santiago', 106, 1, NULL, NULL),
(77, 'El Cenepa', 106, 1, NULL, NULL),
(78, 'Bagua Grande', 107, 1, NULL, NULL),
(79, 'Cajaruro', 107, 1, NULL, NULL),
(80, 'Cumba', 107, 1, NULL, NULL),
(81, 'El Milagro', 107, 1, NULL, NULL),
(82, 'Jamalca', 107, 1, NULL, NULL),
(83, 'Lonya Grande', 107, 1, NULL, NULL),
(84, 'Yamon', 107, 1, NULL, NULL),
(85, 'Huaraz', 201, 2, NULL, NULL),
(86, 'Independencia', 201, 2, NULL, NULL),
(87, 'Cochabamba', 201, 2, NULL, NULL),
(88, 'Colcabamba', 201, 2, NULL, NULL),
(89, 'Huanchay', 201, 2, NULL, NULL),
(90, 'Jangas', 201, 2, NULL, NULL),
(91, 'La Libertad', 201, 2, NULL, NULL),
(92, 'Olleros', 201, 2, NULL, NULL),
(93, 'Pampas', 201, 2, NULL, NULL),
(94, 'Pariacoto', 201, 2, NULL, NULL),
(95, 'Pira', 201, 2, NULL, NULL),
(96, 'Tarica', 201, 2, NULL, NULL),
(97, 'Aija', 202, 2, NULL, NULL),
(98, 'Coris', 202, 2, NULL, NULL),
(99, 'Huacllan', 202, 2, NULL, NULL),
(100, 'La Merced', 202, 2, NULL, NULL),
(101, 'Succha', 202, 2, NULL, NULL),
(102, 'Chiquian', 203, 2, NULL, NULL),
(103, 'A Pardo Lezameta', 203, 2, NULL, NULL),
(104, 'Aquia', 203, 2, NULL, NULL),
(105, 'Cajacay', 203, 2, NULL, NULL),
(106, 'Huayllacayan', 203, 2, NULL, NULL),
(107, 'Huasta', 203, 2, NULL, NULL),
(108, 'Mangas', 203, 2, NULL, NULL),
(109, 'Pacllon', 203, 2, NULL, NULL),
(110, 'San Miguel De Corpanqui', 203, 2, NULL, NULL),
(111, 'Ticllos', 203, 2, NULL, NULL),
(112, 'Antonio Raimondi', 203, 2, NULL, NULL),
(113, 'Canis', 203, 2, NULL, NULL),
(114, 'Colquioc', 203, 2, NULL, NULL),
(115, 'La Primavera', 203, 2, NULL, NULL),
(116, 'Huallanca', 203, 2, NULL, NULL),
(117, 'Carhuaz', 204, 2, NULL, NULL),
(118, 'Acopampa', 204, 2, NULL, NULL),
(119, 'Amashca', 204, 2, NULL, NULL),
(120, 'Anta', 204, 2, NULL, NULL),
(121, 'Ataquero', 204, 2, NULL, NULL),
(122, 'Marcara', 204, 2, NULL, NULL),
(123, 'Pariahuanca', 204, 2, NULL, NULL),
(124, 'San Miguel De Aco', 204, 2, NULL, NULL),
(125, 'Shilla', 204, 2, NULL, NULL),
(126, 'Tinco', 204, 2, NULL, NULL),
(127, 'Yungar', 204, 2, NULL, NULL),
(128, 'Casma', 205, 2, NULL, NULL),
(129, 'Buena Vista Alta', 205, 2, NULL, NULL),
(130, 'Comandante Noel', 205, 2, NULL, NULL),
(131, 'Yautan', 205, 2, NULL, NULL),
(132, 'Corongo', 206, 2, NULL, NULL),
(133, 'Aco', 206, 2, NULL, NULL),
(134, 'Bambas', 206, 2, NULL, NULL),
(135, 'Cusca', 206, 2, NULL, NULL),
(136, 'La Pampa', 206, 2, NULL, NULL),
(137, 'Yanac', 206, 2, NULL, NULL),
(138, 'Yupan', 206, 2, NULL, NULL),
(139, 'Caraz', 207, 2, NULL, NULL),
(140, 'Huallanca', 207, 2, NULL, NULL),
(141, 'Huata', 207, 2, NULL, NULL),
(142, 'Huaylas', 207, 2, NULL, NULL),
(143, 'Mato', 207, 2, NULL, NULL),
(144, 'Pamparomas', 207, 2, NULL, NULL),
(145, 'Pueblo Libre', 207, 2, NULL, NULL),
(146, 'Santa Cruz', 207, 2, NULL, NULL),
(147, 'Yuracmarca', 207, 2, NULL, NULL),
(148, 'Santo Toribio', 207, 2, NULL, NULL),
(149, 'Huari', 208, 2, NULL, NULL),
(150, 'Cajay', 208, 2, NULL, NULL),
(151, 'Chavin De Huantar', 208, 2, NULL, NULL),
(152, 'Huacachi', 208, 2, NULL, NULL),
(153, 'Huachis', 208, 2, NULL, NULL),
(154, 'Huacchis', 208, 2, NULL, NULL),
(155, 'Huantar', 208, 2, NULL, NULL),
(156, 'Masin', 208, 2, NULL, NULL),
(157, 'Paucas', 208, 2, NULL, NULL),
(158, 'Ponto', 208, 2, NULL, NULL),
(159, 'Rahuapampa', 208, 2, NULL, NULL),
(160, 'Rapayan', 208, 2, NULL, NULL),
(161, 'San Marcos', 208, 2, NULL, NULL),
(162, 'San Pedro De Chana', 208, 2, NULL, NULL),
(163, 'Uco', 208, 2, NULL, NULL),
(164, 'Anra', 208, 2, NULL, NULL),
(165, 'Piscobamba', 209, 2, NULL, NULL),
(166, 'Casca', 209, 2, NULL, NULL),
(167, 'Lucma', 209, 2, NULL, NULL),
(168, 'Fidel Olivas Escudero', 209, 2, NULL, NULL),
(169, 'Llama', 209, 2, NULL, NULL),
(170, 'Llumpa', 209, 2, NULL, NULL),
(171, 'Musga', 209, 2, NULL, NULL),
(172, 'Eleazar Guzman Barron', 209, 2, NULL, NULL),
(173, 'Cabana', 210, 2, NULL, NULL),
(174, 'Bolognesi', 210, 2, NULL, NULL),
(175, 'Conchucos', 210, 2, NULL, NULL),
(176, 'Huacaschuque', 210, 2, NULL, NULL),
(177, 'Huandoval', 210, 2, NULL, NULL),
(178, 'Lacabamba', 210, 2, NULL, NULL),
(179, 'Llapo', 210, 2, NULL, NULL),
(180, 'Pallasca', 210, 2, NULL, NULL),
(181, 'Pampas', 210, 2, NULL, NULL),
(182, 'Santa Rosa', 210, 2, NULL, NULL),
(183, 'Tauca', 210, 2, NULL, NULL),
(184, 'Pomabamba', 211, 2, NULL, NULL),
(185, 'Huayllan', 211, 2, NULL, NULL),
(186, 'Parobamba', 211, 2, NULL, NULL),
(187, 'Quinuabamba', 211, 2, NULL, NULL),
(188, 'Recuay', 212, 2, NULL, NULL),
(189, 'Cotaparaco', 212, 2, NULL, NULL),
(190, 'Huayllapampa', 212, 2, NULL, NULL),
(191, 'Marca', 212, 2, NULL, NULL),
(192, 'Pampas Chico', 212, 2, NULL, NULL),
(193, 'Pararin', 212, 2, NULL, NULL),
(194, 'Tapacocha', 212, 2, NULL, NULL),
(195, 'Ticapampa', 212, 2, NULL, NULL),
(196, 'Llacllin', 212, 2, NULL, NULL),
(197, 'Catac', 212, 2, NULL, NULL),
(198, 'Chimbote', 213, 2, NULL, NULL),
(199, 'Caceres Del Peru', 213, 2, NULL, NULL),
(200, 'Macate', 213, 2, NULL, NULL),
(201, 'Moro', 213, 2, NULL, NULL),
(202, 'Nepeña', 213, 2, NULL, NULL),
(203, 'Samanco', 213, 2, NULL, NULL),
(204, 'Santa', 213, 2, NULL, NULL),
(205, 'Coishco', 213, 2, NULL, NULL),
(206, 'Nuevo Chimbote', 213, 2, NULL, NULL),
(207, 'Sihuas', 214, 2, NULL, NULL),
(208, 'Alfonso Ugarte', 214, 2, NULL, NULL),
(209, 'Chingalpo', 214, 2, NULL, NULL),
(210, 'Huayllabamba', 214, 2, NULL, NULL),
(211, 'Quiches', 214, 2, NULL, NULL),
(212, 'Sicsibamba', 214, 2, NULL, NULL),
(213, 'Acobamba', 214, 2, NULL, NULL),
(214, 'Cashapampa', 214, 2, NULL, NULL),
(215, 'Ragash', 214, 2, NULL, NULL),
(216, 'San Juan', 214, 2, NULL, NULL),
(217, 'Yungay', 215, 2, NULL, NULL),
(218, 'Cascapara', 215, 2, NULL, NULL),
(219, 'Mancos', 215, 2, NULL, NULL),
(220, 'Matacoto', 215, 2, NULL, NULL),
(221, 'Quillo', 215, 2, NULL, NULL),
(222, 'Ranrahirca', 215, 2, NULL, NULL),
(223, 'Shupluy', 215, 2, NULL, NULL),
(224, 'Yanama', 215, 2, NULL, NULL),
(225, 'Llamellin', 216, 2, NULL, NULL),
(226, 'Aczo', 216, 2, NULL, NULL),
(227, 'Chaccho', 216, 2, NULL, NULL),
(228, 'Chingas', 216, 2, NULL, NULL),
(229, 'Mirgas', 216, 2, NULL, NULL),
(230, 'San Juan De Rontoy', 216, 2, NULL, NULL),
(231, 'San Luis', 217, 2, NULL, NULL),
(232, 'Yauya', 217, 2, NULL, NULL),
(233, 'San Nicolas', 217, 2, NULL, NULL),
(234, 'Chacas', 218, 2, NULL, NULL),
(235, 'Acochaca', 218, 2, NULL, NULL),
(236, 'Huarmey', 219, 2, NULL, NULL),
(237, 'Cochapeti', 219, 2, NULL, NULL),
(238, 'Huayan', 219, 2, NULL, NULL),
(239, 'Malvas', 219, 2, NULL, NULL),
(240, 'Culebras', 219, 2, NULL, NULL),
(241, 'Acas', 220, 2, NULL, NULL),
(242, 'Cajamarquilla', 220, 2, NULL, NULL),
(243, 'Carhuapampa', 220, 2, NULL, NULL),
(244, 'Cochas', 220, 2, NULL, NULL),
(245, 'Congas', 220, 2, NULL, NULL),
(246, 'Llipa', 220, 2, NULL, NULL),
(247, 'Ocros', 220, 2, NULL, NULL),
(248, 'San Cristobal De Rajan', 220, 2, NULL, NULL),
(249, 'San Pedro', 220, 2, NULL, NULL),
(250, 'Santiago De Chilcas', 220, 2, NULL, NULL),
(251, 'Abancay', 301, 3, NULL, NULL),
(252, 'Circa', 301, 3, NULL, NULL),
(253, 'Curahuasi', 301, 3, NULL, NULL),
(254, 'Chacoche', 301, 3, NULL, NULL),
(255, 'Huanipaca', 301, 3, NULL, NULL),
(256, 'Lambrama', 301, 3, NULL, NULL),
(257, 'Pichirhua', 301, 3, NULL, NULL),
(258, 'San Pedro De Cachora', 301, 3, NULL, NULL),
(259, 'Tamburco', 301, 3, NULL, NULL),
(260, 'Chalhuanca', 302, 3, NULL, NULL),
(261, 'Capaya', 302, 3, NULL, NULL),
(262, 'Caraybamba', 302, 3, NULL, NULL),
(263, 'Colcabamba', 302, 3, NULL, NULL),
(264, 'Cotaruse', 302, 3, NULL, NULL),
(265, 'Chapimarca', 302, 3, NULL, NULL),
(266, 'Ihuayllo', 302, 3, NULL, NULL),
(267, 'Lucre', 302, 3, NULL, NULL),
(268, 'Pocohuanca', 302, 3, NULL, NULL),
(269, 'Sañaica', 302, 3, NULL, NULL),
(270, 'Soraya', 302, 3, NULL, NULL),
(271, 'Tapairihua', 302, 3, NULL, NULL),
(272, 'Tintay', 302, 3, NULL, NULL),
(273, 'Toraya', 302, 3, NULL, NULL),
(274, 'Yanaca', 302, 3, NULL, NULL),
(275, 'San Juan De Chacña', 302, 3, NULL, NULL),
(276, 'Justo Apu Sahuaraura', 302, 3, NULL, NULL),
(277, 'Andahuaylas', 303, 3, NULL, NULL),
(278, 'Andarapa', 303, 3, NULL, NULL),
(279, 'Chiara', 303, 3, NULL, NULL),
(280, 'Huancarama', 303, 3, NULL, NULL),
(281, 'Huancaray', 303, 3, NULL, NULL),
(282, 'Kishuara', 303, 3, NULL, NULL),
(283, 'Pacobamba', 303, 3, NULL, NULL),
(284, 'Pampachiri', 303, 3, NULL, NULL),
(285, 'San Antonio De Cachi', 303, 3, NULL, NULL),
(286, 'San Jeronimo', 303, 3, NULL, NULL),
(287, 'Talavera', 303, 3, NULL, NULL),
(288, 'Turpo', 303, 3, NULL, NULL),
(289, 'Pacucha', 303, 3, NULL, NULL),
(290, 'Pomacocha', 303, 3, NULL, NULL),
(291, 'Sta Maria De Chicmo', 303, 3, NULL, NULL),
(292, 'Tumay Huaraca', 303, 3, NULL, NULL),
(293, 'Huayana', 303, 3, NULL, NULL),
(294, 'San Miguel De Chaccrampa', 303, 3, NULL, NULL),
(295, 'Kaquiabamba', 303, 3, NULL, NULL),
(296, 'Antabamba', 304, 3, NULL, NULL),
(297, 'El Oro', 304, 3, NULL, NULL),
(298, 'Huaquirca', 304, 3, NULL, NULL),
(299, 'Juan Espinoza Medrano', 304, 3, NULL, NULL),
(300, 'Oropesa', 304, 3, NULL, NULL),
(301, 'Pachaconas', 304, 3, NULL, NULL),
(302, 'Sabaino', 304, 3, NULL, NULL),
(303, 'Tambobamba', 305, 3, NULL, NULL),
(304, 'Coyllurqui', 305, 3, NULL, NULL),
(305, 'Cotabambas', 305, 3, NULL, NULL),
(306, 'Haquira', 305, 3, NULL, NULL),
(307, 'Mara', 305, 3, NULL, NULL),
(308, 'Challhuahuacho', 305, 3, NULL, NULL),
(309, 'Chuquibambilla', 306, 3, NULL, NULL),
(310, 'Curpahuasi', 306, 3, NULL, NULL),
(311, 'Huaillati', 306, 3, NULL, NULL),
(312, 'Mamara', 306, 3, NULL, NULL),
(313, 'Mariscal Gamarra', 306, 3, NULL, NULL),
(314, 'Micaela Bastidas', 306, 3, NULL, NULL),
(315, 'Progreso', 306, 3, NULL, NULL),
(316, 'Pataypampa', 306, 3, NULL, NULL),
(317, 'San Antonio', 306, 3, NULL, NULL),
(318, 'Turpay', 306, 3, NULL, NULL),
(319, 'Vilcabamba', 306, 3, NULL, NULL),
(320, 'Virundo', 306, 3, NULL, NULL),
(321, 'Santa Rosa', 306, 3, NULL, NULL),
(322, 'Curasco', 306, 3, NULL, NULL),
(323, 'Chincheros', 307, 3, NULL, NULL),
(324, 'Ongoy', 307, 3, NULL, NULL),
(325, 'Ocobamba', 307, 3, NULL, NULL),
(326, 'Cocharcas', 307, 3, NULL, NULL),
(327, 'Anco Huallo', 307, 3, NULL, NULL),
(328, 'Huaccana', 307, 3, NULL, NULL),
(329, 'Uranmarca', 307, 3, NULL, NULL),
(330, 'Ranracancha', 307, 3, NULL, NULL),
(331, 'Arequipa', 401, 4, NULL, NULL),
(332, 'Cayma', 401, 4, NULL, NULL),
(333, 'Cerro Colorado', 401, 4, NULL, NULL),
(334, 'Characato', 401, 4, NULL, NULL),
(335, 'Chiguata', 401, 4, NULL, NULL),
(336, 'La Joya', 401, 4, NULL, NULL),
(337, 'Miraflores', 401, 4, NULL, NULL),
(338, 'Mollebaya', 401, 4, NULL, NULL),
(339, 'Paucarpata', 401, 4, NULL, NULL),
(340, 'Pocsi', 401, 4, NULL, NULL),
(341, 'Polobaya', 401, 4, NULL, NULL),
(342, 'Quequeña', 401, 4, NULL, NULL),
(343, 'Sabandia', 401, 4, NULL, NULL),
(344, 'Sachaca', 401, 4, NULL, NULL),
(345, 'San Juan De Siguas', 401, 4, NULL, NULL),
(346, 'San Juan De Tarucani', 401, 4, NULL, NULL),
(347, 'Santa Isabel De Siguas', 401, 4, NULL, NULL),
(348, 'Sta Rita De Siguas', 401, 4, NULL, NULL),
(349, 'Socabaya', 401, 4, NULL, NULL),
(350, 'Tiabaya', 401, 4, NULL, NULL),
(351, 'Uchumayo', 401, 4, NULL, NULL),
(352, 'Vitor', 401, 4, NULL, NULL),
(353, 'Yanahuara', 401, 4, NULL, NULL),
(354, 'Yarabamba', 401, 4, NULL, NULL),
(355, 'Yura', 401, 4, NULL, NULL),
(356, 'Mariano Melgar', 401, 4, NULL, NULL),
(357, 'Jacobo Hunter', 401, 4, NULL, NULL),
(358, 'Alto Selva Alegre', 401, 4, NULL, NULL),
(359, 'Jose Luis Bustamante Y Rivero', 401, 4, NULL, NULL),
(360, 'Chivay', 402, 4, NULL, NULL),
(361, 'Achoma', 402, 4, NULL, NULL),
(362, 'Cabanaconde', 402, 4, NULL, NULL),
(363, 'Caylloma', 402, 4, NULL, NULL),
(364, 'Callalli', 402, 4, NULL, NULL),
(365, 'Coporaque', 402, 4, NULL, NULL),
(366, 'Huambo', 402, 4, NULL, NULL),
(367, 'Huanca', 402, 4, NULL, NULL),
(368, 'Ichupampa', 402, 4, NULL, NULL),
(369, 'Lari', 402, 4, NULL, NULL),
(370, 'Lluta', 402, 4, NULL, NULL),
(371, 'Maca', 402, 4, NULL, NULL),
(372, 'Madrigal', 402, 4, NULL, NULL),
(373, 'San Antonio De Chuca', 402, 4, NULL, NULL),
(374, 'Sibayo', 402, 4, NULL, NULL),
(375, 'Tapay', 402, 4, NULL, NULL),
(376, 'Tisco', 402, 4, NULL, NULL),
(377, 'Tuti', 402, 4, NULL, NULL),
(378, 'Yanque', 402, 4, NULL, NULL),
(379, 'Majes', 402, 4, NULL, NULL),
(380, 'Camana', 403, 4, NULL, NULL),
(381, 'Jose Maria Quimper', 403, 4, NULL, NULL),
(382, 'Mariano N Valcarcel', 403, 4, NULL, NULL),
(383, 'Mariscal Caceres', 403, 4, NULL, NULL),
(384, 'Nicolas De Pierola', 403, 4, NULL, NULL),
(385, 'Ocoña', 403, 4, NULL, NULL),
(386, 'Quilca', 403, 4, NULL, NULL),
(387, 'Samuel Pastor', 403, 4, NULL, NULL),
(388, 'Caraveli', 404, 4, NULL, NULL),
(389, 'Acari', 404, 4, NULL, NULL),
(390, 'Atico', 404, 4, NULL, NULL),
(391, 'Atiquipa', 404, 4, NULL, NULL),
(392, 'Bella Union', 404, 4, NULL, NULL),
(393, 'Cahuacho', 404, 4, NULL, NULL),
(394, 'Chala', 404, 4, NULL, NULL),
(395, 'Chaparra', 404, 4, NULL, NULL),
(396, 'Huanuhuanu', 404, 4, NULL, NULL),
(397, 'Jaqui', 404, 4, NULL, NULL),
(398, 'Lomas', 404, 4, NULL, NULL),
(399, 'Quicacha', 404, 4, NULL, NULL),
(400, 'Yauca', 404, 4, NULL, NULL),
(401, 'Aplao', 405, 4, NULL, NULL),
(402, 'Andagua', 405, 4, NULL, NULL),
(403, 'Ayo', 405, 4, NULL, NULL),
(404, 'Chachas', 405, 4, NULL, NULL),
(405, 'Chilcaymarca', 405, 4, NULL, NULL),
(406, 'Choco', 405, 4, NULL, NULL),
(407, 'Huancarqui', 405, 4, NULL, NULL),
(408, 'Machaguay', 405, 4, NULL, NULL),
(409, 'Orcopampa', 405, 4, NULL, NULL),
(410, 'Pampacolca', 405, 4, NULL, NULL),
(411, 'Tipan', 405, 4, NULL, NULL),
(412, 'Uraca', 405, 4, NULL, NULL),
(413, 'Uñon', 405, 4, NULL, NULL),
(414, 'Viraco', 405, 4, NULL, NULL),
(415, 'Chuquibamba', 406, 4, NULL, NULL),
(416, 'Andaray', 406, 4, NULL, NULL),
(417, 'Cayarani', 406, 4, NULL, NULL),
(418, 'Chichas', 406, 4, NULL, NULL),
(419, 'Iray', 406, 4, NULL, NULL),
(420, 'Salamanca', 406, 4, NULL, NULL),
(421, 'Yanaquihua', 406, 4, NULL, NULL),
(422, 'Rio Grande', 406, 4, NULL, NULL),
(423, 'Mollendo', 407, 4, NULL, NULL),
(424, 'Cocachacra', 407, 4, NULL, NULL),
(425, 'Dean Valdivia', 407, 4, NULL, NULL),
(426, 'Islay', 407, 4, NULL, NULL),
(427, 'Mejia', 407, 4, NULL, NULL),
(428, 'Punta De Bombon', 407, 4, NULL, NULL),
(429, 'Cotahuasi', 408, 4, NULL, NULL),
(430, 'Alca', 408, 4, NULL, NULL),
(431, 'Charcana', 408, 4, NULL, NULL),
(432, 'Huaynacotas', 408, 4, NULL, NULL),
(433, 'Pampamarca', 408, 4, NULL, NULL),
(434, 'Puyca', 408, 4, NULL, NULL),
(435, 'Quechualla', 408, 4, NULL, NULL),
(436, 'Sayla', 408, 4, NULL, NULL),
(437, 'Tauria', 408, 4, NULL, NULL),
(438, 'Tomepampa', 408, 4, NULL, NULL),
(439, 'Toro', 408, 4, NULL, NULL),
(440, 'Ayacucho', 501, 5, NULL, NULL),
(441, 'Acos Vinchos', 501, 5, NULL, NULL),
(442, 'Carmen Alto', 501, 5, NULL, NULL),
(443, 'Chiara', 501, 5, NULL, NULL),
(444, 'Quinua', 501, 5, NULL, NULL),
(445, 'San Jose De Ticllas', 501, 5, NULL, NULL),
(446, 'San Juan Bautista', 501, 5, NULL, NULL),
(447, 'Santiago De Pischa', 501, 5, NULL, NULL),
(448, 'Vinchos', 501, 5, NULL, NULL),
(449, 'Tambillo', 501, 5, NULL, NULL),
(450, 'Acocro', 501, 5, NULL, NULL),
(451, 'Socos', 501, 5, NULL, NULL),
(452, 'Ocros', 501, 5, NULL, NULL),
(453, 'Pacaycasa', 501, 5, NULL, NULL),
(454, 'Jesus Nazareno', 501, 5, NULL, NULL),
(455, 'Cangallo', 502, 5, NULL, NULL),
(456, 'Chuschi', 502, 5, NULL, NULL),
(457, 'Los Morochucos', 502, 5, NULL, NULL),
(458, 'Paras', 502, 5, NULL, NULL),
(459, 'Totos', 502, 5, NULL, NULL),
(460, 'Maria Parado De Bellido', 502, 5, NULL, NULL),
(461, 'Huanta', 503, 5, NULL, NULL),
(462, 'Ayahuanco', 503, 5, NULL, NULL),
(463, 'Huamanguilla', 503, 5, NULL, NULL),
(464, 'Iguain', 503, 5, NULL, NULL),
(465, 'Luricocha', 503, 5, NULL, NULL),
(466, 'Santillana', 503, 5, NULL, NULL),
(467, 'Sivia', 503, 5, NULL, NULL),
(468, 'Llochegua', 503, 5, NULL, NULL),
(469, 'San Miguel', 504, 5, NULL, NULL),
(470, 'Anco', 504, 5, NULL, NULL),
(471, 'Ayna', 504, 5, NULL, NULL),
(472, 'Chilcas', 504, 5, NULL, NULL),
(473, 'Chungui', 504, 5, NULL, NULL),
(474, 'Tambo', 504, 5, NULL, NULL),
(475, 'Luis Carranza', 504, 5, NULL, NULL),
(476, 'Santa Rosa', 504, 5, NULL, NULL),
(477, 'Puquio', 505, 5, NULL, NULL),
(478, 'Aucara', 505, 5, NULL, NULL),
(479, 'Cabana', 505, 5, NULL, NULL),
(480, 'Carmen Salcedo', 505, 5, NULL, NULL),
(481, 'Chaviña', 505, 5, NULL, NULL),
(482, 'Chipao', 505, 5, NULL, NULL),
(483, 'Huac-huas', 505, 5, NULL, NULL),
(484, 'Laramate', 505, 5, NULL, NULL),
(485, 'Leoncio Prado', 505, 5, NULL, NULL),
(486, 'Lucanas', 505, 5, NULL, NULL),
(487, 'Llauta', 505, 5, NULL, NULL),
(488, 'Ocaña', 505, 5, NULL, NULL),
(489, 'Otoca', 505, 5, NULL, NULL),
(490, 'Sancos', 505, 5, NULL, NULL),
(491, 'San Juan', 505, 5, NULL, NULL),
(492, 'San Pedro', 505, 5, NULL, NULL),
(493, 'Sta Ana De Huaycahuacho', 505, 5, NULL, NULL),
(494, 'Santa Lucia', 505, 5, NULL, NULL),
(495, 'Saisa', 505, 5, NULL, NULL),
(496, 'San Pedro De Palco', 505, 5, NULL, NULL),
(497, 'San Cristobal', 505, 5, NULL, NULL),
(498, 'Coracora', 506, 5, NULL, NULL),
(499, 'Coronel Castañeda', 506, 5, NULL, NULL),
(500, 'Chumpi', 506, 5, NULL, NULL),
(501, 'Pacapausa', 506, 5, NULL, NULL),
(502, 'Pullo', 506, 5, NULL, NULL),
(503, 'Puyusca', 506, 5, NULL, NULL),
(504, 'San Fco De Ravacayco', 506, 5, NULL, NULL),
(505, 'Upahuacho', 506, 5, NULL, NULL),
(506, 'Huancapi', 507, 5, NULL, NULL),
(507, 'Alcamenca', 507, 5, NULL, NULL),
(508, 'Apongo', 507, 5, NULL, NULL),
(509, 'Canaria', 507, 5, NULL, NULL),
(510, 'Cayara', 507, 5, NULL, NULL),
(511, 'Colca', 507, 5, NULL, NULL),
(512, 'Huaya', 507, 5, NULL, NULL),
(513, 'Huamanquiquia', 507, 5, NULL, NULL),
(514, 'Huancaraylla', 507, 5, NULL, NULL),
(515, 'Sarhua', 507, 5, NULL, NULL),
(516, 'Vilcanchos', 507, 5, NULL, NULL),
(517, 'Asquipata', 507, 5, NULL, NULL),
(518, 'Sancos', 508, 5, NULL, NULL),
(519, 'Sacsamarca', 508, 5, NULL, NULL),
(520, 'Santiago De Lucanamarca', 508, 5, NULL, NULL),
(521, 'Carapo', 508, 5, NULL, NULL),
(522, 'Vilcas Huaman', 509, 5, NULL, NULL),
(523, 'Vischongo', 509, 5, NULL, NULL),
(524, 'Accomarca', 509, 5, NULL, NULL),
(525, 'Carhuanca', 509, 5, NULL, NULL),
(526, 'Concepcion', 509, 5, NULL, NULL),
(527, 'Huambalpa', 509, 5, NULL, NULL),
(528, 'Saurama', 509, 5, NULL, NULL),
(529, 'Independencia', 509, 5, NULL, NULL),
(530, 'Pausa', 510, 5, NULL, NULL),
(531, 'Colta', 510, 5, NULL, NULL),
(532, 'Corculla', 510, 5, NULL, NULL),
(533, 'Lampa', 510, 5, NULL, NULL),
(534, 'Marcabamba', 510, 5, NULL, NULL),
(535, 'Oyolo', 510, 5, NULL, NULL),
(536, 'Pararca', 510, 5, NULL, NULL),
(537, 'San Javier De Alpabamba', 510, 5, NULL, NULL),
(538, 'San Jose De Ushua', 510, 5, NULL, NULL),
(539, 'Sara Sara', 510, 5, NULL, NULL),
(540, 'Querobamba', 511, 5, NULL, NULL),
(541, 'Belen', 511, 5, NULL, NULL),
(542, 'Chalcos', 511, 5, NULL, NULL),
(543, 'San Salvador De Quije', 511, 5, NULL, NULL),
(544, 'Paico', 511, 5, NULL, NULL),
(545, 'Santiago De Paucaray', 511, 5, NULL, NULL),
(546, 'San Pedro De Larcay', 511, 5, NULL, NULL),
(547, 'Soras', 511, 5, NULL, NULL),
(548, 'Huacaña', 511, 5, NULL, NULL),
(549, 'Chilcayoc', 511, 5, NULL, NULL),
(550, 'Morcolla', 511, 5, NULL, NULL),
(551, 'Cajamarca', 601, 6, NULL, NULL),
(552, 'Asuncion', 601, 6, NULL, NULL),
(553, 'Cospan', 601, 6, NULL, NULL),
(554, 'Chetilla', 601, 6, NULL, NULL),
(555, 'Encañada', 601, 6, NULL, NULL),
(556, 'Jesus', 601, 6, NULL, NULL),
(557, 'Los Baños Del Inca', 601, 6, NULL, NULL),
(558, 'Llacanora', 601, 6, NULL, NULL),
(559, 'Magdalena', 601, 6, NULL, NULL),
(560, 'Matara', 601, 6, NULL, NULL),
(561, 'Namora', 601, 6, NULL, NULL),
(562, 'San Juan', 601, 6, NULL, NULL),
(563, 'Cajabamba', 602, 6, NULL, NULL),
(564, 'Cachachi', 602, 6, NULL, NULL),
(565, 'Condebamba', 602, 6, NULL, NULL),
(566, 'Sitacocha', 602, 6, NULL, NULL),
(567, 'Celendin', 603, 6, NULL, NULL),
(568, 'Cortegana', 603, 6, NULL, NULL),
(569, 'Chumuch', 603, 6, NULL, NULL),
(570, 'Huasmin', 603, 6, NULL, NULL),
(571, 'Jorge Chavez', 603, 6, NULL, NULL),
(572, 'Jose Galvez', 603, 6, NULL, NULL),
(573, 'Miguel Iglesias', 603, 6, NULL, NULL),
(574, 'Oxamarca', 603, 6, NULL, NULL),
(575, 'Sorochuco', 603, 6, NULL, NULL),
(576, 'Sucre', 603, 6, NULL, NULL),
(577, 'Utco', 603, 6, NULL, NULL),
(578, 'La Libertad De Pallan', 603, 6, NULL, NULL),
(579, 'Contumaza', 604, 6, NULL, NULL),
(580, 'Chilete', 604, 6, NULL, NULL),
(581, 'Guzmango', 604, 6, NULL, NULL),
(582, 'San Benito', 604, 6, NULL, NULL),
(583, 'Cupisnique', 604, 6, NULL, NULL),
(584, 'Tantarica', 604, 6, NULL, NULL),
(585, 'Yonan', 604, 6, NULL, NULL),
(586, 'Sta Cruz De Toledo', 604, 6, NULL, NULL),
(587, 'Cutervo', 605, 6, NULL, NULL),
(588, 'Callayuc', 605, 6, NULL, NULL),
(589, 'Cujillo', 605, 6, NULL, NULL),
(590, 'Choros', 605, 6, NULL, NULL),
(591, 'La Ramada', 605, 6, NULL, NULL),
(592, 'Pimpingos', 605, 6, NULL, NULL),
(593, 'Querocotillo', 605, 6, NULL, NULL),
(594, 'San Andres De Cutervo', 605, 6, NULL, NULL),
(595, 'San Juan De Cutervo', 605, 6, NULL, NULL),
(596, 'San Luis De Lucma', 605, 6, NULL, NULL),
(597, 'Santa Cruz', 605, 6, NULL, NULL),
(598, 'Santo Domingo De La Capilla', 605, 6, NULL, NULL),
(599, 'Santo Tomas', 605, 6, NULL, NULL),
(600, 'Socota', 605, 6, NULL, NULL),
(601, 'Toribio Casanova', 605, 6, NULL, NULL),
(602, 'Chota', 606, 6, NULL, NULL),
(603, 'Anguia', 606, 6, NULL, NULL),
(604, 'Cochabamba', 606, 6, NULL, NULL),
(605, 'Conchan', 606, 6, NULL, NULL),
(606, 'Chadin', 606, 6, NULL, NULL),
(607, 'Chiguirip', 606, 6, NULL, NULL),
(608, 'Chimban', 606, 6, NULL, NULL),
(609, 'Huambos', 606, 6, NULL, NULL),
(610, 'Lajas', 606, 6, NULL, NULL),
(611, 'Llama', 606, 6, NULL, NULL),
(612, 'Miracosta', 606, 6, NULL, NULL),
(613, 'Paccha', 606, 6, NULL, NULL),
(614, 'Pion', 606, 6, NULL, NULL),
(615, 'Querocoto', 606, 6, NULL, NULL),
(616, 'Tacabamba', 606, 6, NULL, NULL),
(617, 'Tocmoche', 606, 6, NULL, NULL),
(618, 'San Juan De Licupis', 606, 6, NULL, NULL),
(619, 'Choropampa', 606, 6, NULL, NULL),
(620, 'Chalamarca', 606, 6, NULL, NULL),
(621, 'Bambamarca', 607, 6, NULL, NULL),
(622, 'Chugur', 607, 6, NULL, NULL),
(623, 'Hualgayoc', 607, 6, NULL, NULL),
(624, 'Jaen', 608, 6, NULL, NULL),
(625, 'Bellavista', 608, 6, NULL, NULL),
(626, 'Colasay', 608, 6, NULL, NULL),
(627, 'Chontali', 608, 6, NULL, NULL),
(628, 'Pomahuaca', 608, 6, NULL, NULL),
(629, 'Pucara', 608, 6, NULL, NULL),
(630, 'Sallique', 608, 6, NULL, NULL),
(631, 'San Felipe', 608, 6, NULL, NULL),
(632, 'San Jose Del Alto', 608, 6, NULL, NULL),
(633, 'Santa Rosa', 608, 6, NULL, NULL),
(634, 'Las Pirias', 608, 6, NULL, NULL),
(635, 'Huabal', 608, 6, NULL, NULL),
(636, 'Santa Cruz', 609, 6, NULL, NULL),
(637, 'Catache', 609, 6, NULL, NULL),
(638, 'Chancaibaños', 609, 6, NULL, NULL),
(639, 'La Esperanza', 609, 6, NULL, NULL),
(640, 'Ninabamba', 609, 6, NULL, NULL),
(641, 'Pulan', 609, 6, NULL, NULL),
(642, 'Sexi', 609, 6, NULL, NULL),
(643, 'Uticyacu', 609, 6, NULL, NULL),
(644, 'Yauyucan', 609, 6, NULL, NULL),
(645, 'Andabamba', 609, 6, NULL, NULL),
(646, 'Saucepampa', 609, 6, NULL, NULL),
(647, 'San Miguel', 610, 6, NULL, NULL),
(648, 'Calquis', 610, 6, NULL, NULL),
(649, 'La Florida', 610, 6, NULL, NULL),
(650, 'Llapa', 610, 6, NULL, NULL),
(651, 'Nanchoc', 610, 6, NULL, NULL),
(652, 'Niepos', 610, 6, NULL, NULL),
(653, 'San Gregorio', 610, 6, NULL, NULL),
(654, 'San Silvestre De Cochan', 610, 6, NULL, NULL),
(655, 'El Prado', 610, 6, NULL, NULL),
(656, 'Union Agua Blanca', 610, 6, NULL, NULL),
(657, 'Tongod', 610, 6, NULL, NULL),
(658, 'Catilluc', 610, 6, NULL, NULL),
(659, 'Bolivar', 610, 6, NULL, NULL),
(660, 'San Ignacio', 611, 6, NULL, NULL),
(661, 'Chirinos', 611, 6, NULL, NULL),
(662, 'Huarango', 611, 6, NULL, NULL),
(663, 'Namballe', 611, 6, NULL, NULL),
(664, 'La Coipa', 611, 6, NULL, NULL),
(665, 'San Jose De Lourdes', 611, 6, NULL, NULL),
(666, 'Tabaconas', 611, 6, NULL, NULL),
(667, 'Pedro Galvez', 612, 6, NULL, NULL),
(668, 'Ichocan', 612, 6, NULL, NULL),
(669, 'Gregorio Pita', 612, 6, NULL, NULL),
(670, 'Jose Manuel Quiroz', 612, 6, NULL, NULL),
(671, 'Eduardo Villanueva', 612, 6, NULL, NULL),
(672, 'Jose Sabogal', 612, 6, NULL, NULL),
(673, 'Chancay', 612, 6, NULL, NULL),
(674, 'San Pablo', 613, 6, NULL, NULL),
(675, 'San Bernardino', 613, 6, NULL, NULL),
(676, 'San Luis', 613, 6, NULL, NULL),
(677, 'Tumbaden', 613, 6, NULL, NULL),
(678, 'Cusco', 701, 7, NULL, NULL),
(679, 'Ccorca', 701, 7, NULL, NULL),
(680, 'Poroy', 701, 7, NULL, NULL),
(681, 'San Jeronimo', 701, 7, NULL, NULL),
(682, 'San Sebastian', 701, 7, NULL, NULL),
(683, 'Santiago', 701, 7, NULL, NULL),
(684, 'Saylla', 701, 7, NULL, NULL),
(685, 'Wanchaq', 701, 7, NULL, NULL),
(686, 'Acomayo', 702, 7, NULL, NULL),
(687, 'Acopia', 702, 7, NULL, NULL),
(688, 'Acos', 702, 7, NULL, NULL),
(689, 'Pomacanchi', 702, 7, NULL, NULL),
(690, 'Rondocan', 702, 7, NULL, NULL),
(691, 'Sangarara', 702, 7, NULL, NULL),
(692, 'Mosoc Llacta', 702, 7, NULL, NULL),
(693, 'Anta', 703, 7, NULL, NULL),
(694, 'Chinchaypujio', 703, 7, NULL, NULL),
(695, 'Huarocondo', 703, 7, NULL, NULL),
(696, 'Limatambo', 703, 7, NULL, NULL),
(697, 'Mollepata', 703, 7, NULL, NULL),
(698, 'Pucyura', 703, 7, NULL, NULL),
(699, 'Zurite', 703, 7, NULL, NULL),
(700, 'Cachimayo', 703, 7, NULL, NULL),
(701, 'Ancahuasi', 703, 7, NULL, NULL),
(702, 'Calca', 704, 7, NULL, NULL),
(703, 'Coya', 704, 7, NULL, NULL),
(704, 'Lamay', 704, 7, NULL, NULL),
(705, 'Lares', 704, 7, NULL, NULL),
(706, 'Pisac', 704, 7, NULL, NULL),
(707, 'San Salvador', 704, 7, NULL, NULL),
(708, 'Taray', 704, 7, NULL, NULL),
(709, 'Yanatile', 704, 7, NULL, NULL),
(710, 'Yanaoca', 705, 7, NULL, NULL),
(711, 'Checca', 705, 7, NULL, NULL),
(712, 'Kunturkanki', 705, 7, NULL, NULL),
(713, 'Langui', 705, 7, NULL, NULL),
(714, 'Layo', 705, 7, NULL, NULL),
(715, 'Pampamarca', 705, 7, NULL, NULL),
(716, 'Quehue', 705, 7, NULL, NULL),
(717, 'Tupac Amaru', 705, 7, NULL, NULL),
(718, 'Sicuani', 706, 7, NULL, NULL),
(719, 'Combapata', 706, 7, NULL, NULL),
(720, 'Checacupe', 706, 7, NULL, NULL),
(721, 'Marangani', 706, 7, NULL, NULL),
(722, 'Pitumarca', 706, 7, NULL, NULL),
(723, 'San Pablo', 706, 7, NULL, NULL),
(724, 'San Pedro', 706, 7, NULL, NULL),
(725, 'Tinta', 706, 7, NULL, NULL),
(726, 'Santo Tomas', 707, 7, NULL, NULL),
(727, 'Capacmarca', 707, 7, NULL, NULL),
(728, 'Colquemarca', 707, 7, NULL, NULL),
(729, 'Chamaca', 707, 7, NULL, NULL),
(730, 'Livitaca', 707, 7, NULL, NULL),
(731, 'Llusco', 707, 7, NULL, NULL),
(732, 'Quiñota', 707, 7, NULL, NULL),
(733, 'Velille', 707, 7, NULL, NULL),
(734, 'Espinar', 708, 7, NULL, NULL),
(735, 'Condoroma', 708, 7, NULL, NULL),
(736, 'Coporaque', 708, 7, NULL, NULL),
(737, 'Ocoruro', 708, 7, NULL, NULL),
(738, 'Pallpata', 708, 7, NULL, NULL),
(739, 'Pichigua', 708, 7, NULL, NULL),
(740, 'Suykutambo', 708, 7, NULL, NULL),
(741, 'Alto Pichigua', 708, 7, NULL, NULL),
(742, 'Santa Ana', 709, 7, NULL, NULL),
(743, 'Echarate', 709, 7, NULL, NULL),
(744, 'Huayopata', 709, 7, NULL, NULL),
(745, 'Maranura', 709, 7, NULL, NULL),
(746, 'Ocobamba', 709, 7, NULL, NULL),
(747, 'Santa Teresa', 709, 7, NULL, NULL),
(748, 'Vilcabamba', 709, 7, NULL, NULL),
(749, 'Quellouno', 709, 7, NULL, NULL),
(750, 'Kimbiri', 709, 7, NULL, NULL),
(751, 'Pichari', 709, 7, NULL, NULL),
(752, 'Paruro', 710, 7, NULL, NULL),
(753, 'Accha', 710, 7, NULL, NULL),
(754, 'Ccapi', 710, 7, NULL, NULL),
(755, 'Colcha', 710, 7, NULL, NULL),
(756, 'Huanoquite', 710, 7, NULL, NULL),
(757, 'Omacha', 710, 7, NULL, NULL),
(758, 'Yaurisque', 710, 7, NULL, NULL),
(759, 'Paccaritambo', 710, 7, NULL, NULL),
(760, 'Pillpinto', 710, 7, NULL, NULL),
(761, 'Paucartambo', 711, 7, NULL, NULL),
(762, 'Caicay', 711, 7, NULL, NULL),
(763, 'Colquepata', 711, 7, NULL, NULL),
(764, 'Challabamba', 711, 7, NULL, NULL),
(765, 'Cosñipata', 711, 7, NULL, NULL),
(766, 'Huancarani', 711, 7, NULL, NULL),
(767, 'Urcos', 712, 7, NULL, NULL),
(768, 'Andahuaylillas', 712, 7, NULL, NULL),
(769, 'Camanti', 712, 7, NULL, NULL),
(770, 'Ccarhuayo', 712, 7, NULL, NULL),
(771, 'Ccatca', 712, 7, NULL, NULL),
(772, 'Cusipata', 712, 7, NULL, NULL),
(773, 'Huaro', 712, 7, NULL, NULL),
(774, 'Lucre', 712, 7, NULL, NULL),
(775, 'Marcapata', 712, 7, NULL, NULL),
(776, 'Ocongate', 712, 7, NULL, NULL),
(777, 'Oropesa', 712, 7, NULL, NULL),
(778, 'Quiquijana', 712, 7, NULL, NULL),
(779, 'Urubamba', 713, 7, NULL, NULL),
(780, 'Chinchero', 713, 7, NULL, NULL),
(781, 'Huayllabamba', 713, 7, NULL, NULL),
(782, 'Machupicchu', 713, 7, NULL, NULL),
(783, 'Maras', 713, 7, NULL, NULL),
(784, 'Ollantaytambo', 713, 7, NULL, NULL),
(785, 'Yucay', 713, 7, NULL, NULL),
(786, 'Huancavelica', 801, 8, NULL, NULL),
(787, 'Acobambilla', 801, 8, NULL, NULL),
(788, 'Acoria', 801, 8, NULL, NULL),
(789, 'Conayca', 801, 8, NULL, NULL),
(790, 'Cuenca', 801, 8, NULL, NULL),
(791, 'Huachocolpa', 801, 8, NULL, NULL),
(792, 'Huayllahuara', 801, 8, NULL, NULL),
(793, 'Izcuchaca', 801, 8, NULL, NULL),
(794, 'Laria', 801, 8, NULL, NULL),
(795, 'Manta', 801, 8, NULL, NULL),
(796, 'Mariscal Caceres', 801, 8, NULL, NULL),
(797, 'Moya', 801, 8, NULL, NULL),
(798, 'Nuevo Occoro', 801, 8, NULL, NULL),
(799, 'Palca', 801, 8, NULL, NULL),
(800, 'Pilchaca', 801, 8, NULL, NULL),
(801, 'Vilca', 801, 8, NULL, NULL),
(802, 'Yauli', 801, 8, NULL, NULL),
(803, 'Ascension', 801, 8, NULL, NULL),
(804, 'Huando', 801, 8, NULL, NULL),
(805, 'Acobamba', 802, 8, NULL, NULL),
(806, 'Anta', 802, 8, NULL, NULL),
(807, 'Andabamba', 802, 8, NULL, NULL),
(808, 'Caja', 802, 8, NULL, NULL),
(809, 'Marcas', 802, 8, NULL, NULL),
(810, 'Paucara', 802, 8, NULL, NULL),
(811, 'Pomacocha', 802, 8, NULL, NULL),
(812, 'Rosario', 802, 8, NULL, NULL),
(813, 'Lircay', 803, 8, NULL, NULL),
(814, 'Anchonga', 803, 8, NULL, NULL),
(815, 'Callanmarca', 803, 8, NULL, NULL),
(816, 'Congalla', 803, 8, NULL, NULL),
(817, 'Chincho', 803, 8, NULL, NULL),
(818, 'Huayllay Grande', 803, 8, NULL, NULL),
(819, 'Huanca Huanca', 803, 8, NULL, NULL),
(820, 'Julcamarca', 803, 8, NULL, NULL),
(821, 'San Antonio De Antaparco', 803, 8, NULL, NULL),
(822, 'Sto Tomas De Pata', 803, 8, NULL, NULL),
(823, 'Secclla', 803, 8, NULL, NULL),
(824, 'Ccochaccasa', 803, 8, NULL, NULL),
(825, 'Castrovirreyna', 804, 8, NULL, NULL),
(826, 'Arma', 804, 8, NULL, NULL),
(827, 'Aurahua', 804, 8, NULL, NULL),
(828, 'Capillas', 804, 8, NULL, NULL),
(829, 'Cocas', 804, 8, NULL, NULL),
(830, 'Chupamarca', 804, 8, NULL, NULL),
(831, 'Huachos', 804, 8, NULL, NULL),
(832, 'Huamatambo', 804, 8, NULL, NULL),
(833, 'Mollepampa', 804, 8, NULL, NULL),
(834, 'San Juan', 804, 8, NULL, NULL),
(835, 'Tantara', 804, 8, NULL, NULL),
(836, 'Ticrapo', 804, 8, NULL, NULL),
(837, 'Santa Ana', 804, 8, NULL, NULL),
(838, 'Pampas', 805, 8, NULL, NULL),
(839, 'Acostambo', 805, 8, NULL, NULL),
(840, 'Acraquia', 805, 8, NULL, NULL),
(841, 'Ahuaycha', 805, 8, NULL, NULL),
(842, 'Colcabamba', 805, 8, NULL, NULL),
(843, 'Daniel Hernandez', 805, 8, NULL, NULL),
(844, 'Huachocolpa', 805, 8, NULL, NULL),
(845, 'Huaribamba', 805, 8, NULL, NULL),
(846, 'Ñahuimpuquio', 805, 8, NULL, NULL),
(847, 'Pazos', 805, 8, NULL, NULL),
(848, 'Quishuar', 805, 8, NULL, NULL),
(849, 'Salcabamba', 805, 8, NULL, NULL),
(850, 'San Marcos De Rocchac', 805, 8, NULL, NULL),
(851, 'Surcubamba', 805, 8, NULL, NULL),
(852, 'Tintay Puncu', 805, 8, NULL, NULL),
(853, 'Salcahuasi', 805, 8, NULL, NULL),
(854, 'Ayavi', 806, 8, NULL, NULL),
(855, 'Cordova', 806, 8, NULL, NULL),
(856, 'Huayacundo Arma', 806, 8, NULL, NULL),
(857, 'Huaytara', 806, 8, NULL, NULL),
(858, 'Laramarca', 806, 8, NULL, NULL),
(859, 'Ocoyo', 806, 8, NULL, NULL),
(860, 'Pilpichaca', 806, 8, NULL, NULL),
(861, 'Querco', 806, 8, NULL, NULL),
(862, 'Quito Arma', 806, 8, NULL, NULL),
(863, 'San Antonio De Cusicancha', 806, 8, NULL, NULL),
(864, 'San Francisco De Sangayaico', 806, 8, NULL, NULL),
(865, 'San Isidro', 806, 8, NULL, NULL),
(866, 'Santiago De Chocorvos', 806, 8, NULL, NULL),
(867, 'Santiago De Quirahuara', 806, 8, NULL, NULL),
(868, 'Santo Domingo De Capillas', 806, 8, NULL, NULL),
(869, 'Tambo', 806, 8, NULL, NULL),
(870, 'Churcampa', 807, 8, NULL, NULL),
(871, 'Anco', 807, 8, NULL, NULL),
(872, 'Chinchihuasi', 807, 8, NULL, NULL),
(873, 'El Carmen', 807, 8, NULL, NULL),
(874, 'La Merced', 807, 8, NULL, NULL),
(875, 'Locroja', 807, 8, NULL, NULL),
(876, 'Paucarbamba', 807, 8, NULL, NULL),
(877, 'San Miguel De Mayoc', 807, 8, NULL, NULL),
(878, 'San Pedro De Coris', 807, 8, NULL, NULL),
(879, 'Pachamarca', 807, 8, NULL, NULL),
(880, 'Huanuco', 901, 9, NULL, NULL),
(881, 'Chinchao', 901, 9, NULL, NULL),
(882, 'Churubamba', 901, 9, NULL, NULL),
(883, 'Margos', 901, 9, NULL, NULL),
(884, 'Quisqui', 901, 9, NULL, NULL),
(885, 'San Fco De Cayran', 901, 9, NULL, NULL),
(886, 'San Pedro De Chaulan', 901, 9, NULL, NULL),
(887, 'Sta Maria Del Valle', 901, 9, NULL, NULL),
(888, 'Yarumayo', 901, 9, NULL, NULL),
(889, 'Amarilis', 901, 9, NULL, NULL),
(890, 'Pillco Marca', 901, 9, NULL, NULL),
(891, 'Ambo', 902, 9, NULL, NULL),
(892, 'Cayna', 902, 9, NULL, NULL),
(893, 'Colpas', 902, 9, NULL, NULL),
(894, 'Conchamarca', 902, 9, NULL, NULL),
(895, 'Huacar', 902, 9, NULL, NULL),
(896, 'San Francisco', 902, 9, NULL, NULL),
(897, 'San Rafael', 902, 9, NULL, NULL),
(898, 'Tomay Kichwa', 902, 9, NULL, NULL),
(899, 'La Union', 903, 9, NULL, NULL),
(900, 'Chuquis', 903, 9, NULL, NULL),
(901, 'Marias', 903, 9, NULL, NULL),
(902, 'Pachas', 903, 9, NULL, NULL),
(903, 'Quivilla', 903, 9, NULL, NULL),
(904, 'Ripan', 903, 9, NULL, NULL),
(905, 'Shunqui', 903, 9, NULL, NULL),
(906, 'Sillapata', 903, 9, NULL, NULL),
(907, 'Yanas', 903, 9, NULL, NULL),
(908, 'Llata', 904, 9, NULL, NULL),
(909, 'Arancay', 904, 9, NULL, NULL),
(910, 'Chavin De Pariarca', 904, 9, NULL, NULL),
(911, 'Jacas Grande', 904, 9, NULL, NULL),
(912, 'Jircan', 904, 9, NULL, NULL),
(913, 'Miraflores', 904, 9, NULL, NULL),
(914, 'Monzon', 904, 9, NULL, NULL),
(915, 'Punchao', 904, 9, NULL, NULL),
(916, 'Puños', 904, 9, NULL, NULL),
(917, 'Singa', 904, 9, NULL, NULL),
(918, 'Tantamayo', 904, 9, NULL, NULL),
(919, 'Huacrachuco', 905, 9, NULL, NULL),
(920, 'Cholon', 905, 9, NULL, NULL),
(921, 'San Buenaventura', 905, 9, NULL, NULL),
(922, 'Rupa Rupa', 906, 9, NULL, NULL),
(923, 'Daniel Alomia Robles', 906, 9, NULL, NULL),
(924, 'Hermilio Valdizan', 906, 9, NULL, NULL),
(925, 'Luyando', 906, 9, NULL, NULL),
(926, 'Mariano Damaso Beraun', 906, 9, NULL, NULL),
(927, 'Jose Crespo Y Castillo', 906, 9, NULL, NULL),
(928, 'Panao', 907, 9, NULL, NULL),
(929, 'Chaglla', 907, 9, NULL, NULL),
(930, 'Molino', 907, 9, NULL, NULL),
(931, 'Umari', 907, 9, NULL, NULL),
(932, 'Honoria', 908, 9, NULL, NULL),
(933, 'Puerto Inca', 908, 9, NULL, NULL),
(934, 'Codo Del Pozuzo', 908, 9, NULL, NULL),
(935, 'Tournavista', 908, 9, NULL, NULL),
(936, 'Yuyapichis', 908, 9, NULL, NULL),
(937, 'Huacaybamba', 909, 9, NULL, NULL),
(938, 'Pinra', 909, 9, NULL, NULL),
(939, 'Canchabamba', 909, 9, NULL, NULL),
(940, 'Cochabamba', 909, 9, NULL, NULL),
(941, 'Jesus', 910, 9, NULL, NULL),
(942, 'Baños', 910, 9, NULL, NULL),
(943, 'San Francisco De Asis', 910, 9, NULL, NULL),
(944, 'Queropalca', 910, 9, NULL, NULL),
(945, 'San Miguel De Cauri', 910, 9, NULL, NULL),
(946, 'Rondos', 910, 9, NULL, NULL),
(947, 'Jivia', 910, 9, NULL, NULL),
(948, 'Chavinillo', 911, 9, NULL, NULL),
(949, 'Aparicio Pomares (chupan)', 911, 9, NULL, NULL),
(950, 'Cahuac', 911, 9, NULL, NULL),
(951, 'Chacabamba', 911, 9, NULL, NULL),
(952, 'Jacas Chico', 911, 9, NULL, NULL),
(953, 'Obas', 911, 9, NULL, NULL),
(954, 'Pampamarca', 911, 9, NULL, NULL),
(955, 'Choras', 911, 9, NULL, NULL),
(956, 'Ica', 1001, 10, NULL, NULL),
(957, 'La Tinguiña', 1001, 10, NULL, NULL),
(958, 'Los Aquijes', 1001, 10, NULL, NULL),
(959, 'Parcona', 1001, 10, NULL, NULL),
(960, 'Pueblo Nuevo', 1001, 10, NULL, NULL),
(961, 'Salas', 1001, 10, NULL, NULL),
(962, 'San Jose De Los Molinos', 1001, 10, NULL, NULL),
(963, 'San Juan Bautista', 1001, 10, NULL, NULL),
(964, 'Santiago', 1001, 10, NULL, NULL),
(965, 'Subtanjalla', 1001, 10, NULL, NULL),
(966, 'Yauca Del Rosario', 1001, 10, NULL, NULL),
(967, 'Tate', 1001, 10, NULL, NULL),
(968, 'Pachacutec', 1001, 10, NULL, NULL),
(969, 'Ocucaje', 1001, 10, NULL, NULL),
(970, 'Chincha Alta', 1002, 10, NULL, NULL),
(971, 'Chavin', 1002, 10, NULL, NULL),
(972, 'Chincha Baja', 1002, 10, NULL, NULL),
(973, 'El Carmen', 1002, 10, NULL, NULL),
(974, 'Grocio Prado', 1002, 10, NULL, NULL),
(975, 'San Pedro De Huacarpana', 1002, 10, NULL, NULL),
(976, 'Sunampe', 1002, 10, NULL, NULL),
(977, 'Tambo De Mora', 1002, 10, NULL, NULL),
(978, 'Alto Laran', 1002, 10, NULL, NULL),
(979, 'Pueblo Nuevo', 1002, 10, NULL, NULL),
(980, 'San Juan De Yanac', 1002, 10, NULL, NULL),
(981, 'Nazca', 1003, 10, NULL, NULL),
(982, 'Changuillo', 1003, 10, NULL, NULL),
(983, 'El Ingenio', 1003, 10, NULL, NULL),
(984, 'Marcona', 1003, 10, NULL, NULL),
(985, 'Vista Alegre', 1003, 10, NULL, NULL),
(986, 'Pisco', 1004, 10, NULL, NULL),
(987, 'Huancano', 1004, 10, NULL, NULL),
(988, 'Humay', 1004, 10, NULL, NULL),
(989, 'Independencia', 1004, 10, NULL, NULL),
(990, 'Paracas', 1004, 10, NULL, NULL),
(991, 'San Andres', 1004, 10, NULL, NULL),
(992, 'San Clemente', 1004, 10, NULL, NULL),
(993, 'Tupac Amaru Inca', 1004, 10, NULL, NULL),
(994, 'Palpa', 1005, 10, NULL, NULL),
(995, 'Llipata', 1005, 10, NULL, NULL),
(996, 'Rio Grande', 1005, 10, NULL, NULL),
(997, 'Santa Cruz', 1005, 10, NULL, NULL),
(998, 'Tibillo', 1005, 10, NULL, NULL),
(999, 'Huancayo', 1101, 11, NULL, NULL),
(1000, 'Carhuacallanga', 1101, 11, NULL, NULL),
(1001, 'Colca', 1101, 11, NULL, NULL),
(1002, 'Cullhuas', 1101, 11, NULL, NULL),
(1003, 'Chacapampa', 1101, 11, NULL, NULL),
(1004, 'Chicche', 1101, 11, NULL, NULL),
(1005, 'Chilca', 1101, 11, NULL, NULL),
(1006, 'Chongos Alto', 1101, 11, NULL, NULL),
(1007, 'Chupuro', 1101, 11, NULL, NULL),
(1008, 'El Tambo', 1101, 11, NULL, NULL),
(1009, 'Huacrapuquio', 1101, 11, NULL, NULL),
(1010, 'Hualhuas', 1101, 11, NULL, NULL),
(1011, 'Huancan', 1101, 11, NULL, NULL),
(1012, 'Huasicancha', 1101, 11, NULL, NULL),
(1013, 'Huayucachi', 1101, 11, NULL, NULL),
(1014, 'Ingenio', 1101, 11, NULL, NULL),
(1015, 'Pariahuanca', 1101, 11, NULL, NULL),
(1016, 'Pilcomayo', 1101, 11, NULL, NULL),
(1017, 'Pucara', 1101, 11, NULL, NULL),
(1018, 'Quichuay', 1101, 11, NULL, NULL),
(1019, 'Quilcas', 1101, 11, NULL, NULL),
(1020, 'San Agustin', 1101, 11, NULL, NULL),
(1021, 'San Jeronimo De Tunan', 1101, 11, NULL, NULL),
(1022, 'Sto Domingo De Acobamba', 1101, 11, NULL, NULL),
(1023, 'Saño', 1101, 11, NULL, NULL),
(1024, 'Sapallanga', 1101, 11, NULL, NULL),
(1025, 'Sicaya', 1101, 11, NULL, NULL),
(1026, 'Viques', 1101, 11, NULL, NULL),
(1027, 'Concepcion', 1102, 11, NULL, NULL),
(1028, 'Aco', 1102, 11, NULL, NULL),
(1029, 'Andamarca', 1102, 11, NULL, NULL),
(1030, 'Comas', 1102, 11, NULL, NULL),
(1031, 'Cochas', 1102, 11, NULL, NULL),
(1032, 'Chambara', 1102, 11, NULL, NULL),
(1033, 'Heroinas Toledo', 1102, 11, NULL, NULL),
(1034, 'Manzanares', 1102, 11, NULL, NULL),
(1035, 'Mcal Castilla', 1102, 11, NULL, NULL),
(1036, 'Matahuasi', 1102, 11, NULL, NULL),
(1037, 'Mito', 1102, 11, NULL, NULL),
(1038, 'Nueve De Julio', 1102, 11, NULL, NULL),
(1039, 'Orcotuna', 1102, 11, NULL, NULL),
(1040, 'Sta Rosa De Ocopa', 1102, 11, NULL, NULL),
(1041, 'San Jose De Quero', 1102, 11, NULL, NULL),
(1042, 'Jauja', 1103, 11, NULL, NULL),
(1043, 'Acolla', 1103, 11, NULL, NULL),
(1044, 'Apata', 1103, 11, NULL, NULL),
(1045, 'Ataura', 1103, 11, NULL, NULL),
(1046, 'Canchaillo', 1103, 11, NULL, NULL),
(1047, 'El Mantaro', 1103, 11, NULL, NULL),
(1048, 'Huamali', 1103, 11, NULL, NULL),
(1049, 'Huaripampa', 1103, 11, NULL, NULL),
(1050, 'Huertas', 1103, 11, NULL, NULL),
(1051, 'Janjaillo', 1103, 11, NULL, NULL),
(1052, 'Julcan', 1103, 11, NULL, NULL),
(1053, 'Leonor Ordoñez', 1103, 11, NULL, NULL),
(1054, 'Llocllapampa', 1103, 11, NULL, NULL),
(1055, 'Marco', 1103, 11, NULL, NULL),
(1056, 'Masma', 1103, 11, NULL, NULL),
(1057, 'Molinos', 1103, 11, NULL, NULL),
(1058, 'Monobamba', 1103, 11, NULL, NULL),
(1059, 'Muqui', 1103, 11, NULL, NULL),
(1060, 'Muquiyauyo', 1103, 11, NULL, NULL),
(1061, 'Paca', 1103, 11, NULL, NULL),
(1062, 'Paccha', 1103, 11, NULL, NULL),
(1063, 'Pancan', 1103, 11, NULL, NULL),
(1064, 'Parco', 1103, 11, NULL, NULL),
(1065, 'Pomacancha', 1103, 11, NULL, NULL),
(1066, 'Ricran', 1103, 11, NULL, NULL),
(1067, 'San Lorenzo', 1103, 11, NULL, NULL),
(1068, 'San Pedro De Chunan', 1103, 11, NULL, NULL),
(1069, 'Sincos', 1103, 11, NULL, NULL),
(1070, 'Tunan Marca', 1103, 11, NULL, NULL),
(1071, 'Yauli', 1103, 11, NULL, NULL),
(1072, 'Curicaca', 1103, 11, NULL, NULL),
(1073, 'Masma Chicche', 1103, 11, NULL, NULL),
(1074, 'Sausa', 1103, 11, NULL, NULL),
(1075, 'Yauyos', 1103, 11, NULL, NULL),
(1076, 'Junin', 1104, 11, NULL, NULL),
(1077, 'Carhuamayo', 1104, 11, NULL, NULL),
(1078, 'Ondores', 1104, 11, NULL, NULL),
(1079, 'Ulcumayo', 1104, 11, NULL, NULL),
(1080, 'Tarma', 1105, 11, NULL, NULL),
(1081, 'Acobamba', 1105, 11, NULL, NULL),
(1082, 'Huaricolca', 1105, 11, NULL, NULL),
(1083, 'Huasahuasi', 1105, 11, NULL, NULL),
(1084, 'La Union', 1105, 11, NULL, NULL),
(1085, 'Palca', 1105, 11, NULL, NULL),
(1086, 'Palcamayo', 1105, 11, NULL, NULL),
(1087, 'San Pedro De Cajas', 1105, 11, NULL, NULL),
(1088, 'Tapo', 1105, 11, NULL, NULL),
(1089, 'La Oroya', 1106, 11, NULL, NULL),
(1090, 'Chacapalpa', 1106, 11, NULL, NULL),
(1091, 'Huay Huay', 1106, 11, NULL, NULL),
(1092, 'Marcapomacocha', 1106, 11, NULL, NULL),
(1093, 'Morococha', 1106, 11, NULL, NULL),
(1094, 'Paccha', 1106, 11, NULL, NULL),
(1095, 'Sta Barbara De Carhuacayan', 1106, 11, NULL, NULL),
(1096, 'Suitucancha', 1106, 11, NULL, NULL),
(1097, 'Yauli', 1106, 11, NULL, NULL),
(1098, 'Sta Rosa De Sacco', 1106, 11, NULL, NULL),
(1099, 'Satipo', 1107, 11, NULL, NULL),
(1100, 'Coviriali', 1107, 11, NULL, NULL),
(1101, 'Llaylla', 1107, 11, NULL, NULL),
(1102, 'Mazamari', 1107, 11, NULL, NULL),
(1103, 'Pampa Hermosa', 1107, 11, NULL, NULL),
(1104, 'Pangoa', 1107, 11, NULL, NULL),
(1105, 'Rio Negro', 1107, 11, NULL, NULL),
(1106, 'Rio Tambo', 1107, 11, NULL, NULL),
(1107, 'Chanchamayo', 1108, 11, NULL, NULL),
(1108, 'San Ramon', 1108, 11, NULL, NULL),
(1109, 'Vitoc', 1108, 11, NULL, NULL),
(1110, 'San Luis De Shuaro', 1108, 11, NULL, NULL),
(1111, 'Pichanaqui', 1108, 11, NULL, NULL),
(1112, 'Perene', 1108, 11, NULL, NULL),
(1113, 'Chupaca', 1109, 11, NULL, NULL),
(1114, 'Ahuac', 1109, 11, NULL, NULL),
(1115, 'Chongos Bajo', 1109, 11, NULL, NULL),
(1116, 'Huachac', 1109, 11, NULL, NULL),
(1117, 'Huamancaca Chico', 1109, 11, NULL, NULL),
(1118, 'San Juan De Iscos', 1109, 11, NULL, NULL),
(1119, 'San Juan De Jarpa', 1109, 11, NULL, NULL),
(1120, 'Tres De Diciembre', 1109, 11, NULL, NULL),
(1121, 'Yanacancha', 1109, 11, NULL, NULL),
(1122, 'Trujillo', 1201, 12, NULL, NULL),
(1123, 'Huanchaco', 1201, 12, NULL, NULL),
(1124, 'Laredo', 1201, 12, NULL, NULL),
(1125, 'Moche', 1201, 12, NULL, NULL),
(1126, 'Salaverry', 1201, 12, NULL, NULL),
(1127, 'Simbal', 1201, 12, NULL, NULL),
(1128, 'Victor Larco Herrera', 1201, 12, NULL, NULL),
(1129, 'Poroto', 1201, 12, NULL, NULL),
(1130, 'El Porvenir', 1201, 12, NULL, NULL),
(1131, 'La Esperanza', 1201, 12, NULL, NULL),
(1132, 'Florencia De Mora', 1201, 12, NULL, NULL),
(1133, 'Bolivar', 1202, 12, NULL, NULL),
(1134, 'Bambamarca', 1202, 12, NULL, NULL),
(1135, 'Condormarca', 1202, 12, NULL, NULL),
(1136, 'Longotea', 1202, 12, NULL, NULL),
(1137, 'Ucuncha', 1202, 12, NULL, NULL),
(1138, 'Uchumarca', 1202, 12, NULL, NULL),
(1139, 'Huamachuco', 1203, 12, NULL, NULL),
(1140, 'Cochorco', 1203, 12, NULL, NULL),
(1141, 'Curgos', 1203, 12, NULL, NULL),
(1142, 'Chugay', 1203, 12, NULL, NULL),
(1143, 'Marcabal', 1203, 12, NULL, NULL),
(1144, 'Sanagoran', 1203, 12, NULL, NULL),
(1145, 'Sarin', 1203, 12, NULL, NULL),
(1146, 'Sartimbamba', 1203, 12, NULL, NULL),
(1147, 'Otuzco', 1204, 12, NULL, NULL),
(1148, 'Agallpampa', 1204, 12, NULL, NULL),
(1149, 'Charat', 1204, 12, NULL, NULL),
(1150, 'Huaranchal', 1204, 12, NULL, NULL),
(1151, 'La Cuesta', 1204, 12, NULL, NULL),
(1152, 'Paranday', 1204, 12, NULL, NULL),
(1153, 'Salpo', 1204, 12, NULL, NULL),
(1154, 'Sinsicap', 1204, 12, NULL, NULL),
(1155, 'Usquil', 1204, 12, NULL, NULL),
(1156, 'Mache', 1204, 12, NULL, NULL),
(1157, 'San Pedro De Lloc', 1205, 12, NULL, NULL),
(1158, 'Guadalupe', 1205, 12, NULL, NULL),
(1159, 'Jequetepeque', 1205, 12, NULL, NULL),
(1160, 'Pacasmayo', 1205, 12, NULL, NULL),
(1161, 'San Jose', 1205, 12, NULL, NULL),
(1162, 'Tayabamba', 1206, 12, NULL, NULL),
(1163, 'Buldibuyo', 1206, 12, NULL, NULL),
(1164, 'Chillia', 1206, 12, NULL, NULL),
(1165, 'Huaylillas', 1206, 12, NULL, NULL),
(1166, 'Huancaspata', 1206, 12, NULL, NULL),
(1167, 'Huayo', 1206, 12, NULL, NULL),
(1168, 'Ongon', 1206, 12, NULL, NULL),
(1169, 'Parcoy', 1206, 12, NULL, NULL),
(1170, 'Pataz', 1206, 12, NULL, NULL),
(1171, 'Pias', 1206, 12, NULL, NULL),
(1172, 'Taurija', 1206, 12, NULL, NULL),
(1173, 'Urpay', 1206, 12, NULL, NULL),
(1174, 'Santiago De Challas', 1206, 12, NULL, NULL),
(1175, 'Santiago De Chuco', 1207, 12, NULL, NULL),
(1176, 'Cachicadan', 1207, 12, NULL, NULL),
(1177, 'Mollebamba', 1207, 12, NULL, NULL),
(1178, 'Mollepata', 1207, 12, NULL, NULL),
(1179, 'Quiruvilca', 1207, 12, NULL, NULL),
(1180, 'Santa Cruz De Chuca', 1207, 12, NULL, NULL),
(1181, 'Sitabamba', 1207, 12, NULL, NULL),
(1182, 'Angasmarca', 1207, 12, NULL, NULL),
(1183, 'Ascope', 1208, 12, NULL, NULL),
(1184, 'Chicama', 1208, 12, NULL, NULL),
(1185, 'Chocope', 1208, 12, NULL, NULL),
(1186, 'Santiago De Cao', 1208, 12, NULL, NULL),
(1187, 'Magdalena De Cao', 1208, 12, NULL, NULL),
(1188, 'Paijan', 1208, 12, NULL, NULL),
(1189, 'Razuri', 1208, 12, NULL, NULL),
(1190, 'Casa Grande', 1208, 12, NULL, NULL),
(1191, 'Chepen', 1209, 12, NULL, NULL),
(1192, 'Pacanga', 1209, 12, NULL, NULL),
(1193, 'Pueblo Nuevo', 1209, 12, NULL, NULL),
(1194, 'Julcan', 1210, 12, NULL, NULL),
(1195, 'Carabamba', 1210, 12, NULL, NULL),
(1196, 'Calamarca', 1210, 12, NULL, NULL),
(1197, 'Huaso', 1210, 12, NULL, NULL),
(1198, 'Cascas', 1211, 12, NULL, NULL),
(1199, 'Lucma', 1211, 12, NULL, NULL),
(1200, 'Marmot', 1211, 12, NULL, NULL),
(1201, 'Sayapullo', 1211, 12, NULL, NULL),
(1202, 'Viru', 1212, 12, NULL, NULL),
(1203, 'Chao', 1212, 12, NULL, NULL),
(1204, 'Guadalupito', 1212, 12, NULL, NULL),
(1205, 'Chiclayo', 1301, 13, NULL, NULL),
(1206, 'Chongoyape', 1301, 13, NULL, NULL),
(1207, 'Eten', 1301, 13, NULL, NULL),
(1208, 'Eten Puerto', 1301, 13, NULL, NULL),
(1209, 'Lagunas', 1301, 13, NULL, NULL),
(1210, 'Monsefu', 1301, 13, NULL, NULL),
(1211, 'Nueva Arica', 1301, 13, NULL, NULL),
(1212, 'Oyotun', 1301, 13, NULL, NULL),
(1213, 'Picsi', 1301, 13, NULL, NULL),
(1214, 'Pimentel', 1301, 13, NULL, NULL),
(1215, 'Reque', 1301, 13, NULL, NULL),
(1216, 'Jose Leonardo Ortiz', 1301, 13, NULL, NULL),
(1217, 'Santa Rosa', 1301, 13, NULL, NULL),
(1218, 'Saña', 1301, 13, NULL, NULL),
(1219, 'La Victoria', 1301, 13, NULL, NULL),
(1220, 'Cayalti', 1301, 13, NULL, NULL),
(1221, 'Patapo', 1301, 13, NULL, NULL),
(1222, 'Pomalca', 1301, 13, NULL, NULL),
(1223, 'Pucala', 1301, 13, NULL, NULL),
(1224, 'Tuman', 1301, 13, NULL, NULL),
(1225, 'Ferreñafe', 1302, 13, NULL, NULL),
(1226, 'Incahuasi', 1302, 13, NULL, NULL),
(1227, 'Cañaris', 1302, 13, NULL, NULL),
(1228, 'Pitipo', 1302, 13, NULL, NULL),
(1229, 'Pueblo Nuevo', 1302, 13, NULL, NULL),
(1230, 'Manuel Antonio Mesones Muro', 1302, 13, NULL, NULL),
(1231, 'Lambayeque', 1303, 13, NULL, NULL),
(1232, 'Chochope', 1303, 13, NULL, NULL),
(1233, 'Illimo', 1303, 13, NULL, NULL),
(1234, 'Jayanca', 1303, 13, NULL, NULL),
(1235, 'Mochumi', 1303, 13, NULL, NULL),
(1236, 'Morrope', 1303, 13, NULL, NULL),
(1237, 'Motupe', 1303, 13, NULL, NULL),
(1238, 'Olmos', 1303, 13, NULL, NULL),
(1239, 'Pacora', 1303, 13, NULL, NULL),
(1240, 'Salas', 1303, 13, NULL, NULL),
(1241, 'San Jose', 1303, 13, NULL, NULL),
(1242, 'Tucume', 1303, 13, NULL, NULL),
(1243, 'Lima', 1401, 14, NULL, NULL),
(1244, 'Ancon', 1401, 14, NULL, NULL),
(1245, 'Ate', 1401, 14, NULL, NULL),
(1246, 'Breña', 1401, 14, NULL, NULL),
(1247, 'Carabayllo', 1401, 14, NULL, NULL),
(1248, 'Comas', 1401, 14, NULL, NULL),
(1249, 'Chaclacayo', 1401, 14, NULL, NULL),
(1250, 'Chorrillos', 1401, 14, NULL, NULL),
(1251, 'La Victoria', 1401, 14, NULL, NULL),
(1252, 'La Molina', 1401, 14, NULL, NULL),
(1253, 'Lince', 1401, 14, NULL, NULL),
(1254, 'Lurigancho', 1401, 14, NULL, NULL),
(1255, 'Lurin', 1401, 14, NULL, NULL),
(1256, 'Magdalena Del Mar', 1401, 14, NULL, NULL),
(1257, 'Miraflores', 1401, 14, NULL, NULL),
(1258, 'Pachacamac', 1401, 14, NULL, NULL),
(1259, 'Pueblo Libre', 1401, 14, NULL, NULL),
(1260, 'Pucusana', 1401, 14, NULL, NULL),
(1261, 'Puente Piedra', 1401, 14, NULL, NULL),
(1262, 'Punta Hermosa', 1401, 14, NULL, NULL),
(1263, 'Punta Negra', 1401, 14, NULL, NULL),
(1264, 'Rimac', 1401, 14, NULL, NULL),
(1265, 'San Bartolo', 1401, 14, NULL, NULL),
(1266, 'San Isidro', 1401, 14, NULL, NULL),
(1267, 'Barranco', 1401, 14, NULL, NULL),
(1268, 'San Martin De Porres', 1401, 14, NULL, NULL),
(1269, 'San Miguel', 1401, 14, NULL, NULL),
(1270, 'Sta Maria Del Mar', 1401, 14, NULL, NULL),
(1271, 'Santa Rosa', 1401, 14, NULL, NULL),
(1272, 'Santiago De Surco', 1401, 14, NULL, NULL),
(1273, 'Surquillo', 1401, 14, NULL, NULL),
(1274, 'Villa Maria Del Triunfo', 1401, 14, NULL, NULL),
(1275, 'Jesus Maria', 1401, 14, NULL, NULL),
(1276, 'Independencia', 1401, 14, NULL, NULL),
(1277, 'El Agustino', 1401, 14, NULL, NULL),
(1278, 'San Juan De Miraflores', 1401, 14, NULL, NULL),
(1279, 'San Juan De Lurigancho', 1401, 14, NULL, NULL),
(1280, 'San Luis', 1401, 14, NULL, NULL),
(1281, 'Cieneguilla', 1401, 14, NULL, NULL),
(1282, 'San Borja', 1401, 14, NULL, NULL),
(1283, 'Villa El Salvador', 1401, 14, NULL, NULL),
(1284, 'Los Olivos', 1401, 14, NULL, NULL),
(1285, 'Santa Anita', 1401, 14, NULL, NULL),
(1286, 'Cajatambo', 1402, 14, NULL, NULL),
(1287, 'Copa', 1402, 14, NULL, NULL);
INSERT INTO `distrito` (`id`, `nombre_distrito`, `idProvincia`, `idDepartamento`, `created_at`, `updated_at`) VALUES
(1288, 'Gorgor', 1402, 14, NULL, NULL),
(1289, 'Huancapon', 1402, 14, NULL, NULL),
(1290, 'Manas', 1402, 14, NULL, NULL),
(1291, 'Canta', 1403, 14, NULL, NULL),
(1292, 'Arahuay', 1403, 14, NULL, NULL),
(1293, 'Huamantanga', 1403, 14, NULL, NULL),
(1294, 'Huaros', 1403, 14, NULL, NULL),
(1295, 'Lachaqui', 1403, 14, NULL, NULL),
(1296, 'San Buenaventura', 1403, 14, NULL, NULL),
(1297, 'Santa Rosa De Quives', 1403, 14, NULL, NULL),
(1298, 'San Vicente De Cañete', 1404, 14, NULL, NULL),
(1299, 'Calango', 1404, 14, NULL, NULL),
(1300, 'Cerro Azul', 1404, 14, NULL, NULL),
(1301, 'Coayllo', 1404, 14, NULL, NULL),
(1302, 'Chilca', 1404, 14, NULL, NULL),
(1303, 'Imperial', 1404, 14, NULL, NULL),
(1304, 'Lunahuana', 1404, 14, NULL, NULL),
(1305, 'Mala', 1404, 14, NULL, NULL),
(1306, 'Nuevo Imperial', 1404, 14, NULL, NULL),
(1307, 'Pacaran', 1404, 14, NULL, NULL),
(1308, 'Quilmana', 1404, 14, NULL, NULL),
(1309, 'San Antonio', 1404, 14, NULL, NULL),
(1310, 'San Luis', 1404, 14, NULL, NULL),
(1311, 'Santa Cruz De Flores', 1404, 14, NULL, NULL),
(1312, 'Zuñiga', 1404, 14, NULL, NULL),
(1313, 'Asia', 1404, 14, NULL, NULL),
(1314, 'Huacho', 1405, 14, NULL, NULL),
(1315, 'Ambar', 1405, 14, NULL, NULL),
(1316, 'Caleta De Carquin', 1405, 14, NULL, NULL),
(1317, 'Checras', 1405, 14, NULL, NULL),
(1318, 'Hualmay', 1405, 14, NULL, NULL),
(1319, 'Huaura', 1405, 14, NULL, NULL),
(1320, 'Leoncio Prado', 1405, 14, NULL, NULL),
(1321, 'Paccho', 1405, 14, NULL, NULL),
(1322, 'Santa Leonor', 1405, 14, NULL, NULL),
(1323, 'Santa Maria', 1405, 14, NULL, NULL),
(1324, 'Sayan', 1405, 14, NULL, NULL),
(1325, 'Vegueta', 1405, 14, NULL, NULL),
(1326, 'Matucana', 1406, 14, NULL, NULL),
(1327, 'Antioquia', 1406, 14, NULL, NULL),
(1328, 'Callahuanca', 1406, 14, NULL, NULL),
(1329, 'Carampoma', 1406, 14, NULL, NULL),
(1330, 'Casta', 1406, 14, NULL, NULL),
(1331, 'San Jose De Los Chorrillos', 1406, 14, NULL, NULL),
(1332, 'Chicla', 1406, 14, NULL, NULL),
(1333, 'Huanza', 1406, 14, NULL, NULL),
(1334, 'Huarochiri', 1406, 14, NULL, NULL),
(1335, 'Lahuaytambo', 1406, 14, NULL, NULL),
(1336, 'Langa', 1406, 14, NULL, NULL),
(1337, 'Mariatana', 1406, 14, NULL, NULL),
(1338, 'Ricardo Palma', 1406, 14, NULL, NULL),
(1339, 'San Andres De Tupicocha', 1406, 14, NULL, NULL),
(1340, 'San Antonio', 1406, 14, NULL, NULL),
(1341, 'San Bartolome', 1406, 14, NULL, NULL),
(1342, 'San Damian', 1406, 14, NULL, NULL),
(1343, 'Sangallaya', 1406, 14, NULL, NULL),
(1344, 'San Juan De Tantaranche', 1406, 14, NULL, NULL),
(1345, 'San Lorenzo De Quinti', 1406, 14, NULL, NULL),
(1346, 'San Mateo', 1406, 14, NULL, NULL),
(1347, 'San Mateo De Otao', 1406, 14, NULL, NULL),
(1348, 'San Pedro De Huancayre', 1406, 14, NULL, NULL),
(1349, 'Santa Cruz De Cocachacra', 1406, 14, NULL, NULL),
(1350, 'Santa Eulalia', 1406, 14, NULL, NULL),
(1351, 'Santiago De Anchucaya', 1406, 14, NULL, NULL),
(1352, 'Santiago De Tuna', 1406, 14, NULL, NULL),
(1353, 'Santo Domingo De Los Olleros', 1406, 14, NULL, NULL),
(1354, 'Surco', 1406, 14, NULL, NULL),
(1355, 'Huachupampa', 1406, 14, NULL, NULL),
(1356, 'Laraos', 1406, 14, NULL, NULL),
(1357, 'San Juan De Iris', 1406, 14, NULL, NULL),
(1358, 'Yauyos', 1407, 14, NULL, NULL),
(1359, 'Alis', 1407, 14, NULL, NULL),
(1360, 'Ayauca', 1407, 14, NULL, NULL),
(1361, 'Ayaviri', 1407, 14, NULL, NULL),
(1362, 'Azangaro', 1407, 14, NULL, NULL),
(1363, 'Cacra', 1407, 14, NULL, NULL),
(1364, 'Carania', 1407, 14, NULL, NULL),
(1365, 'Cochas', 1407, 14, NULL, NULL),
(1366, 'Colonia', 1407, 14, NULL, NULL),
(1367, 'Chocos', 1407, 14, NULL, NULL),
(1368, 'Huampara', 1407, 14, NULL, NULL),
(1369, 'Huancaya', 1407, 14, NULL, NULL),
(1370, 'Huangascar', 1407, 14, NULL, NULL),
(1371, 'Huantan', 1407, 14, NULL, NULL),
(1372, 'Huañec', 1407, 14, NULL, NULL),
(1373, 'Laraos', 1407, 14, NULL, NULL),
(1374, 'Lincha', 1407, 14, NULL, NULL),
(1375, 'Miraflores', 1407, 14, NULL, NULL),
(1376, 'Omas', 1407, 14, NULL, NULL),
(1377, 'Quinches', 1407, 14, NULL, NULL),
(1378, 'Quinocay', 1407, 14, NULL, NULL),
(1379, 'San Joaquin', 1407, 14, NULL, NULL),
(1380, 'San Pedro De Pilas', 1407, 14, NULL, NULL),
(1381, 'Tanta', 1407, 14, NULL, NULL),
(1382, 'Tauripampa', 1407, 14, NULL, NULL),
(1383, 'Tupe', 1407, 14, NULL, NULL),
(1384, 'Tomas', 1407, 14, NULL, NULL),
(1385, 'Viñac', 1407, 14, NULL, NULL),
(1386, 'Vitis', 1407, 14, NULL, NULL),
(1387, 'Hongos', 1407, 14, NULL, NULL),
(1388, 'Madean', 1407, 14, NULL, NULL),
(1389, 'Putinza', 1407, 14, NULL, NULL),
(1390, 'Catahuasi', 1407, 14, NULL, NULL),
(1391, 'Huaral', 1408, 14, NULL, NULL),
(1392, 'Atavillos Alto', 1408, 14, NULL, NULL),
(1393, 'Atavillos Bajo', 1408, 14, NULL, NULL),
(1394, 'Aucallama', 1408, 14, NULL, NULL),
(1395, 'Chancay', 1408, 14, NULL, NULL),
(1396, 'Ihuari', 1408, 14, NULL, NULL),
(1397, 'Lampian', 1408, 14, NULL, NULL),
(1398, 'Pacaraos', 1408, 14, NULL, NULL),
(1399, 'San Miguel De Acos', 1408, 14, NULL, NULL),
(1400, 'Veintisiete De Noviembre', 1408, 14, NULL, NULL),
(1401, 'Sta Cruz De Andamarca', 1408, 14, NULL, NULL),
(1402, 'Sumbilca', 1408, 14, NULL, NULL),
(1403, 'Barranca', 1409, 14, NULL, NULL),
(1404, 'Paramonga', 1409, 14, NULL, NULL),
(1405, 'Pativilca', 1409, 14, NULL, NULL),
(1406, 'Supe', 1409, 14, NULL, NULL),
(1407, 'Supe Puerto', 1409, 14, NULL, NULL),
(1408, 'Oyon', 1410, 14, NULL, NULL),
(1409, 'Navan', 1410, 14, NULL, NULL),
(1410, 'Caujul', 1410, 14, NULL, NULL),
(1411, 'Andajes', 1410, 14, NULL, NULL),
(1412, 'Pachangara', 1410, 14, NULL, NULL),
(1413, 'Cochamarca', 1410, 14, NULL, NULL),
(1414, 'Iquitos', 1501, 15, NULL, NULL),
(1415, 'Alto Nanay', 1501, 15, NULL, NULL),
(1416, 'Fernando Lores', 1501, 15, NULL, NULL),
(1417, 'Las Amazonas', 1501, 15, NULL, NULL),
(1418, 'Mazan', 1501, 15, NULL, NULL),
(1419, 'Napo', 1501, 15, NULL, NULL),
(1420, 'Putumayo', 1501, 15, NULL, NULL),
(1421, 'Torres Causana', 1501, 15, NULL, NULL),
(1422, 'Indiana', 1501, 15, NULL, NULL),
(1423, 'Punchana', 1501, 15, NULL, NULL),
(1424, 'Belen', 1501, 15, NULL, NULL),
(1425, 'San Juan Bautista', 1501, 15, NULL, NULL),
(1426, 'Tnte Manuel Clavero', 1501, 15, NULL, NULL),
(1427, 'Yurimaguas', 1502, 15, NULL, NULL),
(1428, 'Balsapuerto', 1502, 15, NULL, NULL),
(1429, 'Jeberos', 1502, 15, NULL, NULL),
(1430, 'Lagunas', 1502, 15, NULL, NULL),
(1431, 'Santa Cruz', 1502, 15, NULL, NULL),
(1432, 'Tnte Cesar Lopez Rojas', 1502, 15, NULL, NULL),
(1433, 'Nauta', 1503, 15, NULL, NULL),
(1434, 'Parinari', 1503, 15, NULL, NULL),
(1435, 'Tigre', 1503, 15, NULL, NULL),
(1436, 'Urarinas', 1503, 15, NULL, NULL),
(1437, 'Trompeteros', 1503, 15, NULL, NULL),
(1438, 'Requena', 1504, 15, NULL, NULL),
(1439, 'Alto Tapiche', 1504, 15, NULL, NULL),
(1440, 'Capelo', 1504, 15, NULL, NULL),
(1441, 'Emilio San Martin', 1504, 15, NULL, NULL),
(1442, 'Maquia', 1504, 15, NULL, NULL),
(1443, 'Puinahua', 1504, 15, NULL, NULL),
(1444, 'Sapuena', 1504, 15, NULL, NULL),
(1445, 'Soplin', 1504, 15, NULL, NULL),
(1446, 'Tapiche', 1504, 15, NULL, NULL),
(1447, 'Jenaro Herrera', 1504, 15, NULL, NULL),
(1448, 'Yaquerana', 1504, 15, NULL, NULL),
(1449, 'Contamana', 1505, 15, NULL, NULL),
(1450, 'Vargas Guerra', 1505, 15, NULL, NULL),
(1451, 'Padre Marquez', 1505, 15, NULL, NULL),
(1452, 'Pampa Hermoza', 1505, 15, NULL, NULL),
(1453, 'Sarayacu', 1505, 15, NULL, NULL),
(1454, 'Inahuaya', 1505, 15, NULL, NULL),
(1455, 'Mariscal Ramon Castilla', 1506, 15, NULL, NULL),
(1456, 'Pebas', 1506, 15, NULL, NULL),
(1457, 'Yavari', 1506, 15, NULL, NULL),
(1458, 'San Pablo', 1506, 15, NULL, NULL),
(1459, 'Barranca', 1507, 15, NULL, NULL),
(1460, 'Andoas', 1507, 15, NULL, NULL),
(1461, 'Cahuapanas', 1507, 15, NULL, NULL),
(1462, 'Manseriche', 1507, 15, NULL, NULL),
(1463, 'Morona', 1507, 15, NULL, NULL),
(1464, 'Pastaza', 1507, 15, NULL, NULL),
(1465, 'Tambopata', 1601, 16, NULL, NULL),
(1466, 'Inambari', 1601, 16, NULL, NULL),
(1467, 'Las Piedras', 1601, 16, NULL, NULL),
(1468, 'Laberinto', 1601, 16, NULL, NULL),
(1469, 'Manu', 1602, 16, NULL, NULL),
(1470, 'Fitzcarrald', 1602, 16, NULL, NULL),
(1471, 'Madre De Dios', 1602, 16, NULL, NULL),
(1472, 'Huepetuhe', 1602, 16, NULL, NULL),
(1473, 'Iñapari', 1603, 16, NULL, NULL),
(1474, 'Iberia', 1603, 16, NULL, NULL),
(1475, 'Tahuamanu', 1603, 16, NULL, NULL),
(1476, 'Moquegua', 1701, 17, NULL, NULL),
(1477, 'Carumas', 1701, 17, NULL, NULL),
(1478, 'Cuchumbaya', 1701, 17, NULL, NULL),
(1479, 'San Cristobal', 1701, 17, NULL, NULL),
(1480, 'Torata', 1701, 17, NULL, NULL),
(1481, 'Samegua', 1701, 17, NULL, NULL),
(1482, 'Omate', 1702, 17, NULL, NULL),
(1483, 'Coalaque', 1702, 17, NULL, NULL),
(1484, 'Chojata', 1702, 17, NULL, NULL),
(1485, 'Ichuña', 1702, 17, NULL, NULL),
(1486, 'La Capilla', 1702, 17, NULL, NULL),
(1487, 'Lloque', 1702, 17, NULL, NULL),
(1488, 'Matalaque', 1702, 17, NULL, NULL),
(1489, 'Puquina', 1702, 17, NULL, NULL),
(1490, 'Quinistaquillas', 1702, 17, NULL, NULL),
(1491, 'Ubinas', 1702, 17, NULL, NULL),
(1492, 'Yunga', 1702, 17, NULL, NULL),
(1493, 'Ilo', 1703, 17, NULL, NULL),
(1494, 'El Algarrobal', 1703, 17, NULL, NULL),
(1495, 'Pacocha', 1703, 17, NULL, NULL),
(1496, 'Chaupimarca', 1801, 18, NULL, NULL),
(1497, 'Huachon', 1801, 18, NULL, NULL),
(1498, 'Huariaca', 1801, 18, NULL, NULL),
(1499, 'Huayllay', 1801, 18, NULL, NULL),
(1500, 'Ninacaca', 1801, 18, NULL, NULL),
(1501, 'Pallanchacra', 1801, 18, NULL, NULL),
(1502, 'Paucartambo', 1801, 18, NULL, NULL),
(1503, 'San Fco De Asis De Yarusyacan', 1801, 18, NULL, NULL),
(1504, 'Simon Bolivar', 1801, 18, NULL, NULL),
(1505, 'Ticlacayan', 1801, 18, NULL, NULL),
(1506, 'Tinyahuarco', 1801, 18, NULL, NULL),
(1507, 'Vicco', 1801, 18, NULL, NULL),
(1508, 'Yanacancha', 1801, 18, NULL, NULL),
(1509, 'Yanahuanca', 1802, 18, NULL, NULL),
(1510, 'Chacayan', 1802, 18, NULL, NULL),
(1511, 'Goyllarisquizga', 1802, 18, NULL, NULL),
(1512, 'Paucar', 1802, 18, NULL, NULL),
(1513, 'San Pedro De Pillao', 1802, 18, NULL, NULL),
(1514, 'Santa Ana De Tusi', 1802, 18, NULL, NULL),
(1515, 'Tapuc', 1802, 18, NULL, NULL),
(1516, 'Vilcabamba', 1802, 18, NULL, NULL),
(1517, 'Oxapampa', 1803, 18, NULL, NULL),
(1518, 'Chontabamba', 1803, 18, NULL, NULL),
(1519, 'Huancabamba', 1803, 18, NULL, NULL),
(1520, 'Puerto Bermudez', 1803, 18, NULL, NULL),
(1521, 'Villa Rica', 1803, 18, NULL, NULL),
(1522, 'Pozuzo', 1803, 18, NULL, NULL),
(1523, 'Palcazu', 1803, 18, NULL, NULL),
(1524, 'Piura', 1901, 19, NULL, NULL),
(1525, 'Castilla', 1901, 19, NULL, NULL),
(1526, 'Catacaos', 1901, 19, NULL, NULL),
(1527, 'La Arena', 1901, 19, NULL, NULL),
(1528, 'La Union', 1901, 19, NULL, NULL),
(1529, 'Las Lomas', 1901, 19, NULL, NULL),
(1530, 'Tambo Grande', 1901, 19, NULL, NULL),
(1531, 'Cura Mori', 1901, 19, NULL, NULL),
(1532, 'El Tallan', 1901, 19, NULL, NULL),
(1533, 'Ayabaca', 1902, 19, NULL, NULL),
(1534, 'Frias', 1902, 19, NULL, NULL),
(1535, 'Lagunas', 1902, 19, NULL, NULL),
(1536, 'Montero', 1902, 19, NULL, NULL),
(1537, 'Pacaipampa', 1902, 19, NULL, NULL),
(1538, 'Sapillica', 1902, 19, NULL, NULL),
(1539, 'Sicchez', 1902, 19, NULL, NULL),
(1540, 'Suyo', 1902, 19, NULL, NULL),
(1541, 'Jilili', 1902, 19, NULL, NULL),
(1542, 'Paimas', 1902, 19, NULL, NULL),
(1543, 'Huancabamba', 1903, 19, NULL, NULL),
(1544, 'Canchaque', 1903, 19, NULL, NULL),
(1545, 'Huarmaca', 1903, 19, NULL, NULL),
(1546, 'Sondor', 1903, 19, NULL, NULL),
(1547, 'Sondorillo', 1903, 19, NULL, NULL),
(1548, 'El Carmen De La Frontera', 1903, 19, NULL, NULL),
(1549, 'San Miguel De El Faique', 1903, 19, NULL, NULL),
(1550, 'Lalaquiz', 1903, 19, NULL, NULL),
(1551, 'Chulucanas', 1904, 19, NULL, NULL),
(1552, 'Buenos Aires', 1904, 19, NULL, NULL),
(1553, 'Chalaco', 1904, 19, NULL, NULL),
(1554, 'Morropon', 1904, 19, NULL, NULL),
(1555, 'Salitral', 1904, 19, NULL, NULL),
(1556, 'Santa Catalina De Mossa', 1904, 19, NULL, NULL),
(1557, 'Santo Domingo', 1904, 19, NULL, NULL),
(1558, 'La Matanza', 1904, 19, NULL, NULL),
(1559, 'Yamango', 1904, 19, NULL, NULL),
(1560, 'San Juan De Bigote', 1904, 19, NULL, NULL),
(1561, 'Paita', 1905, 19, NULL, NULL),
(1562, 'Amotape', 1905, 19, NULL, NULL),
(1563, 'Arenal', 1905, 19, NULL, NULL),
(1564, 'La Huaca', 1905, 19, NULL, NULL),
(1565, 'Pueblo Nuevo De Colan', 1905, 19, NULL, NULL),
(1566, 'Tamarindo', 1905, 19, NULL, NULL),
(1567, 'Vichayal', 1905, 19, NULL, NULL),
(1568, 'Sullana', 1906, 19, NULL, NULL),
(1569, 'Bellavista', 1906, 19, NULL, NULL),
(1570, 'Lancones', 1906, 19, NULL, NULL),
(1571, 'Marcavelica', 1906, 19, NULL, NULL),
(1572, 'Miguel Checa', 1906, 19, NULL, NULL),
(1573, 'Querecotillo', 1906, 19, NULL, NULL),
(1574, 'Salitral', 1906, 19, NULL, NULL),
(1575, 'Ignacio Escudero', 1906, 19, NULL, NULL),
(1576, 'Pariñas', 1907, 19, NULL, NULL),
(1577, 'El Alto', 1907, 19, NULL, NULL),
(1578, 'La Brea', 1907, 19, NULL, NULL),
(1579, 'Lobitos', 1907, 19, NULL, NULL),
(1580, 'Mancora', 1907, 19, NULL, NULL),
(1581, 'Los Organos', 1907, 19, NULL, NULL),
(1582, 'Sechura', 1908, 19, NULL, NULL),
(1583, 'Vice', 1908, 19, NULL, NULL),
(1584, 'Bernal', 1908, 19, NULL, NULL),
(1585, 'Bellavista De La Union', 1908, 19, NULL, NULL),
(1586, 'Cristo Nos Valga', 1908, 19, NULL, NULL),
(1587, 'Rinconada Llicuar', 1908, 19, NULL, NULL),
(1588, 'Puno', 2001, 20, NULL, NULL),
(1589, 'Acora', 2001, 20, NULL, NULL),
(1590, 'Atuncolla', 2001, 20, NULL, NULL),
(1591, 'Capachica', 2001, 20, NULL, NULL),
(1592, 'Coata', 2001, 20, NULL, NULL),
(1593, 'Chucuito', 2001, 20, NULL, NULL),
(1594, 'Huata', 2001, 20, NULL, NULL),
(1595, 'Mañazo', 2001, 20, NULL, NULL),
(1596, 'Paucarcolla', 2001, 20, NULL, NULL),
(1597, 'Pichacani', 2001, 20, NULL, NULL),
(1598, 'San Antonio', 2001, 20, NULL, NULL),
(1599, 'Tiquillaca', 2001, 20, NULL, NULL),
(1600, 'Vilque', 2001, 20, NULL, NULL),
(1601, 'Plateria', 2001, 20, NULL, NULL),
(1602, 'Amantani', 2001, 20, NULL, NULL),
(1603, 'Azangaro', 2002, 20, NULL, NULL),
(1604, 'Achaya', 2002, 20, NULL, NULL),
(1605, 'Arapa', 2002, 20, NULL, NULL),
(1606, 'Asillo', 2002, 20, NULL, NULL),
(1607, 'Caminaca', 2002, 20, NULL, NULL),
(1608, 'Chupa', 2002, 20, NULL, NULL),
(1609, 'Jose Domingo Choquehuanca', 2002, 20, NULL, NULL),
(1610, 'Muñani', 2002, 20, NULL, NULL),
(1611, 'Potoni', 2002, 20, NULL, NULL),
(1612, 'Saman', 2002, 20, NULL, NULL),
(1613, 'San Anton', 2002, 20, NULL, NULL),
(1614, 'San Jose', 2002, 20, NULL, NULL),
(1615, 'San Juan De Salinas', 2002, 20, NULL, NULL),
(1616, 'Stgo De Pupuja', 2002, 20, NULL, NULL),
(1617, 'Tirapata', 2002, 20, NULL, NULL),
(1618, 'Macusani', 2003, 20, NULL, NULL),
(1619, 'Ajoyani', 2003, 20, NULL, NULL),
(1620, 'Ayapata', 2003, 20, NULL, NULL),
(1621, 'Coasa', 2003, 20, NULL, NULL),
(1622, 'Corani', 2003, 20, NULL, NULL),
(1623, 'Crucero', 2003, 20, NULL, NULL),
(1624, 'Ituata', 2003, 20, NULL, NULL),
(1625, 'Ollachea', 2003, 20, NULL, NULL),
(1626, 'San Gaban', 2003, 20, NULL, NULL),
(1627, 'Usicayos', 2003, 20, NULL, NULL),
(1628, 'Juli', 2004, 20, NULL, NULL),
(1629, 'Desaguadero', 2004, 20, NULL, NULL),
(1630, 'Huacullani', 2004, 20, NULL, NULL),
(1631, 'Pisacoma', 2004, 20, NULL, NULL),
(1632, 'Pomata', 2004, 20, NULL, NULL),
(1633, 'Zepita', 2004, 20, NULL, NULL),
(1634, 'Kelluyo', 2004, 20, NULL, NULL),
(1635, 'Huancane', 2005, 20, NULL, NULL),
(1636, 'Cojata', 2005, 20, NULL, NULL),
(1637, 'Inchupalla', 2005, 20, NULL, NULL),
(1638, 'Pusi', 2005, 20, NULL, NULL),
(1639, 'Rosaspata', 2005, 20, NULL, NULL),
(1640, 'Taraco', 2005, 20, NULL, NULL),
(1641, 'Vilque Chico', 2005, 20, NULL, NULL),
(1642, 'Huatasani', 2005, 20, NULL, NULL),
(1643, 'Lampa', 2006, 20, NULL, NULL),
(1644, 'Cabanilla', 2006, 20, NULL, NULL),
(1645, 'Calapuja', 2006, 20, NULL, NULL),
(1646, 'Nicasio', 2006, 20, NULL, NULL),
(1647, 'Ocuviri', 2006, 20, NULL, NULL),
(1648, 'Palca', 2006, 20, NULL, NULL),
(1649, 'Paratia', 2006, 20, NULL, NULL),
(1650, 'Pucara', 2006, 20, NULL, NULL),
(1651, 'Santa Lucia', 2006, 20, NULL, NULL),
(1652, 'Vilavila', 2006, 20, NULL, NULL),
(1653, 'Ayaviri', 2007, 20, NULL, NULL),
(1654, 'Antauta', 2007, 20, NULL, NULL),
(1655, 'Cupi', 2007, 20, NULL, NULL),
(1656, 'Llalli', 2007, 20, NULL, NULL),
(1657, 'Macari', 2007, 20, NULL, NULL),
(1658, 'Nuñoa', 2007, 20, NULL, NULL),
(1659, 'Orurillo', 2007, 20, NULL, NULL),
(1660, 'Santa Rosa', 2007, 20, NULL, NULL),
(1661, 'Umachiri', 2007, 20, NULL, NULL),
(1662, 'Sandia', 2008, 20, NULL, NULL),
(1663, 'Cuyocuyo', 2008, 20, NULL, NULL),
(1664, 'Limbani', 2008, 20, NULL, NULL),
(1665, 'Phara', 2008, 20, NULL, NULL),
(1666, 'Patambuco', 2008, 20, NULL, NULL),
(1667, 'Quiaca', 2008, 20, NULL, NULL),
(1668, 'San Juan Del Oro', 2008, 20, NULL, NULL),
(1669, 'Yanahuaya', 2008, 20, NULL, NULL),
(1670, 'Alto Inambari', 2008, 20, NULL, NULL),
(1671, 'San Pedro De Putina Punco', 2008, 20, NULL, NULL),
(1672, 'Juliaca', 2009, 20, NULL, NULL),
(1673, 'Cabana', 2009, 20, NULL, NULL),
(1674, 'Cabanillas', 2009, 20, NULL, NULL),
(1675, 'Caracoto', 2009, 20, NULL, NULL),
(1676, 'Yunguyo', 2010, 20, NULL, NULL),
(1677, 'Unicachi', 2010, 20, NULL, NULL),
(1678, 'Anapia', 2010, 20, NULL, NULL),
(1679, 'Copani', 2010, 20, NULL, NULL),
(1680, 'Cuturapi', 2010, 20, NULL, NULL),
(1681, 'Ollaraya', 2010, 20, NULL, NULL),
(1682, 'Tinicachi', 2010, 20, NULL, NULL),
(1683, 'Putina', 2011, 20, NULL, NULL),
(1684, 'Pedro Vilca Apaza', 2011, 20, NULL, NULL),
(1685, 'Quilca Puncu', 2011, 20, NULL, NULL),
(1686, 'Ananea', 2011, 20, NULL, NULL),
(1687, 'Sina', 2011, 20, NULL, NULL),
(1688, 'Ilave', 2012, 20, NULL, NULL),
(1689, 'Pilcuyo', 2012, 20, NULL, NULL),
(1690, 'Santa Rosa', 2012, 20, NULL, NULL),
(1691, 'Capaso', 2012, 20, NULL, NULL),
(1692, 'Conduriri', 2012, 20, NULL, NULL),
(1693, 'Moho', 2013, 20, NULL, NULL),
(1694, 'Conima', 2013, 20, NULL, NULL),
(1695, 'Tilali', 2013, 20, NULL, NULL),
(1696, 'Huayrapata', 2013, 20, NULL, NULL),
(1697, 'Moyobamba', 2101, 21, NULL, NULL),
(1698, 'Calzada', 2101, 21, NULL, NULL),
(1699, 'Habana', 2101, 21, NULL, NULL),
(1700, 'Jepelacio', 2101, 21, NULL, NULL),
(1701, 'Soritor', 2101, 21, NULL, NULL),
(1702, 'Yantalo', 2101, 21, NULL, NULL),
(1703, 'Saposoa', 2102, 21, NULL, NULL),
(1704, 'Piscoyacu', 2102, 21, NULL, NULL),
(1705, 'Sacanche', 2102, 21, NULL, NULL),
(1706, 'Tingo De Saposoa', 2102, 21, NULL, NULL),
(1707, 'Alto Saposoa', 2102, 21, NULL, NULL),
(1708, 'El Eslabon', 2102, 21, NULL, NULL),
(1709, 'Lamas', 2103, 21, NULL, NULL),
(1710, 'Barranquita', 2103, 21, NULL, NULL),
(1711, 'Caynarachi', 2103, 21, NULL, NULL),
(1712, 'Cuñumbuqui', 2103, 21, NULL, NULL),
(1713, 'Pinto Recodo', 2103, 21, NULL, NULL),
(1714, 'Rumisapa', 2103, 21, NULL, NULL),
(1715, 'Shanao', 2103, 21, NULL, NULL),
(1716, 'Tabalosos', 2103, 21, NULL, NULL),
(1717, 'Zapatero', 2103, 21, NULL, NULL),
(1718, 'Alonso De Alvarado', 2103, 21, NULL, NULL),
(1719, 'San Roque De Cumbaza', 2103, 21, NULL, NULL),
(1720, 'Juanjui', 2104, 21, NULL, NULL),
(1721, 'Campanilla', 2104, 21, NULL, NULL),
(1722, 'Huicungo', 2104, 21, NULL, NULL),
(1723, 'Pachiza', 2104, 21, NULL, NULL),
(1724, 'Pajarillo', 2104, 21, NULL, NULL),
(1725, 'Rioja', 2105, 21, NULL, NULL),
(1726, 'Posic', 2105, 21, NULL, NULL),
(1727, 'Yorongos', 2105, 21, NULL, NULL),
(1728, 'Yuracyacu', 2105, 21, NULL, NULL),
(1729, 'Nueva Cajamarca', 2105, 21, NULL, NULL),
(1730, 'Elias Soplin', 2105, 21, NULL, NULL),
(1731, 'San Fernando', 2105, 21, NULL, NULL),
(1732, 'Pardo Miguel', 2105, 21, NULL, NULL),
(1733, 'Awajun', 2105, 21, NULL, NULL),
(1734, 'Tarapoto', 2106, 21, NULL, NULL),
(1735, 'Alberto Leveau', 2106, 21, NULL, NULL),
(1736, 'Cacatachi', 2106, 21, NULL, NULL),
(1737, 'Chazuta', 2106, 21, NULL, NULL),
(1738, 'Chipurana', 2106, 21, NULL, NULL),
(1739, 'El Porvenir', 2106, 21, NULL, NULL),
(1740, 'Huimbayoc', 2106, 21, NULL, NULL),
(1741, 'Juan Guerra', 2106, 21, NULL, NULL),
(1742, 'Morales', 2106, 21, NULL, NULL),
(1743, 'Papaplaya', 2106, 21, NULL, NULL),
(1744, 'San Antonio', 2106, 21, NULL, NULL),
(1745, 'Sauce', 2106, 21, NULL, NULL),
(1746, 'Shapaja', 2106, 21, NULL, NULL),
(1747, 'La Banda De Shilcayo', 2106, 21, NULL, NULL),
(1748, 'Bellavista', 2107, 21, NULL, NULL),
(1749, 'San Rafael', 2107, 21, NULL, NULL),
(1750, 'San Pablo', 2107, 21, NULL, NULL),
(1751, 'Alto Biavo', 2107, 21, NULL, NULL),
(1752, 'Huallaga', 2107, 21, NULL, NULL),
(1753, 'Bajo Biavo', 2107, 21, NULL, NULL),
(1754, 'Tocache', 2108, 21, NULL, NULL),
(1755, 'Nuevo Progreso', 2108, 21, NULL, NULL),
(1756, 'Polvora', 2108, 21, NULL, NULL),
(1757, 'Shunte', 2108, 21, NULL, NULL),
(1758, 'Uchiza', 2108, 21, NULL, NULL),
(1759, 'Picota', 2109, 21, NULL, NULL),
(1760, 'Buenos Aires', 2109, 21, NULL, NULL),
(1761, 'Caspizapa', 2109, 21, NULL, NULL),
(1762, 'Pilluana', 2109, 21, NULL, NULL),
(1763, 'Pucacaca', 2109, 21, NULL, NULL),
(1764, 'San Cristobal', 2109, 21, NULL, NULL),
(1765, 'San Hilarion', 2109, 21, NULL, NULL),
(1766, 'Tingo De Ponasa', 2109, 21, NULL, NULL),
(1767, 'Tres Unidos', 2109, 21, NULL, NULL),
(1768, 'Shamboyacu', 2109, 21, NULL, NULL),
(1769, 'San Jose De Sisa', 2110, 21, NULL, NULL),
(1770, 'Agua Blanca', 2110, 21, NULL, NULL),
(1771, 'Shatoja', 2110, 21, NULL, NULL),
(1772, 'San Martin', 2110, 21, NULL, NULL),
(1773, 'Santa Rosa', 2110, 21, NULL, NULL),
(1774, 'Tacna', 2201, 22, NULL, NULL),
(1775, 'Calana', 2201, 22, NULL, NULL),
(1776, 'Inclan', 2201, 22, NULL, NULL),
(1777, 'Pachia', 2201, 22, NULL, NULL),
(1778, 'Palca', 2201, 22, NULL, NULL),
(1779, 'Pocollay', 2201, 22, NULL, NULL),
(1780, 'Sama', 2201, 22, NULL, NULL),
(1781, 'Alto De La Alianza', 2201, 22, NULL, NULL),
(1782, 'Ciudad Nueva', 2201, 22, NULL, NULL),
(1783, 'Coronel Gregorio Albarracin L.', 2201, 22, NULL, NULL),
(1784, 'Tarata', 2202, 22, NULL, NULL),
(1785, 'Heroes Albarracin', 2202, 22, NULL, NULL),
(1786, 'Estique', 2202, 22, NULL, NULL),
(1787, 'Estique Pampa', 2202, 22, NULL, NULL),
(1788, 'Sitajara', 2202, 22, NULL, NULL),
(1789, 'Susapaya', 2202, 22, NULL, NULL),
(1790, 'Tarucachi', 2202, 22, NULL, NULL),
(1791, 'Ticaco', 2202, 22, NULL, NULL),
(1792, 'Locumba', 2203, 22, NULL, NULL),
(1793, 'Ite', 2203, 22, NULL, NULL),
(1794, 'Ilabaya', 2203, 22, NULL, NULL),
(1795, 'Candarave', 2204, 22, NULL, NULL),
(1796, 'Cairani', 2204, 22, NULL, NULL),
(1797, 'Curibaya', 2204, 22, NULL, NULL),
(1798, 'Huanuara', 2204, 22, NULL, NULL),
(1799, 'Quilahuani', 2204, 22, NULL, NULL),
(1800, 'Camilaca', 2204, 22, NULL, NULL),
(1801, 'Tumbes', 2301, 23, NULL, NULL),
(1802, 'Corrales', 2301, 23, NULL, NULL),
(1803, 'La Cruz', 2301, 23, NULL, NULL),
(1804, 'Pampas De Hospital', 2301, 23, NULL, NULL),
(1805, 'San Jacinto', 2301, 23, NULL, NULL),
(1806, 'San Juan De La Virgen', 2301, 23, NULL, NULL),
(1807, 'Zorritos', 2302, 23, NULL, NULL),
(1808, 'Casitas', 2302, 23, NULL, NULL),
(1809, 'Canoas De Punta Sal', 2302, 23, NULL, NULL),
(1810, 'Zarumilla', 2303, 23, NULL, NULL),
(1811, 'Matapalo', 2303, 23, NULL, NULL),
(1812, 'Papayal', 2303, 23, NULL, NULL),
(1813, 'Aguas Verdes', 2303, 23, NULL, NULL),
(1814, 'Callao', 2401, 24, NULL, NULL),
(1815, 'Bellavista', 2401, 24, NULL, NULL),
(1816, 'La Punta', 2401, 24, NULL, NULL),
(1817, 'Carmen De La Legua-reynoso', 2401, 24, NULL, NULL),
(1818, 'La Perla', 2401, 24, NULL, NULL),
(1819, 'Ventanilla', 2401, 24, NULL, NULL),
(1820, 'Calleria', 2501, 25, NULL, NULL),
(1821, 'Yarinacocha', 2501, 25, NULL, NULL),
(1822, 'Masisea', 2501, 25, NULL, NULL),
(1823, 'Campoverde', 2501, 25, NULL, NULL),
(1824, 'Iparia', 2501, 25, NULL, NULL),
(1825, 'Nueva Requena', 2501, 25, NULL, NULL),
(1826, 'Manantay', 2501, 25, NULL, NULL),
(1827, 'Padre Abad', 2502, 25, NULL, NULL),
(1828, 'Yrazola', 2502, 25, NULL, NULL),
(1829, 'Curimana', 2502, 25, NULL, NULL),
(1830, 'Raimondi', 2503, 25, NULL, NULL),
(1831, 'Tahuania', 2503, 25, NULL, NULL),
(1832, 'Yurua', 2503, 25, NULL, NULL),
(1833, 'Sepahua', 2503, 25, NULL, NULL),
(1834, 'Purus', 2504, 25, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleado`
--

CREATE TABLE `empleado` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nombre_empleado` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `apellidos_pat_empleado` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `apellidos_mat_empleado` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sexo_empleado` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dni_empleado` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `direccion_empleado` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_empleado` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fecha_empleado` date NOT NULL,
  `idTipoDocumento` int(11) NOT NULL,
  `idPerfilUsuario` int(11) NOT NULL,
  `idPais` int(11) NOT NULL,
  `estado` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `empleado`
--

INSERT INTO `empleado` (`id`, `nombre_empleado`, `apellidos_pat_empleado`, `apellidos_mat_empleado`, `sexo_empleado`, `dni_empleado`, `direccion_empleado`, `email_empleado`, `fecha_empleado`, `idTipoDocumento`, `idPerfilUsuario`, `idPais`, `estado`, `created_at`, `updated_at`) VALUES
(1, 'ADMINISTRADOR', 'GNUINO', 'GNUINOs', 'M', '1234567', 'Direccion Gnuino', 'admin@soporte.com', '2021-04-27', 1, 5, 177, 1, '2021-04-25 03:22:01', '2021-04-16 21:46:19'),
(2, 'ERIK', 'BELTRAN', 'GAGO', 'M', '47216977', 'sda', 'sad', '2021-03-29', 3, 3, 177, 1, '2021-04-12 05:04:48', '2021-04-19 01:45:57'),
(3, 'PEPE', 'PEPE', 'PEPE', 'M', '123456789', 'd', 's', '2008-03-12', 3, 3, 55, 1, '2021-04-12 08:04:25', '2021-04-19 01:46:21'),
(4, 'JUAN', 'JUAN', 'JUAN', 'F', '987654321', 'ff', 'dasd', '2021-05-27', 2, 4, 16, 1, '2021-04-12 08:08:25', '2021-04-19 01:46:39'),
(5, 'dasd', 'ggg', 's', 'M', 'dasd', 'sadsad', 'ss', '2021-04-15', 2, 2, 15, 1, '2021-04-12 08:09:47', '2021-04-12 08:09:47'),
(6, 'ANDY', 'TORRES', 'MENDOZA', 'F', '47216978', 'OLIVOS', 'andytorresmendoza@gmail.com', '2021-04-18', 1, 3, 177, 1, '2021-04-19 03:06:38', '2021-04-19 03:06:38');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `entrada_sin_oc`
--

CREATE TABLE `entrada_sin_oc` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `idEmpleado` int(11) NOT NULL,
  `idtipoIngreso` int(11) NOT NULL,
  `idProveedor` int(11) NOT NULL,
  `detalle` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `fechaIngreso` date NOT NULL,
  `totalCosto` decimal(8,2) NOT NULL,
  `estado` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `nroIngresoSinOC` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `codigoIngresoSinOc` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `entrada_sin_oc`
--

INSERT INTO `entrada_sin_oc` (`id`, `idEmpleado`, `idtipoIngreso`, `idProveedor`, `detalle`, `fechaIngreso`, `totalCosto`, `estado`, `created_at`, `updated_at`, `nroIngresoSinOC`, `codigoIngresoSinOc`) VALUES
(6, 6, 2, 2, 'ss', '2021-04-29', '4.00', '1', '2021-04-30 03:52:54', '2021-04-30 03:52:54', '0000000001', 'INSINOC-0000000001');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado_flujo`
--

CREATE TABLE `estado_flujo` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `detalle_estado` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `estado` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `estado_flujo`
--

INSERT INTO `estado_flujo` (`id`, `detalle_estado`, `estado`, `created_at`, `updated_at`) VALUES
(1, 'ACTIVO', 1, '2021-04-04 22:09:42', '2021-04-04 22:20:26'),
(2, 'INACTIVO', 1, '2021-04-08 02:59:14', '2021-04-08 02:59:14'),
(3, 'EN-PROCESO', 1, '2021-04-08 02:59:24', '2021-04-08 02:59:24'),
(4, 'ANULADO', 1, '2021-04-16 16:13:10', '2021-04-16 16:13:10');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ingreso_almacen`
--

CREATE TABLE `ingreso_almacen` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nroIngreso` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `codigoIngreso` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `idOrden` int(11) NOT NULL,
  `idCotizacion` int(11) NOT NULL,
  `idTipoIngreso` int(11) NOT NULL,
  `estado` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `ingreso_almacen`
--

INSERT INTO `ingreso_almacen` (`id`, `nroIngreso`, `codigoIngreso`, `idOrden`, `idCotizacion`, `idTipoIngreso`, `estado`, `created_at`, `updated_at`) VALUES
(8, '0000000001', 'ING-0000000001', 26, 45, 1, '1', '2021-04-29 20:07:48', '2021-04-29 20:07:48'),
(9, '0000000002', 'ING-0000000002', 25, 46, 1, '1', '2021-04-29 20:23:01', '2021-04-29 20:23:01'),
(12, '0000000003', 'ING-0000000003', 27, 47, 1, '1', '2021-04-29 20:31:00', '2021-04-29 20:31:00'),
(13, '0000000004', 'ING-0000000004', 25, 46, 1, '1', '2021-04-30 03:32:09', '2021-04-30 03:32:09');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ingreso_almacen_sede_almacen`
--

CREATE TABLE `ingreso_almacen_sede_almacen` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `idProducto` int(11) NOT NULL,
  `cantidadGlobal` int(11) NOT NULL,
  `idIngresoAlmacen` int(11) NOT NULL,
  `idDetalleCotizacion` int(11) NOT NULL,
  `idSedePrincipal` int(11) NOT NULL,
  `idSedeSecundaria` int(11) NOT NULL,
  `cantidadPrincipal` int(11) NOT NULL,
  `cantidaSecundaria` int(11) NOT NULL,
  `cantidadDevuelta` int(11) NOT NULL,
  `estadoflujo` int(11) NOT NULL,
  `estado` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `ingreso_almacen_sede_almacen`
--

INSERT INTO `ingreso_almacen_sede_almacen` (`id`, `idProducto`, `cantidadGlobal`, `idIngresoAlmacen`, `idDetalleCotizacion`, `idSedePrincipal`, `idSedeSecundaria`, `cantidadPrincipal`, `cantidaSecundaria`, `cantidadDevuelta`, `estadoflujo`, `estado`, `created_at`, `updated_at`) VALUES
(8, 4, 4, 8, 71, 5, 2, 2, 2, 0, 2, '1', '2021-04-29 20:07:48', '2021-04-29 20:07:48'),
(9, 6, 4, 8, 72, 5, 2, 2, 2, 0, 2, '1', '2021-04-29 20:07:48', '2021-04-29 20:20:24'),
(10, 6, 4, 9, 73, 1, 4, 3, 1, 0, 2, '1', '2021-04-29 20:23:01', '2021-04-29 20:23:01'),
(11, 7, 7, 9, 74, 5, 4, 5, 1, 0, 1, '1', '2021-04-29 20:23:01', '2021-04-29 20:23:01'),
(14, 5, 5, 12, 75, 1, 0, 5, 0, 0, 2, '1', '2021-04-29 20:31:00', '2021-04-29 20:31:17'),
(15, 6, 4, 13, 73, 1, 2, 3, 1, 0, 2, '1', '2021-04-30 03:32:09', '2021-04-30 03:32:09'),
(16, 7, 7, 13, 74, 5, 2, 4, 3, 0, 2, '1', '2021-04-30 03:32:09', '2021-04-30 03:32:09');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2020_12_10_033650_create_users_table', 1),
(2, '2021_03_16_204254_create_unidad_medida_table', 1),
(3, '2021_03_16_205326_create_modelo_table', 1),
(4, '2021_03_26_161433_create_categoria_table', 1),
(5, '2021_03_26_161632_create_tipo_documento_table', 1),
(6, '2021_03_26_161724_create_estado_flujo_table', 1),
(7, '2021_03_26_161846_create_perfil_usuario_table', 1),
(8, '2021_03_26_161943_create_tipo_pago_table', 1),
(9, '2021_03_26_162146_create_tipo_ingreso_table', 1),
(10, '2021_03_26_162259_create_nro_cuenta_table', 1),
(11, '2021_03_26_162336_create_tipo_salida_table', 1),
(12, '2021_03_26_162412_create_tipo_devolucion_table', 1),
(13, '2021_03_26_162510_create_banco_table', 1),
(14, '2021_03_26_162845_create_pais_table', 1),
(15, '2021_03_26_163036_create_departamento_table', 1),
(16, '2021_03_26_163124_create_provincia_table', 1),
(17, '2021_03_26_163233_create_distrito_table', 1),
(18, '2021_03_26_163355_create_proovedor_table', 1),
(19, '2021_03_26_163701_create_producto_table', 1),
(20, '2021_03_26_163837_create_empleado_table', 1),
(21, '2021_03_26_164406_create_sede_almacen_table', 1),
(22, '2021_04_07_233509_create_cotizacion_table', 2),
(23, '2021_04_07_234924_create_cotizacion_detalle_table', 2),
(24, '2021_04_08_005131_add_codigo_producto_to_producto', 2),
(25, '2021_04_08_015016_add_codigo_producto_num_to_producto', 2),
(26, '2021_04_08_015928_add_codigo_cotizacion_num_to_cotizacion', 2),
(27, '2021_04_08_020549_add_fecha_entrega_to_cotizacion', 2),
(28, '2021_04_08_050502_add_observaciones_to_cotizacion_detalle_table', 3),
(29, '2021_04_16_035805_create_orden_compra_table', 4),
(30, '2021_04_25_160636_create_ingreso_almacen_table', 5),
(31, '2021_04_25_161418_create_ingreso_almacen_sede_almacen_table', 5),
(32, '2021_04_25_163207_add_id_orden_to_ingreso_almacen_table', 5),
(33, '2021_04_25_215920_add_estadoflujo_to_ingreso_almacen_sede_almacen_table', 6),
(34, '2021_04_27_065224_create_ingreso_almacen_table', 7),
(35, '2021_04_27_065311_create_ingreso_almacen_sede_almacen_table', 7),
(36, '2021_04_27_070231_add_tipo_almacen_to_sede_almacen', 7),
(37, '2021_04_28_044501_create_ingreso_almacen_table', 8),
(38, '2021_04_28_044601_create_ingreso_almacen_sede_almacen_table', 8),
(39, '2021_04_29_035249_create_entrada_sin_oc_table', 9),
(40, '2021_04_29_035304_create_detalle_entrada_sin_oc_table', 9),
(41, '2021_04_29_042236_add_codigo_sin_ingreso_to_entrada_sin_oc__table', 9),
(42, '2021_04_29_044457_add_estado_flujo_to_detalle_entrada_sin_oc__table', 10);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `modelo`
--

CREATE TABLE `modelo` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nombre_modelo` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `estado` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `modelo`
--

INSERT INTO `modelo` (`id`, `nombre_modelo`, `estado`, `created_at`, `updated_at`) VALUES
(1, 'MODELO', 1, '2021-04-04 20:42:12', '2021-04-20 17:54:07'),
(2, 'MODELO 2', 1, '2021-04-04 20:45:38', '2021-04-07 20:43:45'),
(3, 'LEBI', 1, '2021-04-08 02:54:31', '2021-04-08 02:54:31'),
(4, 'GNUINO', 1, '2021-04-20 17:54:23', '2021-04-20 19:10:28');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nro_cuenta`
--

CREATE TABLE `nro_cuenta` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `descripcion_cuenta` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `estado` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `nro_cuenta`
--

INSERT INTO `nro_cuenta` (`id`, `descripcion_cuenta`, `estado`, `created_at`, `updated_at`) VALUES
(29, '12345', 1, '2021-04-09 03:53:52', '2021-04-09 03:53:52'),
(30, '67890', 1, '2021-04-09 04:02:16', '2021-04-17 21:57:18'),
(31, '011-6589-5555', 1, '2021-04-17 21:57:30', '2021-04-17 21:57:30');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orden`
--

CREATE TABLE `orden` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nroOrden` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `codigo_orden_num` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `idProovedor` int(11) NOT NULL,
  `idEmpleado` int(11) NOT NULL,
  `idCotizacion` int(11) NOT NULL,
  `idEstadoFlujo` int(11) NOT NULL,
  `fechaEntrega` date NOT NULL,
  `idBanco` int(11) NOT NULL,
  `idTipoPago` int(11) NOT NULL,
  `idNroCuenta` int(11) NOT NULL,
  `estado` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `orden`
--

INSERT INTO `orden` (`id`, `nroOrden`, `codigo_orden_num`, `idProovedor`, `idEmpleado`, `idCotizacion`, `idEstadoFlujo`, `fechaEntrega`, `idBanco`, `idTipoPago`, `idNroCuenta`, `estado`, `created_at`, `updated_at`) VALUES
(25, '0000000001', 'ORD-0000000001', 4, 2, 46, 2, '2021-04-29', 19, 1, 31, '1', '2021-04-29 20:06:07', '2021-04-30 03:32:09'),
(26, '0000000002', 'ORD-0000000002', 2, 1, 45, 2, '2021-04-29', 19, 1, 31, '1', '2021-04-29 20:06:51', '2021-04-29 20:20:24'),
(27, '0000000003', 'ORD-0000000003', 1, 3, 47, 2, '2021-04-29', 16, 1, 29, '1', '2021-04-29 20:25:10', '2021-04-29 20:31:17');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pais`
--

CREATE TABLE `pais` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nombre_pais` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `alfa2` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `alfa3` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `estado` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `pais`
--

INSERT INTO `pais` (`id`, `nombre_pais`, `alfa2`, `alfa3`, `estado`, `created_at`, `updated_at`) VALUES
(1, 'AFGANISTAN', 'AF', 'AFG', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(2, 'ISLAS ALAND', 'AX', 'ALA', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(3, 'ALBANIA', 'AL', 'ALB', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(4, 'ALEMANIA', 'DE', 'DEU', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(5, 'ANDORRA', 'AD', 'AND', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(6, 'ANGOLA', 'AO', 'AGO', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(7, 'ANGUILA', 'AI', 'AIA', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(8, 'ANTARTIDA', 'AQ', 'ATA', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(9, 'ANTIGUA Y BARBUDA', 'AG', 'ATG', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(10, 'ARABIA SAUDITA', 'SA', 'SAU', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(11, 'ARGELIA', 'DZ', 'DZA', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(12, 'ARGENTINA', 'AR', 'ARG', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(13, 'ARMENIA', 'AM', 'ARM', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(14, 'ARUBA', 'AW', 'ABW', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(15, 'AUSTRALIA', 'AU', 'AUS', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(16, 'AUSTRIA', 'AT', 'AUT', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(17, 'AZERBAIYAN', 'AZ', 'AZE', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(18, 'BAHAMAS', 'BS', 'BHS', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(19, 'BANGLADES', 'BD', 'BGD', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(20, 'BARBADOS', 'BB', 'BRB', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(21, 'BAREIN', 'BH', 'BHR', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(22, 'BELGICA', 'BE', 'BEL', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(23, 'BELICE', 'BZ', 'BLZ', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(24, 'BENIN', 'BJ', 'BEN', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(25, 'BERMUDAS', 'BM', 'BMU', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(26, 'BIELORRUSIA', 'BY', 'BLR', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(27, 'MYANMAR', 'MM', 'MMR', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(28, 'BOLIVIA, ESTADO PLURINACIONAL DE', 'BO', 'BOL', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(29, 'BOSNIA Y HERZEGOVINA', 'BA', 'BIH', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(30, 'BOTSUANA', 'BW', 'BWA', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(31, 'BRASIL', 'BR', 'BRA', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(32, 'BRUNEI DARUSSALAM', 'BN', 'BRN', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(33, 'BULGARIA', 'BG', 'BGR', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(34, 'BURKINA FASO', 'BF', 'BFA', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(35, 'BURUNDI', 'BI', 'BDI', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(36, 'BUTAN', 'BT', 'BTN', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(37, 'CABO VERDE', 'CV', 'CPV', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(38, 'CAMBOYA', 'KH', 'KHM', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(39, 'CAMERUN', 'CM', 'CMR', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(40, 'CANADA', 'CA', 'CAN', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(41, 'QATAR', 'QA', 'QAT', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(42, 'BONAIRE, SAN EUSTAQUIO Y SABA', 'BQ', 'BES', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(43, 'CHAD', 'TD', 'TCD', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(44, 'CHILE', 'CL', 'CHL', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(45, 'CHINA, REPUBLICA POPULAR', 'CN', 'CHN', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(46, 'CHIPRE', 'CY', 'CYP', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(47, 'COLOMBIA', 'CO', 'COL', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(48, 'COMORAS', 'KM', 'COM', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(49, 'COREA, REPUBLICA DEMOCRATICA POPULAR DE', 'KP', 'PRK', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(50, 'COREA, REPUBLICA DE', 'KR', 'KOR', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(51, 'COSTA DE MARFIL', 'CI', 'CIV', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(52, 'COSTA RICA', 'CR', 'CRI', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(53, 'CROACIA', 'HR', 'HRV', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(54, 'CUBA', 'CU', 'CUB', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(55, 'CURAZAO', 'CW', 'CUW', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(56, 'DINAMARCA', 'DK', 'DNK', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(57, 'DOMINICA', 'DM', 'DMA', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(58, 'ECUADOR', 'EC', 'ECU', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(59, 'EGIPTO', 'EG', 'EGY', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(60, 'EL SALVADOR', 'SV', 'SLV', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(61, 'EMIRATOS ARABES UNIDOS', 'AE', 'ARE', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(62, 'ERITREA', 'ER', 'ERI', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(63, 'ESLOVAQUIA', 'SK', 'SVK', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(64, 'ESLOVENIA', 'SI', 'SVN', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(65, 'ESPAÑA', 'ES', 'ESP', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(66, 'ESTADOS UNIDOS', 'US', 'USA', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(67, 'ESTONIA', 'EE', 'EST', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(68, 'ETIOPIA', 'ET', 'ETH', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(69, 'FILIPINAS', 'PH', 'PHL', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(70, 'FINLANDIA', 'FI', 'FIN', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(71, 'FIYI', 'FJ', 'FJI', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(72, 'FRANCIA', 'FR', 'FRA', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(73, 'GABON', 'GA', 'GAB', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(74, 'GAMBIA', 'GM', 'GMB', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(75, 'GEORGIA', 'GE', 'GEO', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(76, 'GHANA', 'GH', 'GHA', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(77, 'GIBRALTAR', 'GI', 'GIB', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(78, 'GRANADA', 'GD', 'GRD', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(79, 'GRECIA', 'GR', 'GRC', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(80, 'GROENLANDIA', 'GL', 'GRL', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(81, 'GUADALUPE', 'GP', 'GLP', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(82, 'GUAM', 'GU', 'GUM', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(83, 'GUATEMALA', 'GT', 'GTM', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(84, 'GUAYANA FRANCESA', 'GF', 'GUF', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(85, 'GUERNSEY', 'GG', 'GGY', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(86, 'GUINEA', 'GN', 'GIN', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(87, 'GUINEA-BISAU', 'GW', 'GNB', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(88, 'GUINEA ECUATORIAL', 'GQ', 'GNQ', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(89, 'GUYANA', 'GY', 'GUY', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(90, 'HAITI', 'HT', 'HTI', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(91, 'HONDURAS', 'HN', 'HND', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(92, 'HONG KONG', 'HK', 'HKG', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(93, 'HUNGRIA', 'HU', 'HUN', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(94, 'INDIA', 'IN', 'IND', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(95, 'INDONESIA', 'ID', 'IDN', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(96, 'IRAK', 'IQ', 'IRQ', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(97, 'IRAN, REPUBLICA ISLAMICA DE', 'IR', 'IRN', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(98, 'IRLANDA', 'IE', 'IRL', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(99, 'ISLA BOUVET', 'BV', 'BVT', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(100, 'ISLA DE MAN', 'IM', 'IMN', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(101, 'ISLA DE NAVIDAD', 'CX', 'CXR', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(102, 'ISLA NORFOLK', 'NF', 'NFK', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(103, 'ISLANDIA', 'IS', 'ISL', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(104, 'ISLAS CAIMAN', 'KY', 'CYM', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(105, 'ISLAS COCOS (KEELING)', 'CC', 'CCK', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(106, 'ISLAS COOK', 'CK', 'COK', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(107, 'ISLAS FEROE', 'FO', 'FRO', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(108, 'ISLAS GEORGIAS DEL SUR Y SANDWICH DEL SUR', 'GS', 'SGS', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(109, 'ISLAS HEARD Y MCDONALD', 'HM', 'HMD', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(110, 'ISLAS FALKLAND (MALVINAS)', 'FK', 'FLK', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(111, 'ISLAS MARIANAS DEL NORTE', 'MP', 'MNP', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(112, 'ISLAS MARSHALL', 'MH', 'MHL', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(113, 'PITCAIRN', 'PN', 'PCN', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(114, 'ISLAS SALOMON', 'SB', 'SLB', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(115, 'ISLAS TURCAS Y CAICOS', 'TC', 'TCA', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(116, 'ISLAS ULTRAMARINAS MENORES DE ESTADOS UNIDOS', 'UM', 'UMI', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(117, 'ISLAS VIRGENES BRITANICAS', 'VG', 'VGB', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(118, 'ISLAS VIRGENES DE LOS ESTADOS UNIDOS', 'VI', 'VIR', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(119, 'ISRAEL', 'IL', 'ISR', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(120, 'ITALIA', 'IT', 'ITA', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(121, 'JAMAICA', 'JM', 'JAM', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(122, 'JAPON', 'JP', 'JPN', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(123, 'JERSEY', 'JE', 'JEY', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(124, 'JORDANIA', 'JO', 'JOR', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(125, 'KAZAJISTAN', 'KZ', 'KAZ', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(126, 'KENIA', 'KE', 'KEN', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(127, 'KIRGUISTAN', 'KG', 'KGZ', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(128, 'KIRIBATI', 'KI', 'KIR', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(129, 'KUWAIT', 'KW', 'KWT', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(130, 'REPUBLICA DEMOCRATICA POPULAR LAO', 'LA', 'LAO', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(131, 'LESOTO', 'LS', 'LSO', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(132, 'LETONIA', 'LV', 'LVA', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(133, 'LIBANO', 'LB', 'LBN', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(134, 'LIBERIA', 'LR', 'LBR', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(135, 'LIBIA', 'LY', 'LBY', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(136, 'LIECHTENSTEIN', 'LI', 'LIE', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(137, 'LITUANIA', 'LT', 'LTU', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(138, 'LUXEMBURGO', 'LU', 'LUX', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(139, 'MACAO', 'MO', 'MAC', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(140, 'MADAGASCAR', 'MG', 'MDG', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(141, 'MALASIA', 'MY', 'MYS', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(142, 'MALAUI', 'MW', 'MWI', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(143, 'MALDIVAS', 'MV', 'MDV', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(144, 'MALI', 'ML', 'MLI', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(145, 'MALTA', 'MT', 'MLT', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(146, 'MARRUECOS', 'MA', 'MAR', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(147, 'MARTINICA', 'MQ', 'MTQ', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(148, 'MAURICIO', 'MU', 'MUS', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(149, 'MAURITANIA', 'MR', 'MRT', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(150, 'MAYOTTE', 'YT', 'MYT', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(151, 'MEXICO', 'MX', 'MEX', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(152, 'MICRONESIA, ESTADOS FEDERADOS DE', 'FM', 'FSM', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(153, 'MOLDAVIA, REPUBLICA DE', 'MD', 'MDA', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(154, 'MONACO', 'MC', 'MCO', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(155, 'MONGOLIA', 'MN', 'MNG', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(156, 'MONTENEGRO', 'ME', 'MNE', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(157, 'MONTSERRAT', 'MS', 'MSR', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(158, 'MOZAMBIQUE', 'MZ', 'MOZ', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(159, 'NABIMIA', 'NA', 'NAM', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(160, 'NAURU', 'NR', 'NRU', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(161, 'NEPAL', 'NP', 'NPL', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(162, 'NICARAGUA', 'NI', 'NIC', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(163, 'NIGER', 'NE', 'NER', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(164, 'NIGERIA', 'NG', 'NGA', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(165, 'NIUE', 'NU', 'NIU', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(166, 'NORUEGA', 'NO', 'NOR', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(167, 'NUEVA CALEDONIA', 'NC', 'NCL', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(168, 'NUEVA ZELANDA', 'NZ', 'NZL', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(169, 'OMAN', 'OM', 'OMN', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(170, 'PAISES BAJOS', 'NL', 'NLD', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(171, 'PAKISTAN', 'PK', 'PAK', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(172, 'PALAOS', 'PW', 'PLW', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(173, 'PALESTINA, ESTADO DE', 'PS', 'PSE', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(174, 'PANAMA', 'PA', 'PAN', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(175, 'PAPUA NUEVA GUINEA', 'PG', 'PNG', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(176, 'PARAGUAY', 'PY', 'PRY', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(177, 'PERU', 'PE', 'PER', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(178, 'POLINESIA FRANCESA', 'PF', 'PYF', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(179, 'POLONIA', 'PL', 'POL', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(180, 'PORTUGAL', 'PT', 'PRT', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(181, 'PUERTO RICO', 'PR', 'PRI', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(182, 'REINO UNIDO', 'GB', 'GBR', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(183, 'REPUBLICA CENTROAFRICANA', 'CF', 'CAF', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(184, 'REPUBLICA CHECA', 'CZ', 'CZE', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(185, 'MACEDONIA, LA ANTIGUA REPUBLICA YUGOSLAVA DE', 'MK', 'MKD', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(186, 'CONGO', 'CG', 'COG', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(187, 'CONGO, LA REPUBLICA DEMOCRATICA DEL', 'CD', 'COD', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(188, 'REPUBLICA DOMINICANA', 'DO', 'DOM', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(189, 'REUNION', 'RE', 'REU', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(190, 'RUANDA', 'RW', 'RWA', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(191, 'RUMANIA', 'RO', 'ROU', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(192, 'FEDERACION RUSA', 'RU', 'RUS', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(193, 'SAHARA OCCIDENTAL', 'EH', 'ESH', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(194, 'SAMOA', 'WS', 'WSM', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(195, 'SAMOA AMERICANA', 'AS', 'ASM', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(196, 'SAN BARTOLOME', 'BL', 'BLM', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(197, 'SAN CRISTOBAL Y NIEVES', 'KN', 'KNA', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(198, 'SAN MARINO', 'SM', 'SMR', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(199, 'SAN MARTIN (PARTE FRANCESA)', 'MF', 'MAF', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(200, 'SAN PEDRO Y MIQUELON', 'PM', 'SPM', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(201, 'SAN VICENTE Y LAS GRANADINAS', 'VC', 'VCT', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(202, 'SANTA HELENA, ASCENSION Y TRISTAN DE ACUÑA', 'SH', 'SHN', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(203, 'SANTA LUCIA', 'LC', 'LCA', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(204, 'SANTO TOME Y PRINCIPE', 'ST', 'STP', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(205, 'SENEGAL', 'SN', 'SEN', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(206, 'SERBIA', 'RS', 'SRB', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(207, 'SEYCHELLES', 'SC', 'SYC', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(208, 'SIERRA LEONA', 'SL', 'SLE', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(209, 'SINGAPUR', 'SG', 'SGP', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(210, 'SINT MAARTEN (PARTE NEERLANDESA)', 'SX', 'SXM', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(211, 'REPUBLICA ARABE DE SIRIA', 'SY', 'SYR', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(212, 'SOMALIA', 'SO', 'SOM', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(213, 'SRI LANKA', 'LK', 'LKA', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(214, 'SUAZILANDIA', 'SZ', 'SWZ', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(215, 'SUDAFRICA', 'ZA', 'ZAF', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(216, 'SUDAN', 'SD', 'SDN', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(217, 'SUDAN DEL SUR', 'SS', 'SSD', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(218, 'SUECIA', 'SE', 'SWE', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(219, 'SUIZA', 'CH', 'CHE', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(220, 'SURINAM', 'SR', 'SUR', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(221, 'SVALBARD Y JAN MAYEN', 'SJ', 'SJM', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(222, 'TAILANDIA', 'TH', 'THA', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(223, 'TAIWAN, PROVINCIA DE CHINA', 'TW', 'TWN', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(224, 'TANZANIA, REPUBLICA UNIDA DE', 'TZ', 'TZA', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(225, 'TAYIKISTAN', 'TJ', 'TJK', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(226, 'TERRITORIO BRITANICO DEL OCEANO INDICO', 'IO', 'IOT', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(227, 'TERRITORIOS AUSTRALES FRANCESES', 'TF', 'ATF', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(228, 'TIMOR-LESTE', 'TL', 'TLS', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(229, 'TOGO', 'TG', 'TGO', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(230, 'TOKELAU', 'TK', 'TKL', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(231, 'TONGA', 'TO', 'TON', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(232, 'TRINIDAD Y TOBAGO', 'TT', 'TTO', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(233, 'TUNEZ', 'TN', 'TUN', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(234, 'TURKMENISTAN', 'TM', 'TKM', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(235, 'TURQUIA', 'TR', 'TUR', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(236, 'TUVALU', 'TV', 'TUV', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(237, 'UCRANIA', 'UA', 'UKR', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(238, 'UGANDA', 'UG', 'UGA', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(239, 'URUGUAY', 'UY', 'URY', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(240, 'UZBEKISTAN', 'UZ', 'UZB', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(241, 'VANUATU', 'VU', 'VUT', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(242, 'SANTA SEDE (CIUDAD ESTADO VATICAVO)', 'VA', 'VAT', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(243, 'VENEZUELA, REPUBLICA BOLIVARIANA DE', 'VE', 'VEN', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(244, 'VIET NAM', 'VN', 'VNM', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(245, 'WALLIS Y FUTUNA', 'WF', 'WLF', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(246, 'YEMEN', 'YE', 'YEM', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(247, 'YIBUTI', 'DJ', 'DJI', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(248, 'ZAMBIA', 'ZM', 'ZMB', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00'),
(249, 'ZIMBABUE', 'ZW', 'ZWE', 1, '2018-10-12 15:00:00', '2018-10-12 15:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `perfil_usuario`
--

CREATE TABLE `perfil_usuario` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tipo_usuario` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `estado` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `perfil_usuario`
--

INSERT INTO `perfil_usuario` (`id`, `tipo_usuario`, `estado`, `created_at`, `updated_at`) VALUES
(2, 'ALMACEN', 1, '2021-04-25 03:22:01', '2021-04-04 21:12:18'),
(3, 'VENDEDOR', 1, '2021-04-25 03:22:01', '2021-04-25 03:22:01'),
(4, 'GERENCIA', 1, '2021-04-25 03:22:01', '2021-04-25 03:22:01'),
(5, 'ADMINISTRADOR', 1, '2021-04-25 03:22:01', '2021-04-25 03:22:01'),
(6, 'MOTORIZADO', 0, '2021-04-04 21:09:00', '2021-04-05 02:26:19'),
(7, 'MANTENIMIENTO', 0, '2021-04-08 02:35:38', '2021-04-08 02:35:48');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nombre_producto` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idCategoria` int(11) NOT NULL,
  `idModelo` int(11) NOT NULL,
  `idUnidadMedida` int(11) NOT NULL,
  `estado` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `codigo_producto` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `codigo_producto_num` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id`, `nombre_producto`, `idCategoria`, `idModelo`, `idUnidadMedida`, `estado`, `created_at`, `updated_at`, `codigo_producto`, `codigo_producto_num`) VALUES
(4, 'BILLETERA', 18, 1, 1, 1, '2021-04-10 22:35:44', '2021-04-19 01:44:09', '0000000001', 'PRO-0000000001'),
(5, 'CARTERA', 19, 1, 1, 1, '2021-04-10 22:37:04', '2021-04-19 01:44:19', '0000000002', 'PRO-0000000002'),
(6, 'PULSERA', 19, 2, 1, 1, '2021-04-10 22:41:36', '2021-04-19 01:44:28', '0000000003', 'PRO-0000000003'),
(7, 'PULSERA 2', 18, 1, 1, 1, '2021-04-19 03:09:48', '2021-04-19 03:09:48', '0000000004', 'PRO-0000000004');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proovedor`
--

CREATE TABLE `proovedor` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nombre_proovedor` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ruc_proovedor` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telefono_proovedor` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `direccion_proovedor` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_proovedor` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idPais` int(11) NOT NULL,
  `idProvincia` int(11) NOT NULL,
  `idDistrito` int(11) NOT NULL,
  `idDepartamento` int(11) NOT NULL,
  `estado` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `proovedor`
--

INSERT INTO `proovedor` (`id`, `nombre_proovedor`, `ruc_proovedor`, `telefono_proovedor`, `direccion_proovedor`, `email_proovedor`, `idPais`, `idProvincia`, `idDistrito`, `idDepartamento`, `estado`, `created_at`, `updated_at`) VALUES
(1, 'G & Ma', '104721697896b', '996363259c', 'OLIVOSd', 'gym@gmail.comf', 12, 608, 624, 6, 1, NULL, '2021-04-10 21:46:14'),
(2, 'ALEXANDER S.A.C', 'bbb', 'cccc', 'd', 'kkk', 15, 1503, 1437, 15, 1, '2021-04-10 16:24:00', '2021-04-19 01:47:37'),
(3, 'ANDY', '1057312929', '883993883', 'AREVALO', 'ANDYTORR', 177, 1204, 1149, 12, 1, '2021-04-10 16:25:04', '2021-04-19 01:47:43'),
(4, 'GRAÑA MONTERO', '4024455555', '2651854855', 'LIMA CENTRO 222', '', 177, 1401, 1246, 14, 1, '2021-04-19 03:08:34', '2021-04-19 03:08:34');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `provincia`
--

CREATE TABLE `provincia` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nombre_provincia` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idDepartamento` int(11) NOT NULL,
  `estado` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `provincia`
--

INSERT INTO `provincia` (`id`, `nombre_provincia`, `idDepartamento`, `estado`, `created_at`, `updated_at`) VALUES
(101, 'Chachapoyas', 1, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(102, 'Bagua', 1, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(103, 'Bongara', 1, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(104, 'Luya', 1, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(105, 'Rodriguez De Mendoza', 1, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(106, 'Condorcanqui', 1, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(107, 'Utcubamba', 1, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(201, 'Huaraz', 2, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(202, 'Aija', 2, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(203, 'Bolognesi', 2, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(204, 'Carhuaz', 2, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(205, 'Casma', 2, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(206, 'Corongo', 2, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(207, 'Huaylas', 2, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(208, 'Huari', 2, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(209, 'Mariscal Luzuriaga', 2, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(210, 'Pallasca', 2, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(211, 'Pomabamba', 2, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(212, 'Recuay', 2, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(213, 'Santa', 2, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(214, 'Sihuas', 2, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(215, 'Yungay', 2, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(216, 'Antonio Raimondi', 2, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(217, 'Carlos Fermin Fitzcarrald', 2, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(218, 'Asuncion', 2, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(219, 'Huarmey', 2, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(220, 'Ocros', 2, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(301, 'Abancay', 3, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(302, 'Aymaraes', 3, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(303, 'Andahuaylas', 3, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(304, 'Antabamba', 3, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(305, 'Cotabambas', 3, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(306, 'Grau', 3, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(307, 'Chincheros', 3, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(401, 'Arequipa', 4, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(402, 'Caylloma', 4, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(403, 'Camana', 4, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(404, 'Caraveli', 4, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(405, 'Castilla', 4, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(406, 'Condesuyos', 4, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(407, 'Islay', 4, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(408, 'La Union', 4, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(501, 'Huamanga', 5, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(502, 'Cangallo', 5, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(503, 'Huanta', 5, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(504, 'La Mar', 5, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(505, 'Lucanas', 5, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(506, 'Parinacochas', 5, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(507, 'Victor Fajardo', 5, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(508, 'Huanca Sancos', 5, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(509, 'Vilcas Huaman', 5, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(510, 'Paucar Del Sara Sara', 5, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(511, 'Sucre', 5, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(601, 'Cajamarca', 6, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(602, 'Cajabamba', 6, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(603, 'Celendin', 6, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(604, 'Contumaza', 6, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(605, 'Cutervo', 6, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(606, 'Chota', 6, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(607, 'Hualgayoc', 6, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(608, 'Jaen', 6, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(609, 'Santa Cruz', 6, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(610, 'San Miguel', 6, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(611, 'San Ignacio', 6, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(612, 'San Marcos', 6, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(613, 'San Pablo', 6, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(701, 'Cusco', 7, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(702, 'Acomayo', 7, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(703, 'Anta', 7, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(704, 'Calca', 7, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(705, 'Canas', 7, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(706, 'Canchis', 7, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(707, 'Chumbivilcas', 7, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(708, 'Espinar', 7, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(709, 'La Convencion', 7, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(710, 'Paruro', 7, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(711, 'Paucartambo', 7, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(712, 'Quispicanchi', 7, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(713, 'Urubamba', 7, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(801, 'Huancavelica', 8, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(802, 'Acobamba', 8, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(803, 'Angaraes', 8, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(804, 'Castrovirreyna', 8, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(805, 'Tayacaja', 8, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(806, 'Huaytara', 8, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(807, 'Churcampa', 8, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(901, 'Huanuco', 9, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(902, 'Ambo', 9, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(903, 'Dos De Mayo', 9, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(904, 'Huamalies', 9, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(905, 'Marañon', 9, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(906, 'Leoncio Prado', 9, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(907, 'Pachitea', 9, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(908, 'Puerto Inca', 9, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(909, 'Huacaybamba', 9, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(910, 'Lauricocha', 9, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(911, 'Yarowilca', 9, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1001, 'Ica', 10, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1002, 'Chincha', 10, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1003, 'Nazca', 10, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1004, 'Pisco', 10, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1005, 'Palpa', 10, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1101, 'Huancayo', 11, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1102, 'Concepcion', 11, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1103, 'Jauja', 11, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1104, 'Junin', 11, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1105, 'Tarma', 11, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1106, 'Yauli', 11, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1107, 'Satipo', 11, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1108, 'Chanchamayo', 11, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1109, 'Chupaca', 11, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1201, 'Trujillo', 12, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1202, 'Bolivar', 12, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1203, 'Sanchez Carrion', 12, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1204, 'Otuzco', 12, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1205, 'Pacasmayo', 12, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1206, 'Pataz', 12, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1207, 'Santiago De Chuco', 12, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1208, 'Ascope', 12, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1209, 'Chepen', 12, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1210, 'Julcan', 12, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1211, 'Gran Chimu', 12, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1212, 'Viru', 12, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1301, 'Chiclayo', 13, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1302, 'Ferreñafe', 13, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1303, 'Lambayeque', 13, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1401, 'Lima', 14, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1402, 'Cajatambo', 14, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1403, 'Canta', 14, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1404, 'Cañete', 14, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1405, 'Huaura', 14, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1406, 'Huarochiri', 14, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1407, 'Yauyos', 14, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1408, 'Huaral', 14, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1409, 'Barranca', 14, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1410, 'Oyon', 14, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1501, 'Maynas', 15, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1502, 'Alto Amazonas', 15, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1503, 'Loreto', 15, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1504, 'Requena', 15, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1505, 'Ucayali', 15, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1506, 'Mariscal Ramon Castilla', 15, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1507, 'Datem Del Marañon', 15, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1601, 'Tambopata', 16, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1602, 'Manu', 16, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1603, 'Tahuamanu', 16, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1701, 'Mariscal Nieto', 17, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1702, 'General Sanchez Cerro', 17, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1703, 'Ilo', 17, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1801, 'Pasco', 18, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1802, 'Daniel Alcides Carrion', 18, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1803, 'Oxapampa', 18, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1901, 'Piura', 19, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1902, 'Ayabaca', 19, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1903, 'Huancabamba', 19, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1904, 'Morropon', 19, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1905, 'Paita', 19, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1906, 'Sullana', 19, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1907, 'Talara', 19, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(1908, 'Sechura', 19, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(2001, 'Puno', 20, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(2002, 'Azangaro', 20, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(2003, 'Carabaya', 20, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(2004, 'Chucuito', 20, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(2005, 'Huancane', 20, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(2006, 'Lampa', 20, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(2007, 'Melgar', 20, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(2008, 'Sandia', 20, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(2009, 'San Roman', 20, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(2010, 'Yunguyo', 20, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(2011, 'San Antonio De Putina', 20, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(2012, 'El Collao', 20, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(2013, 'Moho', 20, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(2101, 'Moyobamba', 21, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(2102, 'Huallaga', 21, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(2103, 'Lamas', 21, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(2104, 'Mariscal Caceres', 21, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(2105, 'Rioja', 21, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(2106, 'San Martin', 21, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(2107, 'Bellavista', 21, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(2108, 'Tocache', 21, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(2109, 'Picota', 21, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(2110, 'El Dorado', 21, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(2201, 'Tacna', 22, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(2202, 'Tarata', 22, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(2203, 'Jorge Basadre', 22, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(2204, 'Candarave', 22, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(2301, 'Tumbes', 23, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(2302, 'Contralmirante Villar', 23, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(2303, 'Zarumilla', 23, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(2401, 'Callao', 24, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(2501, 'Coronel Portillo', 25, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(2502, 'Padre Abad', 25, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(2503, 'Atalaya', 25, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01'),
(2504, 'Purus', 25, 1, '2018-04-25 03:22:01', '2018-04-25 03:22:01');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sede_almacen`
--

CREATE TABLE `sede_almacen` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nombre_alamcen` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cod_alamcen` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `direccion_almacen` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idPais` int(11) NOT NULL,
  `idDepartamento` int(11) NOT NULL,
  `idProvincia` int(11) NOT NULL,
  `idDistrito` int(11) NOT NULL,
  `estado` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `tipoAlmacen` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `sede_almacen`
--

INSERT INTO `sede_almacen` (`id`, `nombre_alamcen`, `cod_alamcen`, `direccion_almacen`, `idPais`, `idDepartamento`, `idProvincia`, `idDistrito`, `estado`, `created_at`, `updated_at`, `tipoAlmacen`) VALUES
(1, 'CENTRAL', 'C-001', 'CENTRO CIVICO', 17, 19, 1903, 1548, 1, '2021-04-25 04:46:40', '2021-04-27 16:22:53', '1'),
(2, 'JESUS MARIA', 'C-JM', 'JR NAZCA', 177, 13, 1302, 1227, 1, '2021-04-25 04:54:25', '2021-04-27 16:26:17', '2'),
(4, 'NAZCA', 'N-001', 'NAZCA', 177, 16, 1602, 1471, 1, '2021-04-27 20:19:56', '2021-04-27 20:20:29', '2'),
(5, 'MIRAFLORES', 'MF-001', 'MIRAFLORES', 177, 14, 1401, 1243, 1, '2021-04-28 23:38:54', '2021-04-28 23:38:54', '1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_devolucion`
--

CREATE TABLE `tipo_devolucion` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `descripcion_devolucion` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `estado` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tipo_devolucion`
--

INSERT INTO `tipo_devolucion` (`id`, `descripcion_devolucion`, `estado`, `created_at`, `updated_at`) VALUES
(1, 'MALOGRADO', 1, '2021-04-04 22:44:09', '2021-04-04 22:44:29');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_documento`
--

CREATE TABLE `tipo_documento` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tipo_documento` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `estado` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tipo_documento`
--

INSERT INTO `tipo_documento` (`id`, `tipo_documento`, `estado`, `created_at`, `updated_at`) VALUES
(1, 'DNI', 1, '2021-04-25 03:22:01', '2021-04-04 21:39:56'),
(2, 'PASPORTE', 1, '2021-04-25 03:22:01', '2021-04-25 03:22:01'),
(3, 'CARNET DE EXTRANERIA', 1, '2021-04-25 03:22:01', '2021-04-25 03:22:01'),
(4, 'aaaa', 1, '2021-04-04 21:35:25', '2021-04-04 21:35:25'),
(5, 'aaaaaavvv', 1, '2021-04-04 21:40:09', '2021-04-04 21:40:09');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_ingreso`
--

CREATE TABLE `tipo_ingreso` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `descripcion_ingreso` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `estado` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tipo_ingreso`
--

INSERT INTO `tipo_ingreso` (`id`, `descripcion_ingreso`, `estado`, `created_at`, `updated_at`) VALUES
(1, 'INGRESO ORDEN COMPRA', 1, '2021-04-05 22:23:15', '2021-04-27 21:25:16'),
(2, 'SIN ORDEN COMPRA', 1, '2021-04-08 02:38:23', '2021-04-27 21:25:25');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_pago`
--

CREATE TABLE `tipo_pago` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `descripcion_pago` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `estado` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tipo_pago`
--

INSERT INTO `tipo_pago` (`id`, `descripcion_pago`, `estado`, `created_at`, `updated_at`) VALUES
(1, 'EFECTIVO', 1, '2021-04-06 05:22:01', '2021-04-06 05:22:13'),
(2, 'YAPE', 1, '2021-04-19 01:44:56', '2021-04-19 01:44:56'),
(3, 'TRANSFERENCIA', 1, '2021-04-19 01:45:02', '2021-04-19 01:45:02'),
(4, 'TRANSFERENCIA INTERBANCARIA', 1, '2021-04-19 01:45:12', '2021-04-19 01:45:12');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_salida`
--

CREATE TABLE `tipo_salida` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `descripcion_salida` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `estado` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tipo_salida`
--

INSERT INTO `tipo_salida` (`id`, `descripcion_salida`, `estado`, `created_at`, `updated_at`) VALUES
(1, 'POR DEFECTO.', 1, '2021-04-06 05:04:39', '2021-04-06 05:05:51');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `unidad_medida`
--

CREATE TABLE `unidad_medida` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `detalle` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `alto` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ancho` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `estado` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `unidad_medida`
--

INSERT INTO `unidad_medida` (`id`, `detalle`, `alto`, `ancho`, `estado`, `created_at`, `updated_at`) VALUES
(1, 'UNIDAD', '1 CM', '2 CM', 1, '2021-04-06 05:47:30', '2021-04-07 20:17:49'),
(2, 'TONELADA', ' - ', ' - ', 1, '2021-04-19 01:45:33', '2021-04-19 01:45:33');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idEmpleado` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `estado` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `idEmpleado`, `estado`, `created_at`, `updated_at`) VALUES
(1, 'soporte', '$2y$10$lQaPC02t6TvzSIfc.IGiPOXFSHi13nAoe3Yv6igurMUL9sOYPsbtq', '1', '1', '2021-03-28 17:32:00', '2021-03-28 17:32:00');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `banco`
--
ALTER TABLE `banco`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cotizacion`
--
ALTER TABLE `cotizacion`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cotizacion_detalle`
--
ALTER TABLE `cotizacion_detalle`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `departamento`
--
ALTER TABLE `departamento`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `detalle_entrada_sin_oc`
--
ALTER TABLE `detalle_entrada_sin_oc`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `distrito`
--
ALTER TABLE `distrito`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `empleado`
--
ALTER TABLE `empleado`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `entrada_sin_oc`
--
ALTER TABLE `entrada_sin_oc`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `estado_flujo`
--
ALTER TABLE `estado_flujo`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `ingreso_almacen`
--
ALTER TABLE `ingreso_almacen`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `ingreso_almacen_sede_almacen`
--
ALTER TABLE `ingreso_almacen_sede_almacen`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `modelo`
--
ALTER TABLE `modelo`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `nro_cuenta`
--
ALTER TABLE `nro_cuenta`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `orden`
--
ALTER TABLE `orden`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pais`
--
ALTER TABLE `pais`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `perfil_usuario`
--
ALTER TABLE `perfil_usuario`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `proovedor`
--
ALTER TABLE `proovedor`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `provincia`
--
ALTER TABLE `provincia`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sede_almacen`
--
ALTER TABLE `sede_almacen`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipo_devolucion`
--
ALTER TABLE `tipo_devolucion`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipo_documento`
--
ALTER TABLE `tipo_documento`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipo_ingreso`
--
ALTER TABLE `tipo_ingreso`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipo_pago`
--
ALTER TABLE `tipo_pago`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipo_salida`
--
ALTER TABLE `tipo_salida`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `unidad_medida`
--
ALTER TABLE `unidad_medida`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_username_unique` (`username`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `banco`
--
ALTER TABLE `banco`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `cotizacion`
--
ALTER TABLE `cotizacion`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT de la tabla `cotizacion_detalle`
--
ALTER TABLE `cotizacion_detalle`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;

--
-- AUTO_INCREMENT de la tabla `departamento`
--
ALTER TABLE `departamento`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `detalle_entrada_sin_oc`
--
ALTER TABLE `detalle_entrada_sin_oc`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `distrito`
--
ALTER TABLE `distrito`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1835;

--
-- AUTO_INCREMENT de la tabla `empleado`
--
ALTER TABLE `empleado`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `entrada_sin_oc`
--
ALTER TABLE `entrada_sin_oc`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `estado_flujo`
--
ALTER TABLE `estado_flujo`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `ingreso_almacen`
--
ALTER TABLE `ingreso_almacen`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `ingreso_almacen_sede_almacen`
--
ALTER TABLE `ingreso_almacen_sede_almacen`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT de la tabla `modelo`
--
ALTER TABLE `modelo`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `nro_cuenta`
--
ALTER TABLE `nro_cuenta`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT de la tabla `orden`
--
ALTER TABLE `orden`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de la tabla `pais`
--
ALTER TABLE `pais`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=250;

--
-- AUTO_INCREMENT de la tabla `perfil_usuario`
--
ALTER TABLE `perfil_usuario`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `proovedor`
--
ALTER TABLE `proovedor`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `provincia`
--
ALTER TABLE `provincia`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2505;

--
-- AUTO_INCREMENT de la tabla `sede_almacen`
--
ALTER TABLE `sede_almacen`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `tipo_devolucion`
--
ALTER TABLE `tipo_devolucion`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `tipo_documento`
--
ALTER TABLE `tipo_documento`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `tipo_ingreso`
--
ALTER TABLE `tipo_ingreso`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `tipo_pago`
--
ALTER TABLE `tipo_pago`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `tipo_salida`
--
ALTER TABLE `tipo_salida`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `unidad_medida`
--
ALTER TABLE `unidad_medida`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
