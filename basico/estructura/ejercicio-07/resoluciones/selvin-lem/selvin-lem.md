# Biblioteca de ciencia ficción

## Planteamiento del problema
Se requería organizar una colección digital de libros separando datos, portadas y reseñas, con documentación de convenciones y una plantilla reutilizable.

selvin-lem/
│
├── selvin-lem.md                   # Documentación técnica del proyecto y resoluciones
│
├── books/
│   ├── data/                              # Capa de datos estructurados de cada libro
│   │   └── ejemplo-libro.json             # Ejemplo de ficha JSON de un libro
│   │
│   └── covers/                            # Recursos de portadas
│       ├── convenciones-nombrado.md       # Estándar de nombrado para archivos de portada
│       └── .gitkeep                       # Asegura que la carpeta vacía se suba al repositorio
│
└── reviews/                               # Reseñas de los libros
    └── plantilla-reseña.md                # Plantilla base para redactar una reseña