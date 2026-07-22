# Panel deportivo multiliga — Juan Lema

## Tematica

Deportes y futbol. Estructura de proyecto que organiza equipos, partidos y
una tabla de posiciones calculada a partir de ambos.

## Estructura de carpetas

```
juan-lema/
├── data/
│   ├── equipos/
│   │   ├── liga-nacional.json      # equipos de la liga nacional
│   │   └── liga-internacional.json # equipos de la liga internacional
│   └── partidos/
│       ├── jornada-1.json          # resultados de la jornada 1 (liga nacional)
│       └── jornada-2.json          # resultados de la jornada 2 (liga nacional)
├── src/
│   └── tabla.js                    # calcula y ordena la tabla de posiciones
├── docs/
│   └── modelo-datos.md             # explica los campos de equipo y partido
└── juan-lema.md                    # este archivo (explicacion y evidencia)
```

## Como se conecta cada archivo

- `src/tabla.js` lee `data/equipos/liga-nacional.json` y todos los archivos
  de `data/partidos/` con `fs.readFileSync`.
- Cada partido referencia a los equipos por su campo `id` (no por nombre),
  asi que `tabla.js` cruza esa informacion para acumular estadisticas por
  equipo (jugados, ganados, empatados, perdidos, goles, puntos).
- `docs/modelo-datos.md` documenta la forma de esos JSON para que cualquier
  persona pueda agregar una liga o jornada nueva sin adivinar el formato.

Flujo: `data/equipos` + `data/partidos` (entrada) → `src/tabla.js` (proceso:
acumula estadisticas y ordena) → tabla impresa en consola (salida).

## Como pense el problema

1. Separe el problema en entrada, proceso y salida:
   - Entrada: equipos por liga y partidos por jornada, en archivos separados.
   - Proceso: por cada partido, sumar goles, victorias/empates/derrotas y
     puntos a los dos equipos involucrados.
   - Salida: una tabla ordenada por puntos y, en caso de empate, por
     diferencia de goles.
2. Decidi que carpeta `equipos` y carpeta `partidos` estuvieran separadas,
   para que agregar una liga o una jornada nueva no obligue a tocar el resto
   de los datos.
3. Dividi la logica en funciones pequenas (`inicializarTabla`,
   `aplicarPartido`, `construirTabla`, `ordenarTabla`, `imprimirTabla`) en
   vez de una sola funcion larga, siguiendo el mismo criterio de Clean Code
   de nombrar cada funcion segun lo que hace.

## Notas tecnicas

- Los puntos se calculan como 3 por victoria, 1 por empate y 0 por derrota.
- El criterio de desempate es la diferencia de goles (`golesFavor - golesContra`).
- `tabla.js` usa rutas relativas con `path.join(__dirname, ...)` para poder
  ejecutarse con `node src/tabla.js` desde cualquier ubicacion.
- Si una liga todavia no tiene partidos jugados, cada equipo aparece en la
  tabla con todos los valores en cero, sin que el programa falle.

## Validacion (dos casos)

Caso normal — tabla calculada con las jornadas 1 y 2 de la liga nacional:

```
Pos | Equipo            | PJ | PG | PE | PP | GF | GC | Pts
1   | Halcones FC       | 2  | 2  | 0  | 0  | 4  | 2  | 6
2   | Volcan SC         | 2  | 0  | 2  | 0  | 3  | 3  | 2
3   | Cometas United    | 2  | 0  | 1  | 1  | 4  | 5  | 1
4   | Marea Azul        | 2  | 0  | 1  | 1  | 1  | 2  | 1
```

Caso limite — liga sin equipos y sin partidos: `construirTabla([], [])`
devuelve un arreglo vacio (`[]`) sin lanzar error. Tambien se probo un
equipo sin partidos jugados (`jugados: 0`) y todos sus contadores quedan en
cero en vez de fallar por division entre cero o por datos indefinidos.
