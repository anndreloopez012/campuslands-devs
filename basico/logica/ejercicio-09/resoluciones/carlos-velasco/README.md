# Playlist para entrenamiento de kickboxing

## Gestión y Validación de Playlist Musical (JS)

Este script implementa un proceso de procesamiento de datos para transformar una lista de canciones crudas en una *playlist* curada, categorizando su intensidad basada en el *tempo* (BPM) y validando si la duración total es apta para un tiempo de ejercicio definido.

* **Descripción del proceso:**
* **Filtrado:** Se depura el catálogo original excluyendo canciones con un BPM menor o igual a 135.
* **Categorización (Mapeo):** Se enriquece cada objeto con una nueva propiedad `intensidad` (media, alta o explosiva) calculada según rangos específicos de BPM.
* **Cálculo acumulativo:** Se realiza una reducción del *array* para obtener la suma total de segundos, la cual se convierte a minutos para facilitar la lectura.
* **Validación:** Se determina mediante una expresión booleana si la duración total está dentro del rango permitido (15 a 25 minutos).


* **Tecnologías:**
* JavaScript (ES6+).
* Funciones de orden superior (`filter`, `map`, `reduce`).



### Lógica del Código

```javascript
// 1. Filtrado: Solo canciones con ritmo energético (> 135 BPM)
const filtradas = canciones.filter(c => c.bpm > 135);

// 2. Mapeo: Clasificación de intensidad basada en rangos de BPM
const playlist = filtradas.map(c => {
  let intensidad = "";
  if (c.bpm < 150) intensidad = "media";
  else if (c.bpm < 165) intensidad = "alta";
  else intensidad = "explosiva";
  return { ...c, intensidad }; // Operador spread para conservar datos originales
});

// 3. Reducción y Conversión: Cálculo del tiempo total
const totalSegundos = playlist.reduce((sum, c) => sum + c.duracionSeg, 0);
const totalMinutos = totalSegundos / 60;

// 4. Validación: Verificación de condiciones de tiempo
const esValida = totalMinutos >= 15 && totalMinutos <= 25;

```

**Evidencia**

* El código procesa una lista de 5 canciones, filtra aquellas de alto impacto, etiqueta su intensidad técnica y valida si la suma de sus duraciones cumple con un objetivo de sesión entre 15 y 25 minutos.

**Estructura del Proyecto:**

```plaintext
proyecto-playlist/
├── app.js          # Lógica de procesamiento de datos
└── README.md       # Documentación del ejercicio

```

Hecho por:
Carlos Velasco
