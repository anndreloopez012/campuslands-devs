# Documentación del Proyecto: Ranking Esports

**Estudiante:** Evelyn Barrios

## Análisis del Problema
Se requería una estructura modular para un ranking de videojuegos MOBA, asegurando que la lógica, el diseño y los datos estuvieran desacoplados.

## Conexión de Archivos
- **index.html -> styles.css**: Se usa `<link>` en el head para cargar lo visual antes que el contenido.
- **index.html -> app.js**: Se usa `<script type="module">` para manejar la lógica de forma asíncrona.
- **app.js -> players.json**: Se utiliza la API `fetch` para consumir los datos de forma dinámica.


## Validación
La estructura de carpetas sigue este árbol:
```text
evelyn-barrios/
├── css/ (Estilos) | ├── js/ (Lógica) | ├── data/ (Datos) | └── index.html (Estructura)
```