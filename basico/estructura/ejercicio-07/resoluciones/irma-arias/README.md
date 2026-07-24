
# Ejercicio 007: Biblioteca de Ciencia Ficción

* **Estudiante:** Irma Yaneht Arias García
* **Temática:** Organización estructurada de una colección digital de literatura de ciencia ficción (datos, portadas y reseñas).

## 📌 Razonamiento y Proceso
1. **Análisis de Requisitos:** Se diseñó una arquitectura de directorios que separa estrictamente la información estructurada de los recursos multimedia y los comentarios críticos.
2. **Convención para Nombrar Portadas:**
   - Formato obligatorio: `titulo-autor-portada.jpg` (Ejemplo: `dune-frankherbert-portada.jpg`). Se usan minúsculas, sin espacios ni caracteres especiales para asegurar compatibilidad web y de control de versiones.
3. **Separación de Contenido y Recursos:**
   - **`libros/datos/`**: Almacena los metadatos estructurados en formato JSON.
   - **`libros/portadas/`**: Contiene exclusivamente los archivos gráficos de las cubiertas.
   - **`reseñas/`**: Aloja las opiniones críticas y plantillas de lectura en Markdown.

## 🗂️ Árbol de Carpetas

basico/
└── estructura/
    └── ejercicio-07/
        └── resoluciones/
            └── irma-arias/
                ├── libros/
                │   ├── datos/
                │   │   └── libro.json
                │   └── portadas/
                ├── reseñas/
                │   └── plantilla-resena.md
                └── README.md