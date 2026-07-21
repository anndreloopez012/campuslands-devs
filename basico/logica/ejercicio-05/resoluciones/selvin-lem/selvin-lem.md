# Tabla de fútbol sala

## Planteamiento del problema
Se requería calcular puntos y diferencia de goles de varios equipos, ordenarlos según reglas de una liga y mostrar la tabla con posición.

## Cómo se llevó a cabo
1. Se definió una función `calcularTabla` que recibe un arreglo de equipos.
2. Por cada equipo se calculó puntos (victorias*3 + empates) y diferencia de goles (golesFavor - golesContra).
3. Se ordenó el arreglo por puntos, luego diferencia de goles, luego goles a favor (desempate).
4. Se asignó posición según el índice tras el ordenamiento.
5. Se validó con un caso normal (4 equipos con distintos resultados) y un caso límite (equipo sin partidos jugados, todo en cero).

## Pasos seguidos
- Definir estructura de datos de equipo.
- Crear función pura `calcularTabla` (map + sort + map).
- Aplicar cálculo de puntos y diferencia de goles.
- Ordenar con criterios de desempate en cascada.
- Imprimir resultado con `console.table`.
- Probar con datos normales y datos en cero.
