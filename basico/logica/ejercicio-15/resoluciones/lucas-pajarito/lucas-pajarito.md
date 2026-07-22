# Gestión de Costos de Escenas 3D

## Objetivo

Desarrollar un programa en JavaScript que permita registrar distintas escenas de un proyecto de modelado 3D, calcular el costo de producción de cada una, identificar las escenas con mayor inversión y obtener el costo total del proyecto.

---

## Funcionalidad del código

El programa realiza las siguientes tareas:

1. Registra un conjunto de escenas, donde cada una almacena la siguiente información:
   - Nombre de la escena.
   - Horas de modelado.
   - Horas de renderizado.
   - Cantidad de artistas involucrados.

2. Calcula el costo de producción de cada escena utilizando la siguiente fórmula:

   ```
   Costo = (Horas de Modelado × 40,000)
         + (Horas de Render × 25,000)
         + (Artistas × 120,000)
   ```

3. Filtra las escenas cuyo costo sea superior a **Q1,000,000**, permitiendo identificar aquellas que representan una mayor inversión dentro del proyecto.

4. Calcula el costo total del proyecto sumando el costo de todas las escenas registradas.

5. Identifica la escena más costosa comparando los costos individuales de cada una.

6. Presenta un reporte en consola con:
   - El costo de cada escena.
   - Las escenas cuyo costo supera el millón de quetzales.
   - El costo total del proyecto.
   - La escena con el mayor costo de producción.

---

## Resultado esperado

Al ejecutar el programa se obtiene:

- El costo individual de cada escena.
- Un listado de las escenas con costos superiores a Q1,000,000.
- El costo total del proyecto.
- La escena que representa la mayor inversión económica.

---

## Conclusión

Este ejercicio permitió aplicar el uso de arreglos de objetos, funciones, cálculos matemáticos, filtrado de información, acumulación de valores y búsqueda de elementos mediante JavaScript. Además, se reforzó la generación de reportes utilizando datos procesados automáticamente para facilitar el análisis de costos de un proyecto de modelado y renderizado 3D.