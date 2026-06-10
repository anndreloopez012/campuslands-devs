# Resolución: Ejercicio 02 - Inventario Táctico de Shooter

**Alumno:** Sergio Aju  
**Fecha:** 10 de junio de 2026

## 1. Descripción del problema
El objetivo de este ejercicio es gestionar un inventario de armas para un equipo de *shooter* competitivo, filtrando por munición disponible y categorizando según rareza para recomendar el mejor equipamiento.

## 2. Proceso de resolución
1. **Definición de datos:** Creé un arreglo de objetos que incluye `nombre`, `tipo`, `municion` y `rareza`.
2. **Filtrado:** Se implementó una lógica de filtrado para mostrar solo armas con 30 balas o más.
3. **Clasificación y Recomendación:** Se iteró sobre el inventario para asignar la propiedad `esRecomendada` a las armas de rareza `Epica`, `Legendaria` o `Rara`.
4. **Resumen:** Se generó un reporte en consola estructurado por tipo de arma.

## 3. Notas técnicas
- Se utilizó `.filter()` para asegurar que solo las armas aptas para combate lleguen al inventario final.
- Se implementó un algoritmo de recomendación basada en rareza para mejorar la toma de decisiones del jugador.
- Código estructurado para facilitar la lectura y mantenimiento futuro.
