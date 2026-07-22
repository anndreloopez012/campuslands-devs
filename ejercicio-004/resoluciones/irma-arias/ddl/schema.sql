CREATE DATABASE IF NOT EXISTS garaje_motos_irma;
USE garaje_motos_irma;

DROP TABLE IF EXISTS motocicletas;

CREATE TABLE motocicletas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    placa VARCHAR(10) NOT NULL UNIQUE,
    marca VARCHAR(40) NOT NULL,
    modelo VARCHAR(40) NOT NULL,
    cilindrada INT NOT NULL,
    tarifa_dia DECIMAL(10,2) NOT NULL CHECK (tarifa_dia > 0),
    estado ENUM('disponible', 'alquilada', 'mantenimiento') DEFAULT 'disponible',
    fecha_ingreso DATE NOT NULL
);