# Presupuesto de Estudio de Animación 3D

Este ejercicio desarrolla una solución para calcular el presupuesto de producción de un proyecto de animación 3D. A partir de la información registrada para cada escena, el programa calcula automáticamente el costo de producción considerando las horas de modelado, las horas de renderizado y la cantidad de artistas involucrados.

Además, la solución identifica las escenas cuyo costo supera el presupuesto establecido, calcula el costo total del proyecto y determina cuál es la escena más costosa. Este tipo de procesamiento es habitual en estudios de animación y empresas audiovisuales para planificar recursos, estimar presupuestos y controlar costos de producción.

---

# Objetivo del ejercicio

Desarrollar una solución que permita calcular automáticamente el costo de producción de un conjunto de escenas pertenecientes a un proyecto de animación 3D.

La solución debe cumplir con los siguientes requisitos:

- Registrar las escenas del proyecto.
- Calcular el costo individual de cada escena.
- Detectar las escenas cuyo costo supera $1,000,000.
- Calcular el costo total del proyecto.
- Identificar la escena con el mayor costo de producción.

---

# Análisis del problema

Cada escena posee tres variables que influyen directamente en su costo:

- Horas dedicadas al modelado.
- Horas empleadas en el proceso de renderizado.
- Número de artistas participantes.

Cada uno de estos recursos posee un costo fijo.

Para obtener el presupuesto final es necesario aplicar la fórmula de costos sobre cada escena y posteriormente realizar diferentes operaciones estadísticas sobre los resultados obtenidos.

---

# Lógica de la solución

El algoritmo implementado sigue el siguiente flujo:

1. Registrar todas las escenas en un arreglo de objetos.
2. Recorrer cada escena utilizando `map()`.
3. Calcular el costo individual aplicando la fórmula indicada.
4. Generar un nuevo arreglo con los costos calculados.
5. Filtrar las escenas cuyo costo sea superior a $1,000,000.
6. Calcular el costo total utilizando `reduce()`.
7. Obtener la escena más costosa.
8. Mostrar los resultados mediante tablas.

Este enfoque mantiene intactos los datos originales y facilita el procesamiento de la información.

---

# Herramientas utilizadas

## JavaScript

Toda la lógica fue desarrollada utilizando JavaScript moderno.

Durante la implementación se emplearon las siguientes estructuras y métodos:

- Objetos
- Arrays
- Arrow Functions
- map()
- filter()
- reduce()
- console.table()

Estas herramientas permiten construir soluciones claras, reutilizables y fáciles de mantener.

---

# Explicación técnica

## map()

Recorre todas las escenas y genera un nuevo arreglo con el costo calculado para cada una.

Este método evita modificar el arreglo original.

---

## filter()

Permite obtener únicamente aquellas escenas cuyo costo supera el presupuesto establecido.

---

## reduce()

Fue utilizado para realizar dos operaciones distintas:

- Calcular el costo total del proyecto.
- Obtener la escena con el mayor costo de producción.

---

# Fórmula utilizada

Para cada escena se aplica la siguiente expresión:

```text
Costo =
(horasModelado × 40,000)
+
(horasRender × 25,000)
+
(artistas × 120,000)
```

---

# Solución implementada

Cada escena es procesada individualmente para calcular su presupuesto.

Posteriormente el programa genera un resumen general del proyecto mostrando:

- costo individual por escena;
- escenas con presupuesto superior a $1,000,000;
- costo total del proyecto;
- escena con mayor costo.

Esta información permite identificar fácilmente dónde se concentran los mayores recursos del proyecto.

---

# Código fuente

El archivo `solucion.js` contiene la implementación completa del algoritmo.

---

# Validación de la solución

## Caso normal

Escena:

- Modelado: 10 horas
- Render: 8 horas
- Artistas: 3

Resultado esperado:

```text
Costo = Q960,000
```

---

## Caso límite

Escena:

- Modelado: 0 horas
- Render: 0 horas
- Artistas: 0

Resultado esperado:

```text
Costo = Q0
```

El algoritmo procesa correctamente la información sin generar errores.

---

# Complejidad del algoritmo

El recorrido mediante `map()` y `filter()` posee una complejidad:

```text
O(n)
```

El cálculo del costo total y la búsqueda de la escena más costosa mediante `reduce()` también requieren un recorrido lineal.

Por lo tanto, la complejidad temporal total permanece en:

```text
O(n)
```

---

# Conclusión

Este ejercicio permitió aplicar operaciones matemáticas, procesamiento de arreglos y técnicas de análisis de datos utilizando JavaScript.

La solución demuestra cómo automatizar cálculos presupuestarios, detectar elementos críticos y generar indicadores útiles para la toma de decisiones dentro de proyectos de animación 3D, empleando buenas prácticas de programación y estructuras de datos fácilmente escalables.

---

## Autor

**Carlos Velasco**