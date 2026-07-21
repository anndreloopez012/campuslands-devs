# Tabla de futbol sala — Juan Lema

## Tematica

Futbol sala. Script que recibe una lista de equipos con sus resultados de la
jornada y arma la tabla de posiciones final: puntos, diferencia de goles y
orden correcto.

## Estructura de carpetas

```
juan-lema/
├── tabla.js       # logica: calcula puntos, diferencia, ordena e imprime la tabla
└── juan-lema.md   # este archivo (explicacion y evidencia)
```

## Como se conecta cada parte

- `equipos` es el arreglo de entrada: cada equipo trae victorias, empates,
  derrotas, golesFavor y golesContra.
- `calcularPuntos` y `calcularDiferencia` son funciones puras que reciben un
  equipo y devuelven un numero, sin modificar el original.
- `calcularEstadisticas` combina ambas y devuelve un equipo nuevo (con
  spread `...equipo`) que ya trae `puntos` y `diferencia` agregados.
- `ordenarTabla` recibe la lista con estadisticas y la ordena por puntos y,
  en caso de empate, por diferencia de goles.
- `imprimirTabla` solo se encarga de mostrar el resultado en consola.
- `generarTabla` es la funcion orquestadora: conecta todo el flujo de
  entrada -> proceso -> salida y es la unica que se llama directamente.

Flujo: `equipos` (datos) → `calcularEstadisticas` (proceso) →
`ordenarTabla` (orden) → `imprimirTabla` (salida).

## Como pense el problema

1. Separe entrada, proceso y salida:
   - Entrada: equipos con victorias, empates, derrotas y goles.
   - Proceso: calcular puntos y diferencia de goles, luego ordenar.
   - Salida: tabla impresa con posicion, equipo, puntos y diferencia.
2. Evite mutar los objetos originales: cada funcion de calculo devuelve un
   equipo nuevo en vez de modificar el arreglo `equipos` directamente.
3. Deje el criterio de orden explicito en `ordenarTabla` (primero puntos,
   luego diferencia de goles) para que sea facil de leer y de cambiar si
   la liga usara otro criterio de desempate.
4. Escribi funciones pequenas con nombres que describen exactamente lo que
   hacen (`calcularPuntos`, `calcularDiferencia`, `ordenarTabla`,
   `imprimirTabla`) para no mezclar responsabilidades en una sola funcion.

## Notas tecnicas

- Puntos = `victorias * 3 + empates`.
- Diferencia de goles = `golesFavor - golesContra`.
- El criterio de desempate es la diferencia de goles cuando dos equipos
  tienen los mismos puntos.
- `ordenarTabla` usa `[...equiposConEstadisticas]` antes de `sort` para no
  mutar el arreglo que recibe como parametro.

## Validacion (dos casos)

Caso normal — cinco equipos con resultados distintos, tabla ordenada:

```
Pos | Equipo             | Pts | DG
----|--------------------|-----|----
1   | Halcones FS         | 13  | +11
2   | Los Tigres          | 10  | +5
3   | Rayo Sur            | 9   | +0
4   | Union Norte         | 5   | -2
5   | Deportivo Cuenca    | 0   | -14
```

Caso limite 1 — lista de equipos vacia: `imprimirTabla` detecta el arreglo
vacio y muestra el mensaje "No hay equipos para mostrar en la tabla." en
vez de imprimir una tabla rota o con encabezado sin filas.

Caso limite 2 — equipo sin partidos jugados (todo en cero): el calculo no
rompe con division ni con valores `NaN`, y el equipo queda correctamente
con `0` puntos y `+0` de diferencia:

```
Pos | Equipo             | Pts | DG
----|--------------------|-----|----
1   | Nuevo Ingreso FS    | 0   | +0
```