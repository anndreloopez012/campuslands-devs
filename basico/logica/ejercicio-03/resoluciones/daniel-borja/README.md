# Solución Ejercicio 03 GIT

## Entendimiento

Se deben de preparar los personajes para un juego de RPG. Se necesita calcular por cada uno:
    Nombre
    Clase
    Nivel
    Ataque
    Defensa

    Adicionalmente, 
        Poder total
        Debiles
        Mejoras
        Mostrar Reporte de toda la party

## Explicación del Razonamiento

1. Estructura de Party: Almacené los atributos clave exigidos en un arreglo de objetos para facilitar el procesamiento por lotes usando métodos iterativos (`forEach`).
2. Funciones: Separé la lógica que decide qué atributo entrenar en una función independiente (`sugerirMejora`). Esto hace que el código sea limpio y cumpla con el principio de responsabilidad única.
3. Reporte: Utilicé `console.table()` al final del reporte para que el instructor o el líder de desarrollo visualice de forma inmediata y ordenada las sugerencias de entrenamiento de la party.
