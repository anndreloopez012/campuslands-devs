# Solución: Inventario Táctico de Shooter

**Desarrollador:** Gemini Code Assist  
**Módulo:** Lógica de Programación  

## Explicación del Razonamiento

Para resolver este problema, apliqué un enfoque de **transformación de datos limpia**:

1.  **Inmutabilidad:** Al procesar el arreglo original, utilicé `.filter()` y `.map()` para crear una nueva colección. Esto evita efectos secundarios no deseados en la fuente de datos original.
2.  **Lógica de Recomendación:** En lugar de múltiples `if`, utilicé un arreglo de rarezas válidas (`["rara", "épica"]`) y el método `.includes()`. Esto hace que el código sea más fácil de extender si en el futuro se desea recomendar otras rarezas (como "legendaria").
3.  **Agrupamiento Eficiente:** Utilicé `.reduce()` para categorizar las armas en un solo paso. Esta es una técnica de alto rendimiento que genera un objeto donde las llaves son los tipos de armas, facilitando la impresión del resumen final.
4.  **Validación de Tipos:** El ejercicio pedía separar específicamente rifles, pistolas y francotiradores. Implementé una constante `categoriasValidas` para asegurar que el resumen solo incluya lo solicitado, ignorando otros tipos como "subfusiles".

## Evidencia de Validación

Al ejecutar el código, se obtiene la siguiente salida:
```text
=== RECOMENDACIÓN DE CARGA DE COMBATE ===
> CATEGORÍA: RIFLE
  - AK-47 | Munición: 30 | Rareza: épica [★ RECOMENDADA ★]
  - M4A4 | Munición: 30 | Rareza: rara [★ RECOMENDADA ★]
> CATEGORÍA: PISTOLA
  - Deagle | Munición: 35 | Rareza: épica [★ RECOMENDADA ★]
> CATEGORÍA: FRANCOTIRADOR
  - Barrett M82 | Munición: 40 | Rareza: rara [★ RECOMENDADA ★]
```
*(Nota: El Scar-H fue filtrado por tener 25 de munición, y el MP5 fue ignorado por no ser de los tipos principales solicitados).*