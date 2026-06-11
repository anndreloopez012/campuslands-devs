# 🏆 Proyecto Frontend: Ranking Esports — Allison Vargas

## 🎮 Temática
Videojuegos MOBA. Interfaz dinámica y responsiva que muestra un top de jugadores ordenados automáticamente por su porcentaje de victorias (*winrate*).

---

## 📂 Estructura de Carpetas
```text
allison-vargas/
├── 📁 css/
│   └── 📄 styles.css      # Estilos con enfoque neón futurista
├── 📁 data/
│   └── 📄 players.json    # Datos crudos de los jugadores
├── 📁 js/
│   └── 📄 app.js          # Lógica, cálculos matemáticos y DOM
├── 📄 index.html          # Estructura semántica base
└── 📄 allison-vargas.md   # Documentación del proyecto

```

---

## 🔗 Conexión de Archivos

* **`players.json`** ➔ Provee la base de datos de los competidores.
* **`app.js`** ➔ Realiza un `fetch` al JSON, procesa las estadísticas e inyecta las filas dinámicamente en el HTML.
* **`styles.css`** ➔ Aplica la capa de diseño "cyberpunk" a las etiquetas estructurales y clases generadas por JS.

---

## 🧠 Proceso de Pensamiento

1. **Entrada:** Extracción limpia de la información estructurada desde el archivo JSON.
2. **Proceso:** Implementación de funciones flecha (`const`) para calcular el promedio de rendimiento y ordenar el arreglo de forma descendente.
3. **Salida:** Renderizado controlado en el DOM para asegurar una experiencia gaming fluida.

---

## ⚙️ Notas Técnicas

* **Servidor Local:** Es obligatorio usar la extensión **Live Server** en VS Code para que el navegador permita la petición asíncrona (`fetch`) sin bloquearse por políticas de seguridad (CORS).
* **Efecto Podio:** Se añadieron selectores dinámicos en CSS para cambiar el color de los tres primeros puestos de forma automática.

---

## 🧪 Validación de Casos Límite

* **Caso Normal:** Los jugadores se ordenan correctamente de mayor a menor porcentaje.
* **Control de División por Cero:** Si un jugador tiene `0 victorias` y `0 derrotas`, el sistema devuelve `0%` automáticamente en lugar de romper la aplicación con un error de tipo `NaN`.
* **Arreglo Vacío:** Si la fuente de datos se encuentra limpia y sin registros, la interfaz despliega un aviso controlado al usuario.
