# Ejercicio 10 — Maratón de películas de miedo

**Alumna:** Maria Montepeque  
**Dificultad:** Media  
**Archivo principal:** `maraton.js`

---

## Cómo pensé el problema

El problema tiene tres partes claras:

1. **Filtrar** — descartar películas con rating menor a 7.0.
2. **Acumular** — agregar películas en orden hasta que la siguiente no quepa dentro de 360 minutos.
3. **Reportar** — mostrar la lista final con duración total y total de sustos.

Opté por separar la lógica en una función `armarMaraton` que recibe la lista, el límite y el rating mínimo como parámetros. Eso me permitió reutilizarla en los tres casos de validación sin repetir código.

Para la acumulación usé un ciclo `for...of` en lugar de un `reduce` anidado, porque hace más visible el momento en que una película no cabe (el `if` con `minutosRestantes`).

---

## Datos de entrada

```js
const peliculas = [
  { titulo: "El exorcista",  duracionMin: 122, sustos: 9, rating: 8.0 },
  { titulo: "Hereditary",    duracionMin: 127, sustos: 8, rating: 7.3 },
  { titulo: "It Follows",    duracionMin: 100, sustos: 6, rating: 6.8 },
  { titulo: "La Llorona",    duracionMin:  97, sustos: 7, rating: 6.5 },
  { titulo: "Get Out",       duracionMin: 104, sustos: 7, rating: 7.7 },
  { titulo: "A Quiet Place", duracionMin:  90, sustos: 8, rating: 7.5 },
  { titulo: "The Witch",     duracionMin: 102, sustos: 6, rating: 6.9 },
  { titulo: "Midsommar",     duracionMin: 148, sustos: 5, rating: 7.1 },
  { titulo: "Sinister",      duracionMin: 110, sustos: 9, rating: 6.8 },
  { titulo: "The Babadook",  duracionMin:  93, sustos: 7, rating: 6.8 },
];
```

---

## Proceso

```
ENTRADA  → lista de películas, límite de minutos, rating mínimo

PASO 1   → filtrar: quedan solo las películas con rating >= 7.0
           El exorcista (8.0) ✓  Hereditary (7.3) ✓  It Follows (6.8) ✗
           La Llorona (6.5) ✗    Get Out (7.7) ✓     A Quiet Place (7.5) ✓
           The Witch (6.9) ✗     Midsommar (7.1) ✓   Sinister (6.8) ✗
           The Babadook (6.8) ✗

PASO 2   → acumular sin superar 360 min:
           El exorcista  122 min  → acumulado  122  (quedan 238)  ✓
           Hereditary    127 min  → acumulado  249  (quedan 111)  ✓
           Get Out       104 min  → acumulado  353  (quedan   7)  ✓
           A Quiet Place  90 min  → no cabe (90 > 7)             ✗
           Midsommar     148 min  → no cabe (148 > 7)            ✗

PASO 3   → total de sustos: 9 + 8 + 7 = 24

SALIDA   → 3 películas, 353 minutos, 24 sustos
```

---

## Evidencia de validación

### Caso normal — límite 360 min, rating >= 7.0

```
=== Maratón de películas de miedo ===

Películas seleccionadas:
  1. El exorcista — 122 min | sustos: 9 | rating: 8
  2. Hereditary — 127 min | sustos: 8 | rating: 7.3
  3. Get Out — 104 min | sustos: 7 | rating: 7.7

Duración total : 353 minutos
Total de sustos: 24
```

### Caso límite — límite 100 min, rating >= 7.0

Con solo 100 minutos disponibles, únicamente entra una película de 90 minutos.

```
=== Maratón de películas de miedo ===

Películas seleccionadas:
  1. A Quiet Place — 90 min | sustos: 8 | rating: 7.5

Duración total : 90 minutos
Total de sustos: 8
```

### Caso vacío — lista sin películas

```
No hay películas que cumplan los criterios para la maratón.
```

---

## Comandos Git sugeridos

```bash
git checkout dev
git pull origin dev
git checkout -b ejercicio-10/maria-montepeque

# ... trabajo en los archivos ...

git add resoluciones/maria-montepeque/
git commit -m "ejercicio-10: maratón de películas de miedo — Maria Montepeque"
git push origin ejercicio-10/maria-montepeque
```
