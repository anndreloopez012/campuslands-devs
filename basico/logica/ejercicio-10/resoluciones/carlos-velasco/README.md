# Maratón de películas de miedo

## Planificador de Maratón de Películas (JS)

Este script automatiza la selección de películas de terror para crear una maratón personalizada. Aplica filtros de calidad y una lógica de acumulación inteligente para no exceder un límite de tiempo definido.

* **Descripción del proceso:**
* **Filtrado:** Se seleccionan únicamente las películas con un *rating* igual o superior a 7.0.
* **Selección inteligente:** Utiliza un acumulador (`reduce`) para añadir películas a una lista mientras el tiempo total acumulado no supere el umbral de 360 minutos.
* **Generación de reporte:** Transforma los datos procesados en un formato de texto estructurado y legible.


* **Tecnologías:**
* JavaScript (ES6+).
* Programación funcional (`filter`, `reduce`).

### Lógica del Código

```javascript
// 1. Filtrar películas de alta calidad
const calificadas = peliculas.filter(p => p.rating >= 7);

// 2. Acumular películas respetando el límite de tiempo (360 min)
const maraton = calificadas.reduce((acc, p) => {
  if (acc.tiempoTotal + p.duracionMin <= limite_tiempo) {
    acc.peliculas.push(p);
    acc.tiempoTotal += p.duracionMin;
    acc.sustosTotales += p.sustos;
  }
  return acc;
}, { peliculas: [], tiempoTotal: 0, sustosTotales: 0 }); 

```

### Explicación de la Lógica

Este script destaca por el uso avanzado del método `reduce` para transformar un *array* en un **objeto de estado acumulado**:

1. **Filtrado (`filter`)**: Establece un estándar de calidad inicial, eliminando las películas que no alcanzan el *rating* de 7.0 antes de procesar el tiempo.
2. **Acumulación condicional (`reduce`)**:
* El valor inicial del acumulador es `{ peliculas: [], tiempoTotal: 0, sustosTotales: 0 }`.
* Dentro de cada iteración, se evalúa si `tiempoTotal + duracionMin` excede `limite_tiempo`. Solo si la suma es menor o igual al límite, la película es agregada a la lista y se actualizan los contadores.


3. **Reporte estructurado**: La función `crearReporteMaraton` desestructura el objeto generado para organizar la información en un formato de lista de texto, ideal para una interfaz de consola o logs de sistema.


**Evidencia**

* El código evalúa el catálogo original, descarta las películas con bajo *rating* y conforma una estructura que calcula tiempo y sustos totales de manera simultánea durante la selección.

**Estructura del Proyecto:**

```plaintext
proyecto-maraton/
├── maraton.js        
└── README.md        

```

Hecho por:
Carlos Velasco

