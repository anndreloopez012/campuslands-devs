# Ejercicio 13 — Estadísticas de torneo de pingpong — Juan Lema

## Tematica

Pingpong. Un torneo interno necesita calcular el rendimiento de sus
jugadores a partir de partidos, victorias y puntos anotados/recibidos.

## Estructura de carpetas

```
juan-lema/
├── estadisticas.js  # logica: calculo de winrate, diferencia, promedio y ranking
└── juan-lema.md      # este archivo (explicacion y evidencia)
```

## Como se conecta cada archivo

- `estadisticas.js` contiene los datos de entrada (arreglo `jugadores`) y todas
  las funciones de calculo y presentacion en un mismo archivo, ya que el
  ejercicio es de logica pura y no requiere HTML ni CSS.
- Al ejecutar `node estadisticas.js` se corre `mostrarRanking(jugadores)`,
  que arma las estadisticas, ordena el ranking y lo imprime en consola.

Flujo: `jugadores` (datos) → `construirEstadisticas` + `ordenarPorRanking`
(proceso) → `mostrarRanking` (salida en consola).

## Como pense el problema

1. Identifique entrada, proceso y salida:
   - Entrada: jugadores con partidos, victorias, puntosFavor y puntosContra.
   - Proceso: calcular winrate, diferencia de puntos y promedio; ordenar
     por winrate y, en caso de empate, por diferencia de puntos.
   - Salida: ranking en consola con la posicion de cada jugador.
2. Separe cada calculo en su propia funcion pequena (`calcularWinrate`,
   `calcularDiferenciaPuntos`, `calcularPromedioPuntos`) para que cada una
   tenga una sola responsabilidad y sea facil de probar por separado.
3. Use `construirEstadisticas` para armar un objeto nuevo por jugador sin
   modificar los datos originales, y `ordenarPorRanking` para aplicar el
   criterio de orden (winrate desc, luego diferencia desc) sin mutar el
   arreglo recibido (`[...listaEstadisticas].sort(...)`).

## Notas tecnicas

- El winrate se calcula como `victorias / partidos * 100`, redondeado con
  `Math.round`.
- Antes de dividir, se valida `if (jugador.partidos === 0) return 0;` para
  evitar la division entre cero.
- El criterio de desempate es la diferencia de puntos (`puntosFavor -
  puntosContra`), tambien de mayor a menor.
- `mostrarRanking` valida si la lista viene vacia y en ese caso imprime
  "No hay jugadores para mostrar." en lugar de fallar o no mostrar nada.

## Validacion (dos casos)

Caso normal — jugadores con partidos jugados, ordenados por winrate:

```
1. Kenji - winrate: 80% | diferencia: 60 | promedio: 21 pts
2. Valeria - winrate: 67% | diferencia: 40 | promedio: 20 pts
3. Bruno - winrate: 50% | diferencia: 10 | promedio: 18 pts
4. Noelia - winrate: 43% | diferencia: -10 | promedio: 17 pts
5. Diego - winrate: 0% | diferencia: 0 | promedio: 0 pts
```

Caso limite — jugador con 0 partidos jugados (Diego): el winrate y el
promedio devuelven `0` sin error de division entre cero, gracias a la
validacion `if (jugador.partidos === 0)`. Ademas, si la lista de jugadores
llegara vacia, `mostrarRanking` imprime "No hay jugadores para mostrar."
en vez de quedar en blanco o lanzar un error:

```
--- Caso lista vacia ---
No hay jugadores para mostrar.
```