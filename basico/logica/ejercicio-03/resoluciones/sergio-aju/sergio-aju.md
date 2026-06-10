# Resolución: Ejercicio 03 - Gestor de Personajes RPG

**Alumno:** Sergio Aju  
**Fecha:** 10 de junio de 2026

## 1. Descripción del problema
Desarrollar un sistema para gestionar una *party* de personajes en un juego RPG, calculando su "Poder Total" y detectando aquellos personajes que necesitan entrenamiento para mejorar sus estadísticas de combate.

## 2. Proceso de resolución
1. **Modelado:** Creé objetos con atributos (`nombre`, `clase`, `nivel`, `ataque`, `defensa`).
2. **Cálculo de Poder:** Implementé la fórmula `(nivel * 2) + ataque + defensa` para obtener el poder global.
3. **Análisis:** Filtramos los personajes con poder menor a 60.
4. **Optimización:** Diseñé una función que compara `ataque` vs `defensa` para sugerir qué atributo debe entrenar el personaje.

## 3. Notas técnicas
- El sistema utiliza `Array.map()` para calcular el poder de toda la *party* automáticamente.
- Se implementó una lógica de comparación (IF/ELSE) para sugerir mejoras basadas en la debilidad del personaje.

