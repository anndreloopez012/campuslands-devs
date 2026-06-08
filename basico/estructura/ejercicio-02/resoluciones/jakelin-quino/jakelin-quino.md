# Ejercicio 2: Videojuegos MOBA

- **Autor:** Jakelin Quino
---

## Estructura del Proyecto

```text
jakelin-quino/
├── css/
│   └── styles.css
├── data/
│   └── players.json
├── js/
│   └── app.js
├── index.html
└── jakelin-quino.md
```
## Conexión entre archivos
+ index.html + styles.css = 
```<link rel="stylesheet" href="css/styles.css">``` antes de cerrar la etiqueta ```<head>```.
+ idenx.html + app.js = 
```<script src="js/app.js"></script>``` antes de cerrar la etiqueta ```<body>```.
+ app.js + players.json = uso de ```fetch('data/players.json')``` para obtener datos.
