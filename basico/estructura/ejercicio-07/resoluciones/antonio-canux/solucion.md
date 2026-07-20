# Resolución: Biblioteca de Ciencia Ficción

**Camper:** Antonio Canux

---

## 1. Estructura de Directorios (Solución Completa)

Para mantener una separación clara entre el contenido textual, los metadatos y los recursos visuales, la estructura del proyecto se organiza de la siguiente manera:

```text
scifi-library/
│
├── books/
│   ├── data/                 # Metadatos de los libros (Archivos JSON)
│   │   └── bk_001_dune.json
│   │
│   └── covers/               # Recursos visuales (Imágenes de portadas)
│       └── bk_001_dune.jpg
│
└── reviews/                  # Contenido generado por usuarios (Reseñas)
    └── rev_001_dune.md