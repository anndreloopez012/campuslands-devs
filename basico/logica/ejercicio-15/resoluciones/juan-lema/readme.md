# Presupuesto de estudio de animación 3D — Juan Lema

## Tematica

Animacion 3D. Script que calcula el costo de produccion de cada escena de un
proyecto, detecta las escenas mas costosas y reporta el total del presupuesto.

## Estructura de carpetas

```
juan-lema/
├── juan-lema.js  # logica: calcula costos, filtra, suma total y detecta la mas cara
└── juan-lema.md  # este archivo (explicacion y evidencia)
```

## Como funciona el archivo

`juan-lema.js` se ejecuta directo con Node (`node juan-lema.js`) y no depende
de ningun otro archivo del proyecto. Al correrlo:

1. Genera un arreglo de escenas de ejemplo con `crearEscenas()`.
2. Calcula el presupuesto completo con `analizarPresupuesto()`, que
   internamente encadena el resto de las funciones.
3. Imprime en consola el costo por escena, las escenas costosas, el costo
   total y la escena mas cara.

Al final se corre el mismo flujo tres veces: con datos normales, con una
lista vacia y con una escena en cero, para mostrar los casos limite.

## Como pense el problema

1. Identifique entrada, proceso y salida:
   - Entrada: lista de escenas con `horasModelado`, `horasRender` y `artistas`.
   - Proceso: calcular costo por escena, filtrar las costosas, sumar el
     total y encontrar la mas cara.
   - Salida: reporte con costo por escena, escenas costosas, total y la
     escena mas costosa.
2. Separe cada paso del enunciado en su propia funcion pequena
   (`calcularCosto`, `calcularCostos`, `filtrarEscenasCostosas`,
   `calcularCostoTotal`, `obtenerEscenaMasCostosa`) para que cada una tenga
   una sola responsabilidad.
3. `analizarPresupuesto()` orquesta todo el flujo y `imprimirReporte()` se
   encarga solo de mostrar el resultado, sin mezclar logica de calculo con
   logica de presentacion.
4. Use `calcularCostos()` para generar un nuevo arreglo con el campo `costo`
   agregado (sin mutar las escenas originales), y a partir de ahi el resto
   de funciones trabajan sobre esa version ya calculada.

## Notas tecnicas

- El costo de cada escena se calcula como:
  `horasModelado * 40000 + horasRender * 25000 + artistas * 120000`.
- El umbral de "escena costosa" es un costo mayor a `1000000` (parametrizable
  mediante `filtrarEscenasCostosas(escenas, umbral)`, con `1000000` como
  valor por defecto).
- `obtenerEscenaMasCostosa` devuelve `null` cuando el arreglo esta vacio,
  para no lanzar error al comparar contra un arreglo sin elementos.
- `formatearMoneda` es solo una ayuda visual para mostrar los montos con
  separador de miles, no afecta ningun calculo.

## Validacion (dos casos + caso extra)

Caso normal — 5 escenas de entrada, 3 superan el umbral de Q 1,000,000:

```
--- Costo por escena ---
  Batalla final: Q 1,975,000
  Introduccion: Q 960,000
  Persecucion nocturna: Q 1,500,000
  Dialogo simple: Q 450,000
  Explosion espacial: Q 2,420,000

--- Escenas costosas (costo > Q 1,000,000) ---
  Batalla final: Q 1,975,000
  Persecucion nocturna: Q 1,500,000
  Explosion espacial: Q 2,420,000

Costo total del proyecto: Q 7,305,000
Escena mas costosa: Explosion espacial (Q 2,420,000)
```

La escena "Introduccion" (10h modelado, 8h render, 3 artistas) da
Q 960,000, tal como indica el ejemplo del enunciado.

Caso limite — lista de escenas vacia: no hay escenas que mostrar, ninguna
supera el umbral, el costo total es `Q 0` y se informa que no hay escena
mas costosa que evaluar, sin que el script lance ningun error.

Caso extra — escena con `horasModelado`, `horasRender` y `artistas` en 0:
el costo calculado es `Q 0` sin division entre cero ni ningun otro error,
y esa escena se reporta correctamente como la "mas costosa" al ser la unica
en la lista.