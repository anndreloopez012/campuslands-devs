# Ejercicio 01 - Ranking de Escuadras Battle Royale
**Estudiante:** Maria Jose Montepeque Zet

## Explicación del Razonamiento
1. **Modularidad:** Separé la asignación de puntos por supervivencia en una función independiente (`obtenerPuntosPorPosicion`) para facilitar cambios futuros en las reglas del torneo.
2. **Procesamiento Eficiente:** Usé el método `.map()` para calcular el puntaje de cada escuadra de forma individual sin alterar el arreglo original.
3. **Ordenamiento:** Apliqué `.sort()` de manera descendente (`B - A`) para asegurar que el puntaje más alto lidere la tabla.

## Validación
Al ejecutar el archivo con Node.js, el sistema calcula correctamente los casos normales (como los 44 puntos de 'Nova') y maneja de forma segura los casos límite con valores en cero.