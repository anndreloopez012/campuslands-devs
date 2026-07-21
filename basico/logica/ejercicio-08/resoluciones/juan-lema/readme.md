# Ejercicio 08 — Catálogo de hiperdeportivos — Juan Lema

## Temática

Vehículos hiperdeportivos. Se filtra, clasifica y ordena un catálogo de autos
según su aceleración, exclusividad y precio.

## Estructura de carpetas

```
juan-lema/
├── solucion.js    # logica: filtrado, clasificacion, promedio y top 3
└── juan-lema.md   # este archivo (explicacion y evidencia)
```

## Objetivo del ejercicio

Filtrar autos por 0-100 km/h, precio y unidades producidas.

## Cómo pensé el problema

1. Identifiqué entrada, proceso y salida:
   - Entrada: lista de autos con marca, modelo, ceroACien, precioUSD y unidades.
   - Proceso: filtrar los que aceleran en menos de 3s, clasificar exclusividad,
     calcular precio promedio y sacar el top 3 más rápido.
   - Salida: reporte impreso en consola con las tres listas anteriores.
2. Separé cada responsabilidad en su propia función para no mezclar el filtrado,
   la clasificación y el ordenamiento en un solo bloque de código:
   `filtrarPorAceleracion`, `clasificarExclusividad`, `calcularPrecioPromedio`,
   `obtenerTop3PorAceleracion`.
3. Usé `.filter()` para la aceleración, `.map()` para agregar la exclusividad
   sin mutar los objetos originales, `.reduce()` para el promedio y `.sort()`
   con `.slice()` para el top 3.

## Notas técnicas

- La exclusividad se clasifica como `"extrema"` cuando `unidades < 500`, y
  `"normal"` en caso contrario.
- El top 3 por aceleración se calcula sobre la lista completa (no solo la
  filtrada), ordenando de menor a mayor `ceroACien`, porque "más rápido"
  significa menos segundos.
- `calcularPrecioPromedio` revisa si la lista está vacía antes de dividir,
  para evitar `NaN` por división entre cero.
- Se usa el operador spread (`[...listaAutos]`) antes de `.sort()` para no
  mutar el arreglo original.

## Validación (dos casos)

Caso normal — catálogo con 7 autos, filtro de aceleración < 3s:

```
Autos con 0-100 en menos de 3s:
- Bugatti Chiron: 2.4s | 500 unidades | exclusividad: normal
- Koenigsegg Jesko: 2.5s | 125 unidades | exclusividad: extrema
- Ferrari SF90: 2.5s | 2000 unidades | exclusividad: normal
- Lamborghini Revuelto: 2.5s | 1499 unidades | exclusividad: normal

Precio promedio (autos filtrados): $1,858,250

Top 3 por aceleracion:
1. Bugatti Chiron — 2.4s
2. Koenigsegg Jesko — 2.5s
3. Ferrari SF90 — 2.5s
```

Caso límite — lista vacía: `calcularPrecioPromedio([])` devuelve `0` en lugar
de `NaN`, gracias a la validación `if (listaAutos.length === 0) return 0;`.
También se probó el caso frontera de `unidades === 500` (Bugatti Chiron), que
queda clasificado como `"normal"` porque la condición es estrictamente
`unidades < 500`.