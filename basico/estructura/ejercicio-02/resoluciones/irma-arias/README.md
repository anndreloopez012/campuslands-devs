
# Ejercicio 002: Proyecto Frontend de Ranking Esports (MOBA)

* **Estudiante:** Irma Yaneht Arias García
* **Temática:** Interfaz web modular para clasificación de jugadores de videojuegos MOBA.

## 📌 Razonamiento y Proceso
1. **Separación de Responsabilidades:** Se estructuró el proyecto dividiendo los componentes de forma limpia: `index.html` para la estructura semántica, carpetas separadas para estilos (`css/styles.css`), lógica de comportamiento (`js/app.js`) y datos estructurados (`player.json`).
2. **Conexión entre archivos:** 
   - El archivo HTML enlaza la hoja de estilos en el `<head>` mediante la etiqueta `<link>`.
   - El script de JavaScript se carga al final del `<body>` mediante `<script>` para manipular el DOM de manera segura.
   - El archivo `player.json` provee la fuente de datos que consume asíncronamente el script mediante la API `fetch`.

## 🛠️ Notas Técnicas y Validación
* **Validación de Datos:** Se implementó una función de ordenamiento en JavaScript (`.sort()`) para organizar automáticamente el ranking en función de la puntuación de cada competidor, garantizando un caso de uso dinámico y robusto.
* **Buenas Prácticas:** No se incluyeron estilos en línea y se mantuvieron nombres de variables claros y descriptivos en todo el código.

## 🗂️ Árbol de Carpetas

basico/
└── estructura/
    └── ejercicio-02/
        └── resoluciones/
            └── irma-arias/
                ├── css/
                │   └── styles.css
                ├── js/
                │   └── app.js
                ├── index.html
                ├── player.json
                └── README.md