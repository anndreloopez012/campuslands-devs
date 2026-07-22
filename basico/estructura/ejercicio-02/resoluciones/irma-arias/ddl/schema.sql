-- DDL: Creación de la base de datos y la estructura de tablas
DROP DATABASE IF EXISTS db_battle_royale_irma;
CREATE DATABASE db_battle_royale_irma;
USE db_battle_royale_irma;

CREATE TABLE jugadores (
    id_jugador INT AUTO_INCREMENT PRIMARY KEY,
    nombre_usuario VARCHAR(50) NOT NULL UNIQUE,
    rango_actual VARCHAR(30) NOT NULL,
    puntaje DECIMAL(10,2) NOT NULL CHECK (puntaje >= 0),
    partidas_jugadas INT UNSIGNED DEFAULT 0,
    victorias INT UNSIGNED DEFAULT 0,
    estado ENUM('activo', 'suspendido', 'inactivo') DEFAULT 'activo',
    fecha_registro DATETIME DEFAULT CURRENT_TIMESTAMP
);