# Ranking de Pingpong

Ranking interno del torneo de pingpong de la oficina. Se ordena de mayor a
menor segun puntos, calculados como `victorias x 3 + sets ganados`.

| Posicion | Jugador          | Victorias | Derrotas | Sets ganados | Puntos |
|----------|------------------|-----------|----------|---------------|--------|
| 1        | Marcos Reyes     | 8         | 1        | 19            | 43     |
| 2        | Lucia Fonseca    | 7         | 2        | 16            | 37     |
| 3        | Diego Paredes    | 5         | 4        | 13            | 28     |
| 4        | Ana Sical        | 3         | 6        | 9             | 18     |
| 5        | Bryan Us         | 0         | 9        | 2             | 2      |

## Notas

- El jugador en la posicion 5 (Bryan Us) representa el caso limite:
  cero victorias, para dejar evidencia de que el ranking tambien
  ordena correctamente cuando alguien tiene puntaje minimo (no cero
  filas, sino puntaje bajo real).
- Si el torneo no tuviera partidos registrados, la tabla se dejaria
  vacia con la nota "Sin partidos registrados todavia" en vez de
  eliminar el archivo.