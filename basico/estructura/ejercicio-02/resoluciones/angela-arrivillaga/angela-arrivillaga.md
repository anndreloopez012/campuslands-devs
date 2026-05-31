# Solución de Ejercicio 02 - Estructura Frontend Ranking eSports

**Estudiante:** Angela Arrivillaga  
**Nivel:** Básico Retador  

## 🧠 Explicación del Razonamiento
Para resolver el problema de forma profesional, se fragmentó la aplicación en responsabilidades únicas:
1. **Datos (`data/players.json`)**: Contiene la persistencia estática estructurada en formato clave-valor para los jugadores MOBA.
2. **Presentación (`index.html`)**: Actúa meramente como el esqueleto semántico. Los estilos se extrajeron por completo para evitar malas prácticas de código embebido.
3. **Diseño (`css/styles.css`)**: Centraliza la paleta de colores oscura, óptima para entornos gaming.
4. **Comportamiento (`js/app.js`)**: Implementa una estructura modular asíncrona mediante `fetch` preparada para consumir los datos de manera limpia.

## 🔗 Conexión de Archivos
- El archivo `index.html` enlaza la hoja de estilos en la cabecera (`<head>`) mediante la ruta relativa `css/styles.css`.
- El script de JavaScript se carga al final del cuerpo (`<body>`) mediante `js/app.js` para asegurar que el DOM esté disponible antes de la ejecución.
- `js/app.js` consume de manera interna mediante peticiones HTTP relativas el archivo `data/players.json`.

## 🛠️ Notas Técnicas y Validación
- Se validaron estados extremos utilizando un bloque `try/catch` para manejar fallos de conexión en la carga de archivos.
- Se implementó un árbol de carpetas estandarizado que emula proyectos reales de producción a escala.