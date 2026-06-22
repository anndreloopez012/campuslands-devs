# Ejercicio 03: Gestor de Party RPG

## Autor

Sergio Ajú  

## Descripción del Proyecto
Este script automatiza el análisis de una party de aventureros. Su función principal es evaluar si el poder de combate es suficiente para una mazmorra basándose en la fórmula: 
`Poder = (Nivel * 2) + Ataque + Defensa`.

**Ubicación:** `js/main.js`

## Lógica implementada
- **Modularidad:** El cálculo de poder y las recomendaciones de entrenamiento están aislados en funciones de flecha (arrow functions) para facilitar la mantenibilidad.
- **Validación:** Se estableció una constante `UMBRAL_PODER` de 60, permitiendo ajustar la dificultad global del sistema sin alterar la lógica de las funciones.
- **Reporte:** El sistema itera sobre el arreglo de personajes, clasificándolos instantáneamente y ofreciendo una ruta de mejora personalizada según su atributo más débil.

## Ejemplo de Salida
```text
> Aldric [Guerrero]: 90 pts - LISTO
> Finn [Arquero]: 38 pts - NECESITA ENTRENAR
   * Sugerencia: Potenciar DEFENSA