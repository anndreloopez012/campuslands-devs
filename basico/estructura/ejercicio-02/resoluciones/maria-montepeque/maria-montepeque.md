# Proyecto frontend de ranking esports — Maria Montepeque

## Tematica

Videojuegos MOBA. Interfaz simple que muestra un ranking de jugadores ordenado
por porcentaje de victorias (winrate).

## Estructura de carpetas

```
maria-montepeque/
├── index.html          # estructura de la pagina (solo HTML, sin estilos inline)
├── css/
│   └── styles.css      # todos los estilos del ranking
├── js/
│   └── app.js          # logica: carga datos, calcula winrate, ordena y dibuja
├── data/
│   └── players.json    # datos de los jugadores
└── maria-montepeque.md # este archivo (explicacion y evidencia)
```

## Como se conecta cada archivo

- `index.html` enlaza la hoja de estilos con `<link rel="stylesheet" href="css/styles.css">`
  y el script con `<script src="js/app.js"></script>` al final del body.
- `app.js` pide los datos a `data/players.json` con `fetch`, los procesa y los
  inyecta dentro del `<ul id="lista-jugadores">` que ya existe en el HTML.
- `styles.css` da el aspecto visual a las clases que genera `app.js` (`.player`,
  `.player__nick`, etc.). El HTML no tiene ni un estilo en linea.

Flujo: `players.json` (datos) → `app.js` (proceso) → `index.html` (salida visual)
con `styles.css` aplicando el diseno.

## Como pense el problema

1. Identifique entrada, proceso y salida:
   - Entrada: lista de jugadores con victorias y derrotas (JSON).
   - Proceso: calcular winrate, ordenar de mayor a menor.
   - Salida: lista visual con posicion, nick, rol y estadisticas.
2. Separe responsabilidades en tres archivos para no mezclar nada:
   datos, logica y presentacion.
3. Escribi la logica en funciones pequenas y con nombres claros
   (`calcularWinrate`, `ordenarPorWinrate`, `renderRanking`) para que se lea facil.

## Notas tecnicas

- El winrate se calcula como `victorias / (victorias + derrotas) * 100`, redondeado.
- Para abrir `index.html` directamente algunos navegadores bloquean el `fetch`
  de archivos locales (politica CORS de `file://`). Por eso se recomienda abrirlo
  con un servidor local, por ejemplo la extension Live Server de VS Code.
- Las tres primeras posiciones reciben un color distinto (oro, plata, bronce)
  mediante las clases `.player--1`, `.player--2`, `.player--3`.

## Validacion (dos casos)

Caso normal — datos completos, ordenados por winrate:

```
ShadowFang: 71%
IronGuard:  62%
NightArrow: 60%
RootWarden: 50%
EmberJung:   0%
```

Caso limite — jugador con 0 victorias y 0 derrotas: el winrate devuelve `0%`
sin error de division entre cero (lo controla el `if (totalPartidas === 0)`).
Si la lista de jugadores llegara vacia, la interfaz muestra el mensaje
"No hay jugadores para mostrar." en lugar de quedar en blanco.