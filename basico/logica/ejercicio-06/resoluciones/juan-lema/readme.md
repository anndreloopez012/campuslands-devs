# Ejercicio 06 — Comparador de motos deportivas — Juan Lema

## Tematica

Motos deportivas. Un pequeno taller compara motos por relacion peso-potencia
y costo de mantenimiento para recomendar la mejor opcion segun el uso
(pista o economia).

## Estructura de carpetas

```
juan-lema/
├── motos.js       # datos de las motos y toda la logica de comparacion
└── juan-lema.md    # este archivo (explicacion y evidencia)
```

## Como pense el problema

1. Identifique entrada, proceso y salida:
   - Entrada: lista de motos con marca, modelo, hp, pesoKg y mantenimientoMensual.
   - Proceso: calcular relacion peso-potencia, filtrar por mantenimiento y ordenar.
   - Salida: la mejor moto para pista y la mejor moto economica.
2. Separe la logica en funciones pequenas y con nombres claros
   (`calcularRelacion`, `filtrarPorMantenimiento`, `ordenarPorRelacion`,
   `mejorParaPista`, `mejorEconomica`) para que cada una resuelva una sola cosa.
3. La "mejor para pista" se calcula sobre todas las motos (sin filtrar costo,
   porque en pista lo que importa es el rendimiento). La "mejor economica" se
   calcula solo sobre las motos que pasan el filtro de mantenimiento.

## Notas tecnicas

- La relacion peso-potencia se calcula como `hp / pesoKg`, redondeada a 3
  decimales. Un valor mas alto significa mejor rendimiento.
- El filtro de mantenimiento usa `mantenimientoMensual < 500000` (configurable
  mediante un parametro con valor por defecto).
- Se controla la division entre cero: si `pesoKg` es `0`, `calcularRelacion`
  devuelve `0` en lugar de `Infinity` o `NaN`.
- Si la lista de motos llega vacia, `mejorParaPista` y `mejorEconomica`
  devuelven `null` y `mostrarResultado` imprime un mensaje en vez de fallar.

## Validacion (dos casos)

Caso normal — datos completos (`node motos.js`):

```
Mejor para pista: Ducati Panigale V4 - relacion 1.081 hp/kg - mantenimiento Q800000
Mejor economica: Yamaha R1 - relacion 0.995 hp/kg - mantenimiento Q450000
```

Caso limite — lista vacia y moto con `pesoKg` en `0`:

```
Lista vacia pista: null
Lista vacia economica: null
pesoKg 0: 0
```

No se produce ningun error ni `NaN`/`Infinity` en ninguno de los dos casos.