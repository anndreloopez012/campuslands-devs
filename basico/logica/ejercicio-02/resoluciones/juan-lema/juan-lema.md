# Proyecto de lógica — Inventario táctico de shooter — Juan Lema

## Tematica

Videojuegos shooters. Script que filtra armas por municion minima, las separa
por tipo y marca cuales se recomiendan para entrar a ranked.

## Estructura de carpetas
juan-lema/
├── armas.js       # logica: filtra, marca recomendadas, separa por tipo e imprime
└── juan-lema.md   # este archivo (explicacion y evidencia)

## Como se conecta cada archivo

Todo el flujo vive en `armas.js`, dividido en funciones pequenas que se
encadenan dentro de `generarInventario`:

`armasDisponibles` (datos) → `filtrarPorMunicionMinima` (proceso) →
`marcarRecomendadas` (proceso) → `separarPorTipo` (proceso) →
`imprimirResumen` (salida por consola)

## Como pense el problema

1. Identifique entrada, proceso y salida:
   - Entrada: lista de armas con nombre, tipo, municion y rareza.
   - Proceso: filtrar por municion minima, marcar recomendadas, separar por tipo.
   - Salida: resumen impreso en consola agrupado por tipo de arma.
2. Separe cada paso del enunciado en su propia funcion para no mezclar el
   filtrado con la clasificacion ni con la impresion.
3. Use nombres claros (`filtrarPorMunicionMinima`, `marcarRecomendadas`,
   `separarPorTipo`, `imprimirResumen`) para que cada funcion se entienda
   sin necesidad de leer su cuerpo.

## Notas tecnicas

- El filtro de municion minima (30) se aplica antes de separar por tipo,
  asi las armas sin balas suficientes ni siquiera entran a la clasificacion.
- Una rareza `rara` o `epica` marca el arma como recomendada; el filtro se
  aplica sobre las armas que ya pasaron el minimo de municion.
- `separarPorTipo` siempre devuelve las tres llaves (`rifles`, `pistolas`,
  `francotiradores`), aunque alguna quede vacia, para que `imprimirResumen`
  no falle al recorrerlas.

## Validacion (dos casos)

Caso normal — 5 armas, una queda fuera por municion insuficiente:
== RIFLES ==
AK Ranger | municion: 45 | rareza: epica | recomendada
== PISTOLAS ==
Trueno Corto | municion: 35 | rareza: comun
== FRANCOTIRADORES ==
Silencio Largo | municion: 30 | rareza: rara | recomendada

(`Falcon Nine` y `Aguila Nocturna` quedan fuera por tener menos de 30 balas.)

Caso limite — arreglo de armas vacio: `generarInventario([])` no lanza error,
`separarPorTipo` devuelve las tres categorias vacias y `imprimirResumen`
muestra "Sin armas disponibles." en cada una.