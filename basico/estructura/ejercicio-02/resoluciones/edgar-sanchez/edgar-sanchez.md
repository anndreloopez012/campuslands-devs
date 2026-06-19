
## Descripción de cada archivo/carpeta

### `index.html`
- **¿Para qué se usa?**  
  Es el archivo principal de la interfaz web. Contiene la estructura HTML (tabla de ranking, cabecera, etc.) donde se mostrará la lista de jugadores.
- **Relación con otros archivos:**  
  - Enlaza la hoja de estilos (`css/styles.css`) mediante `<link>`.
  - Enlaza el script (`js/app.js`) mediante `<script>` (generalmente al final del `<body>` o con `defer`).
  - Consume los datos que `app.js` cargará desde `data/players.json`.

### `css/styles.css`
- **¿Para qué se usa?**  
  Define todos los estilos visuales: colores, tipografías, disposición de la tabla, efectos hover, responsividad, etc.
- **Relación:**  
  Es importado exclusivamente por `index.html`. No depende de ningún otro archivo, pero afecta la presentación de todo el contenido generado dinámicamente por `app.js`.

### `data/players.json`
- **¿Para qué se usa?**  
  Almacena la información de los jugadores (nombre, personaje, partidas ganadas, ranking, etc.) en formato JSON.
- **Relación:**  
  Es leído por `js/app.js` (mediante `fetch` o importación dinámica) para obtener los datos y mostrarlos en `index.html`.

### `js/app.js`
- **¿Para qué se usa?**  
  Contiene la lógica del cliente:
  - Carga el archivo `players.json`.
  - Procesa los datos (ordena por ranking, filtra, calcula estadísticas básicas).
  - Manipula el DOM de `index.html` para construir la tabla de ranking dinámicamente.
- **Relación:**  
  Depende de `data/players.json` (fuente de datos) y modifica el contenido de `index.html`. No depende de `styles.css` directamente, pero sí utiliza sus clases CSS para dar formato a los elementos que crea.

### `edgar-sanchez.md`
- **¿Para qué se usa?**  
  Documento personal del alumno donde explica su razonamiento, decisiones técnicas, comandos Git utilizados, validaciones realizadas y cualquier nota adicional sobre la solución.
- **Relación:**  
  Es un archivo informativo/entregable que no afecta el funcionamiento del frontend. Está dirigido al instructor o revisor.

### `.gitkeep`
- **¿Para qué se usa?**  
  Archivo vacío que permite que Git rastree y mantenga la carpeta `data/` (y otras carpetas vacías) dentro del repositorio. Sin él, Git ignora directorios sin contenido.
- **Relación:**  
  No tiene relación funcional con el código; es solo una práctica de control de versiones.

### `README.md` (este archivo)
- **¿Para qué se usa?**  
  Explica la estructura, propósito y relaciones de todos los archivos del proyecto. Sirve como guía rápida para cualquier desarrollador que trabaje con este código.
- **Relación:**  
  Es documentación. No interactúa con los demás archivos ejecutables o de datos.

## Relación general del flujo de datos

1. El usuario abre `index.html` en el navegador.
2. `index.html` carga `styles.css` (aplicando estilos visuales).
3. `index.html` carga y ejecuta `app.js`.
4. `app.js` hace una petición para leer `data/players.json`.
5. Con los datos JSON, `app.js` genera dinámicamente el contenido HTML (tabla de ranking) dentro de `index.html`.
6. El resultado visual final es un ranking ordenado de jugadores MOBA con estilos aplicados.

## Notas técnicas importantes

- **Separación de responsabilidades:**  
  - HTML = estructura  
  - CSS = presentación  
  - JS = lógica e interacción  
  - JSON = datos  
  - Documentación (.md) = comunicación técnica
  
- **No hay estilos inline ni mezcla de CSS/JS en el HTML.** Cumple con la regla del enunciado.

- **El archivo `players.json` es tratado como fuente de datos externa**, permitiendo cambiar el ranking sin modificar el código HTML/JS.

- **El uso de `.gitkeep`** asegura que las carpetas `css/`, `js/` y `data/` se mantengan en el repositorio incluso si están vacías temporalmente.

- **La carpeta `nombre-apellido` (`edgar-sanchez`)** sigue el formato obligatorio y contiene **toda la solución**, sin modificar archivos fuera de ella.

- **Rama de trabajo:** Este código fue desarrollado en una rama personal creada desde `dev`. Sin modificar la rama del `main`.