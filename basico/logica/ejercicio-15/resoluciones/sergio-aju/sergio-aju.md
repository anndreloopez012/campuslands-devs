# Presupuesto de Estudio de Animación 3D

## Alumno
* **Nombre:** Sergio Miranda

## 1. Explicación del Problema y Razonamiento
El problema consiste en calcular y analizar los costos de producción de un estudio de animación 3D basándose en las horas de modelado, horas de render y la cantidad de artistas asignados por cada escena. 

Para resolverlo, se estructuró el código en JavaScript siguiendo estos pasos lógicos:
1. **Definición de Tarifas y Datos:** Se establecieron constantes con los costos por unidad (modelado, render y artistas) y un arreglo con objetos que representan cada escena del proyecto.
2. **Cálculo Individual:** Mediante la función `calcularCostoEscena` y el método `.map()`, se multiplica cada recurso por su respectiva tarifa y se suma para obtener el costo total por escena.
3. **Filtro y Acumulación:** Se filtraron las escenas cuyo costo supera el millón mediante `.filter()` y se calculó el costo total del proyecto sumando los costos con `.reduce()`.
4. **Búsqueda del Máximo:** Se recorrió el arreglo para identificar la escena más costosa del proyecto.

---