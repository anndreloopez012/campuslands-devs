-- DQL: Consultas analíticas del ranking
USE db_battle_royale_irma;

-- 1. Top 5 de mejores jugadores ordenados por puntaje descendente
SELECT nombre_usuario, rango_actual, puntaje, victorias
FROM jugadores
WHERE estado = 'activo'
ORDER BY puntaje DESC
LIMIT 5;

-- 2. Promedio de puntaje y total de partidas agrupadas por rango
SELECT rango_actual, COUNT(*) AS total_jugadores, AVG(puntaje) AS puntaje_promedio
FROM jugadores
GROUP BY rango_actual
ORDER BY puntaje_promedio DESC;

-- 3. Jugadores activos que superan las 15 victorias
SELECT nombre_usuario, victorias, puntaje
FROM jugadores
WHERE victorias > 15 AND estado = 'activo'
ORDER BY victorias DESC;

-- 4. Calcular el porcentaje de efectividad (victorias vs partidas jugadas)
SELECT nombre_usuario, partidas_jugadas, victorias,
       ROUND((victorias * 100.0 / NULLIF(partidas_jugadas, 0)), 2) AS porcentaje_victorias
FROM jugadores
ORDER BY porcentaje_victorias DESC;

-- 5. Conteo de jugadores según su estado actual en la plataforma
SELECT estado, COUNT(*) AS cantidad_jugadores
FROM jugadores
GROUP BY estado;