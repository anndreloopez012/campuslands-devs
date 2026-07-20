# Ejercicio 07 - Estructura

## Análisis de Proyecto
Se necesita preparar una base de proyecto para un proyecto relacionado a libros y ciencia ficcion. Organizar una colección digital de libros por datos, portadas y reseñas.

Requerimientos
1. Crea books/data, books/covers y reviews.
2. Incluye un ejemplo de JSON para un libro.
3. Documenta cómo nombrar portadas.
4. Crea una plantilla de reseña.
5. Mantén separación entre contenido y recursos.


## Resolución
biblioteca-scifi/
├── daniel-borja.md                   <-- Archivo entregable de la solución
├── books/
│   ├── data/
│   │   └── biblioteca.json           <-- Archivo JSON con la colección de libros
│   └── covers/
│       ├── 978-0451450523.jpg        <-- Ejemplo usando el estándar de ISBN
│       └── dune-herbert-1965.jpg     <-- Ejemplo alternativo usando Slug semántico
└── reviews/
    └── plantilla.review.md           <-- Estructura base para las opiniones editoriales