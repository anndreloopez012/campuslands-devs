# Ejercicio: Tabla de Clasificación de Fútbol Sala

## Autor

Sergio Ajú

**Fecha:** 18 de junio de 2026

## Descripción
Este programa calcula la tabla de posiciones de una liga de fútbol sala basándose en los resultados de cada equipo. La lógica implementada procesa las estadísticas (victorias, empates, derrotas y goles) para determinar el ranking final.

## Razonamiento
1. **Modelado**: Se definieron los equipos como objetos para facilitar la manipulación de sus datos.
2. **Cálculo**:
   - `Puntos`: (Victorias * 3) + Empates.
   - `Diferencia`: Goles a favor - Goles en contra.
3. **Ordenamiento**: Se utilizó el método `.sort()` de JavaScript, priorizando los puntos y, en caso de empate, utilizando la diferencia de goles.

## Evidencia de Validación
- Caso normal: Equipos con puntajes variados.
- Caso límite: Dos equipos con mismos puntos pero diferente diferencia de goles (se verifica que el de mejor diferencia quede arriba).