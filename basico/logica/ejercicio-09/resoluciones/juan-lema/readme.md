# Playlist para entrenamiento de kickboxing — Juan Lema

## Tematica

Kickboxing. Script que arma una playlist de entrenamiento filtrando canciones
por intensidad (bpm) y validando que la duracion total quede en un rango util
para una sesion de gimnasio.

## Estructura de carpetas

```
juan-lema/
├── juan-lema.js  # logica: filtra, agrupa, suma duracion y valida
└── juan-lema.md  # este archivo (explicacion y evidencia)
```

## Como funciona el archivo

`juan-lema.js` se ejecuta directo con Node (`node juan-lema.js`) y no depende
de ningun otro archivo del proyecto. Al correrlo:

1. Genera un arreglo de canciones de ejemplo con `crearCanciones()`.
2. Arma la playlist con `armarPlaylist()`, que internamente encadena el resto
   de las funciones.
3. Imprime en consola el reporte agrupado por intensidad y el resultado de
   la validacion de duracion.

Al final se corre el mismo flujo dos veces: una con datos normales y otra
con una lista vacia, para mostrar el caso limite.

## Como pense el problema

1. Identifique entrada, proceso y salida:
   - Entrada: lista de canciones con `bpm` y `duracionSeg`.
   - Proceso: filtrar por bpm, clasificar por intensidad, sumar duracion,
     validar contra un rango de minutos.
   - Salida: playlist agrupada por intensidad + resultado de validacion.
2. Separe cada paso del enunciado en su propia funcion pequena
   (`filtrarPorBpm`, `clasificarIntensidad`, `agruparPorIntensidad`,
   `calcularDuracionTotal`, `validarDuracion`) para que cada una tenga una
   sola responsabilidad y se pueda probar por separado.
3. `armarPlaylist()` orquesta todo el flujo y `imprimirReporte()` se encarga
   solo de mostrar el resultado, sin mezclar logica de calculo con logica
   de presentacion.

## Notas tecnicas

- El filtro de "canciones aptas para entrenamiento" usa `bpm > 135`, tal como
  lo pide el enunciado.
- La clasificacion de intensidad se define asi, siempre sobre las canciones
  ya filtradas (bpm > 135):
  - `media`: bpm entre 136 y 145
  - `alta`: bpm entre 146 y 160
  - `explosiva`: bpm mayor a 160
- La duracion total se calcula solo con las canciones filtradas, sumando
  `duracionSeg` con `reduce`.
- La validacion de duracion (`validarDuracion`) convierte minutos a segundos
  para comparar todo en la misma unidad y evitar errores de conversion.
- `formatearDuracion` es solo una ayuda visual para mostrar `mm:ss` en la
  consola, no afecta ningun calculo.

## Validacion (dos casos)

Caso normal — 8 canciones de entrada, 5 quedan aptas (bpm > 135):

```
Intensidad media:
  Iron Fist - Kane Beats (140 bpm, 3:30)

Intensidad alta:
  Ring Rush - Nyra V (152 bpm, 3:15)
  Combo Chain - Kane Beats (146 bpm, 3:10)

Intensidad explosiva:
  Overdrive - Blaze (168 bpm, 2:55)
  Final Round - Blaze (171 bpm, 3:25)

Duracion total: 16:15 (975 seg)
Valida para sesion de 15-25 min: si
```

Caso limite — lista de canciones vacia: los tres grupos de intensidad quedan
vacios, la duracion total es `0:00` y la validacion devuelve `no`, sin que el
script lance ningun error por dividir o iterar sobre datos vacios.