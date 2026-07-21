# Ejercicio: Laboratorio de Fórmulas Químicas

## Alumno
Sergio Miranda

## Descripción del problema
El objetivo es procesar un conjunto de compuestos químicos para calcular su masa total y filtrar aquellos que presentan datos erróneos (componentes con 0 o menos gramos). Esto garantiza que el laboratorio trabaje únicamente con datos precisos.

## Razonamiento y solución
1. **Modelado**: Cada compuesto es un objeto con un nombre y un arreglo de `componentes` (cada uno con `simbolo` y `gramos`).
2. **Lógica de Validación**: 
   - Se utiliza `.every()` para verificar que todos los componentes de un compuesto tengan `gramos > 0`.
   - Los compuestos que no cumplen esta validación se consideran "incompletos" y se excluyen del reporte.
3. **Cálculo**: Se utiliza `.reduce()` para sumar el total de gramos de los componentes válidos.

## Evidencia de validación
*   **Caso Normal**: H2O con H:2g, O:16g -> Masa total: 18g.
*   **Caso Límite (Inválido)**: Compuesto X con A:0g, B:5g -> Detectado como incompleto y filtrado del resultado.
