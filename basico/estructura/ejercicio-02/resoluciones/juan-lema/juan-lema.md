# Ranking de Jugadores MOBA — Estructura del proyecto

**Alumno:** Juan Lema
**Ruta:** `basico/estructura/ejercicio-02/resoluciones/juan-lema/`

## Proceso

Separé la interfaz en cuatro responsabilidades independientes, siguiendo
principios de Clean Code (separación de capas: estructura, presentación,
comportamiento y datos):

- `index.html` — solo estructura y enlaces a los demás archivos.
- `css/styles.css` — todo el estilo visual, sin estilos inline.
- `js/app.js` — lógica de obtención, cálculo y renderizado del ranking.
- `data/players.json` — datos crudos de jugadores, sin lógica.

## Cómo se conecta cada archivo

1. `index.html` carga `css/styles.css` con `<link>` y `js/app.js` con
   `<script type="module">`.
2. `app.js` hace `fetch` a `data/players.json` para obtener los jugadores.
3. `app.js` calcula el puntaje de cada jugador y lo inserta en el DOM
   dentro del `<ul id="lista-ranking">` definido en el HTML.

## Comandos utilizados
1.`git checkout dev`

2.`git pull origin dev`

3.`git checkout -b alumno/juan-lema/ejercicio-02`

4.`mkdir -p basico/estructura/ejercicio-02/resoluciones/juan-lema/css`

5.`mkdir -p basico/estructura/ejercicio-02/resoluciones/juan-lema/js`

6.`mkdir -p basico/estructura/ejercicio-02/resoluciones/juan-lema/data`

7.`git add .`

8.`git commit -m "estructura: separar interfaz de ranking MOBA en HTML/CSS/JS/JSON"`

9.`git push origin alumno/juan-lema/ejercicio-02`