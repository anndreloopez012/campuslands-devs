# Ejercicio: Gestión de una Maratón de Películas

## Objetivo

Desarrollar un programa en JavaScript que permita administrar una colección de películas utilizando los principales métodos de manipulación de arreglos y estructuras de control.

Durante el ejercicio se realizará el filtrado de películas, la construcción de una maratón con un límite de tiempo, el cálculo del total de sustos y la presentación de la lista final.

---

# Objetivos de aprendizaje

Al finalizar este ejercicio podrás:

- Crear arreglos de objetos.
- Filtrar información mediante `filter()`.
- Recorrer arreglos con `for...of`.
- Acumular información utilizando `reduce()`.
- Aplicar restricciones de tiempo.
- Mostrar información organizada en la consola.

---

# Estructura del objeto

Cada película contiene la siguiente información:

| Propiedad | Descripción |
|-----------|-------------|
| titulo | Nombre de la película |
| duracionMin | Duración en minutos |
| sustos | Cantidad estimada de escenas de susto |
| rating | Calificación de la película |

Ejemplo:

```javascript
{
    titulo: "El Conjuro",
    duracionMin: 112,
    sustos: 18,
    rating: 7.5
}
```

---

# Paso 1. Crear la colección de películas

Se define un arreglo llamado `peliculas` con varios objetos.

```javascript
const peliculas = [
    ...
];
```

Cada objeto almacena la información necesaria para realizar los cálculos posteriores.

---

# Paso 2. Filtrar películas con rating mayor o igual a 7

Se utiliza el método `filter()` para obtener únicamente las películas con una calificación igual o superior a **7**.

```javascript
const peliculasRecomendadas = peliculas.filter(
    pelicula => pelicula.rating >= 7
);
```

Este filtro permite seleccionar únicamente las películas mejor valoradas.

---

# Paso 3. Construir una maratón de máximo 360 minutos

Se recorren las películas filtradas y se agregan a una nueva lista mientras la suma de sus duraciones no supere los **360 minutos** (6 horas).

```javascript
let tiempo = 0;
const maraton = [];

for (const pelicula of peliculasRecomendadas) {

    if (tiempo + pelicula.duracionMin <= 360) {
        maraton.push(pelicula);
        tiempo += pelicula.duracionMin;
    }

}
```

Este procedimiento garantiza que la maratón respete el tiempo máximo establecido.

---

# Paso 4. Calcular el total de sustos

Se utiliza `reduce()` para sumar la cantidad de sustos de todas las películas incluidas en la maratón.

```javascript
const totalSustos = maraton.reduce(
    (total, pelicula) => total + pelicula.sustos,
    0
);
```

El resultado representa la cantidad total de escenas de susto durante toda la maratón.

---

# Paso 5. Mostrar la lista final

Finalmente se imprime la lista de películas seleccionadas junto con:

- Título
- Duración
- Rating

Además, se muestra:

- Duración total de la maratón.
- Total de sustos acumulados.

---

# Métodos y estructuras utilizadas

| Método / Estructura | Función |
|---------------------|---------|
| `filter()` | Filtrar películas por calificación |
| `for...of` | Recorrer el arreglo y controlar la duración máxima |
| `reduce()` | Sumar el total de sustos |
| `console.table()` | Mostrar datos en formato tabular |
| `forEach()` | Mostrar la lista final de películas |

---

# Ejecución

Guardar el archivo como:

```
peliculas.js
```

Ejecutar desde la terminal con Node.js:

```bash
node peliculas.js
```

---

# Salida esperada

El programa mostrará:

1. El catálogo completo de películas.
2. Las películas con un **rating mayor o igual a 7**.
3. La maratón seleccionada con un máximo de **360 minutos**.
4. El total de sustos acumulados.
5. La lista final de películas junto con la duración total de la maratón.

---

# Resultado esperado

Al finalizar este ejercicio habrás practicado la manipulación de arreglos de objetos utilizando `filter()`, `reduce()`, `for...of` y `forEach()`. También aprenderás a aplicar restricciones de tiempo y a generar un resumen de datos para construir una maratón de películas de forma organizada y eficiente.
