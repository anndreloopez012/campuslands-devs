## Descripción

Se creó una estructura básica para un proyecto web separando correctamente HTML, CSS, JavaScript y archivos de datos.

El objetivo fue mantener una organización clara y evitar mezclar estilos o scripts dentro del archivo HTML.

---

# Estructura del Proyecto

```plaintext id="r9m2qp"
.
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── app.js
└── data/
    └── players.json
```

---

# Descripción de Archivos

## index.html

Archivo principal de la página web.

Desde este archivo se conectan los estilos y el código JavaScript.

---

## css/styles.css

Contiene todos los estilos del proyecto.

Se evitó escribir estilos directamente dentro del HTML para mantener una mejor organización del código.

---

## js/app.js

Archivo encargado de la lógica y funcionamiento del proyecto.

Aquí se pueden agregar funciones, eventos y conexión con los datos del archivo JSON.

---

## data/players.json

Archivo que almacena información en formato JSON.

Puede utilizarse para guardar datos de jugadores, estadísticas o configuraciones del sistema.

---

# Notas Técnicas

* Se separó HTML, CSS y JavaScript para mantener buenas prácticas.
* No se utilizaron estilos inline dentro del HTML.
* La carpeta `data` permite organizar archivos JSON fuera del código principal.
* La estructura facilita el mantenimiento y escalabilidad del proyecto.