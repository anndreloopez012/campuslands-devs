# Ejercicio 10 — Maratón de películas de miedo — Juan Lema

## Temática

Películas de miedo. Script que selecciona qué películas entran a una maratón
sin pasarse de un límite de horas, priorizando las mejor calificadas.

## Estructura de carpetas

```
juan-lema/
├── maraton.js   # logica: filtra, selecciona y muestra la maratón
└── README.md    # este archivo (explicacion y evidencia)
```

## Objetivo del ejercicio

Seleccionar, de una lista de películas, cuáles entran a una maratón de máximo
6 horas (360 minutos), quedándose solo con las que tienen rating mayor o
igual a 7.

## Como pense el problema

1. Identifiqué entrada, proceso y salida:
   - Entrada: lista de películas con `titulo`, `duracionMin`, `sustos` y `rating`.
   - Proceso: filtrar por rating, acumular duración sin pasar 360 minutos,
     sumar los sustos de lo seleccionado.
   - Salida: lista final de la maratón con duración total y total de sustos.
2. Separé el problema en funciones pequeñas con un solo trabajo cada una:
   `filtrarPorRating`, `seleccionarMaraton`, `calcularTotalSustos` y
   `mostrarSeleccion`, orquestadas por `armarMaraton`.
3. Usé una acumulación tipo "greedy": recorro las películas ya filtradas en
   orden y solo agrego una si al sumarla no se pasa del límite de minutos.

## Notas técnicas

- El filtro de rating se aplica antes de acumular duración, así nunca se
  cuela una película con rating menor a 7 aunque calce en el tiempo.
- La acumulación respeta el orden del arreglo original; si una película no
  cabe, simplemente se salta y se sigue evaluando la siguiente (no corta el
  ciclo).
- El total de sustos se calcula con `reduce` solo sobre las películas que sí
  quedaron seleccionadas.

## Validación (dos casos)

Caso normal — datos completos, filtrados y acumulados hasta el límite:

```
=== Maraton de peliculas de miedo ===
1. La Casa Silenciosa - 95 min - 14 sustos - rating 7.8
2. El Sotano - 110 min - 20 sustos - rating 8.1
3. Ultima Llamada - 120 min - 18 sustos - rating 7.2
Duracion total: 325 min
Total de sustos: 52
```

Caso límite — arreglo de películas vacío: la función no rompe ni lanza error
de duración/sustos sobre datos inexistentes, y muestra el mensaje
"No hay peliculas para mostrar." en lugar de una lista vacía.

```
=== Caso limite: sin peliculas ===
No hay peliculas para mostrar.
```

Ambas salidas fueron generadas ejecutando `node maraton.js` directamente.