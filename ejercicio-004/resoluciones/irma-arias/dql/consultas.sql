
USE garaje_motos_irma;

SELECT placa, marca, modelo, cilindrada, tarifa_dia FROM motocicletas WHERE estado = 'disponible' ORDER BY tarifa_dia ASC;
SELECT estado, COUNT(*) AS total_motos, ROUND(AVG(tarifa_dia), 2) AS tarifa_promedio FROM motocicletas GROUP BY estado;
SELECT marca, modelo, cilindrada, tarifa_dia, estado FROM motocicletas ORDER BY tarifa_dia DESC LIMIT 3;
SELECT placa, marca, modelo, cilindrada, estado FROM motocicletas WHERE cilindrada >= 250 ORDER BY cilindrada DESC;
SELECT marca, COUNT(*) AS cantidad_modelos, MAX(cilindrada) AS max_cilindrada, ROUND(AVG(tarifa_dia), 2) AS promedio_tarifa FROM motocicletas GROUP BY marca ORDER BY promedio_tarifa DESC;