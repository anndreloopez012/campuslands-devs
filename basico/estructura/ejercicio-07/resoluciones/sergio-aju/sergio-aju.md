# Ejercicio 07: Biblioteca Digital de Ciencia Ficción

**Autor:** 

Sergio Ajú

**Módulo:** 

Estructura de Proyectos

## Descripción
Propuesta de arquitectura para organizar una colección de libros, optimizando la separación entre datos estructurados (JSON), recursos multimedia (portadas) y contenido textual (reseñas).

## Estructura de Directorios
```text
sergio-aju/
├── books/
│   ├── data/
│   │   └── dune.json         # Datos estructurados del libro
│   └── covers/
│       └── dune-cover.jpg    # Portada (Convención: titulo-cover.ext)
├── reviews/
│   └── dune-review.md        # Plantilla de reseña
└── README.md