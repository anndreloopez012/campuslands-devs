
# Ejercicio 008: Gestión de Menú Urbano

* **Estudiante:** Irma Yaneht Arias García
* **Temática:** Organización estructurada de un proyecto gastronómico (menús, precios, combinaciones y recursos multimedia).

## 📌 Razonamiento y Proceso
1. **Análisis de Requisitos:** Se dividió la arquitectura de carpetas separando adecuadamente los tipos de alimentos (`menus/platos`, `menus/bebidas`, `menus/combinaciones`), los recursos visuales, la documentación y la lógica de validación.
2. **¿Por qué no conviene mezclar imágenes con datos?**
   - **Rendimiento y Escalabilidad:** Los archivos de datos (`.json`) son ligeros y se procesan rápidamente en memoria. Mezclarlos con imágenes pesadas (`.jpg`, `.png`) ralentiza las consultas, satura el control de versiones (Git) y dificulta el mantenimiento del código.
   - **Separación de Responsabilidades:** Los datos deben residir en esquemas estructurados, mientras que los recursos multimedia pertenecen a directorios de activos para optimizar su distribución en servidores o CDN.

## 🗂️ Árbol de Carpetas

basico/
└── estructura/
    └── ejercicio-08/
        └── resoluciones/
            └── irma-arias/
                ├── menus/
                │   ├── platos/
                │   │   └── platos.json
                │   ├── bebidas/
                │   └── combinaciones/
                ├── recursos/
                │   └── fotos/
                ├── docs/
                │   └── reglas-precios.md
                ├── scripts/
                │   └── validadorMenu.js
                └── README.md