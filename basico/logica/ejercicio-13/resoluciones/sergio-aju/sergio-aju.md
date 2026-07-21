# Ejercicio: Estadísticas de Torneo de Ping-Pong

## Alumno
Sergio Miranda

## Descripción del problema
El objetivo es procesar el rendimiento de los jugadores en un torneo interno de ping-pong. Se requiere calcular el porcentaje de victorias (*winrate*) y la diferencia de puntos para generar un ranking ordenado. La lógica incluye validaciones para evitar divisiones por cero en jugadores sin partidos.

## Razonamiento y solución
1. **Modelado**: Se utilizó un arreglo de objetos donde cada jugador tiene `nombre`, `partidos`, `victorias`, `puntosFavor` y `puntosContra`.
2. **Cálculo**:
   - `winrate`: Se calcula solo si `partidos > 0` para evitar errores de división por cero.
   - `difPuntos`: Se obtiene restando `puntosContra` a `puntosFavor`.
3. **Ranking**: Se utilizó el método `.sort()` para ordenar primero por `winrate` (descendente) y, en caso de empate, por `difPuntos`.

## Evidencia de validación
*   **Caso Normal**: 8 victorias / 10 partidos = 80% Winrate.
*   **Caso Límite**: 0 partidos = 0% Winrate (Validado con condición para evitar error).