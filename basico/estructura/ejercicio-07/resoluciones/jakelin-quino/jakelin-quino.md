# Ejercicio 07 Estructura

## Estructura de capetas
``` text
basico/estructura/ejercicio-07/resoluciones/tu-nombre-apellido/
├── books/
│   ├── data/                          // información estructurada de libros (JSON)
│   │   └── libro-ejemplo.json
│   └── covers/                        // recursos visuales separados del contenido
│       └── (portadas: isbn.jpg)
└── reviews/                           // opiniones de usuarios, plantilla para estandarizar
    └── plantilla-resena.md
```

## Documentación de portadas
- Formato: [isbn].jpg (ej: 978-0450011849.jpg)
- Resolución recomendada: 500x750px
- Almacenar solo en books/covers/