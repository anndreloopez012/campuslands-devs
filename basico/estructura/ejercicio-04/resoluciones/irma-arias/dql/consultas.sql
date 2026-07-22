-- DQL: Consultas analíticas y reportes para el garaje de motos
USE garaje_motos_irma;

-- Consulta 1: Listar motocicletas disponibles ordenadas por tarifa de menor a mayor
SELECT placa, marca, modelo, cilindrada, tarifa_dia 
FROM motocicletas 
WHERE estado = 'disponible' 
ORDER BY tarifa_dia ASC;

-- Consulta 2: Calcular el promedio de tarifa diaria y cantidad de motos agrupado por estado
SELECT estado, COUNT(*) AS total_motos, ROUND(AVG(tarifa_dia), 2) AS tarifa_promedio 
FROM motocicletas 
GROUP BY estado;

-- Consulta 3: Top 3 de motocicletas con mayor tarifa de alquiler diaria
SELECT marca, modelo, cilindrada, tarifa_dia, estado 
FROM motocicletas 
ORDER BY tarifa_dia DESC 
LIMIT 3;

-- Consulta 4: Filtrar motocicletas con cilindrada mayor o igual a 250cc
SELECT placa, marca, modelo, cilindrada, estado 
FROM motocicletas 
WHERE cilindrada >= 250 
ORDER BY cilindrada DESC;

-- Consulta 5: Reporte agrupado por marca mostrando cilindrada máxima y tarifa promedio
SELECT marca, COUNT(*) AS cantidad_modelos, MAX(cilindrada) AS max_cilindrada, ROUND(AVG(tarifa_dia), 2) AS promedio_tarifa 
FROM motocicletas 
GROUP BY marca 
ORDER BY promedio_tarifa DESC;