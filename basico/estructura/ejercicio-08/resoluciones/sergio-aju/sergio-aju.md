
# Resolución de Ejercicio: Gestión de Menú Urbano

**Autor:** 

Sergio Aj

## 1. Introducción y Razonamiento

El objetivo de este ejercicio es establecer una estructura de archivos profesional y escalable para un sistema de gestión de menús. La premisa principal es la **separación de responsabilidades** (Separation of Concerns): los datos (JSON) deben estar separados de los activos visuales (imágenes) y de la documentación lógica (reglas de negocio).

He optado por una jerarquía plana pero categorizada, lo que facilita el mantenimiento, las copias de seguridad y la integración con sistemas de control de versiones sin colapsar el repositorio con archivos binarios innecesarios en la lógica.

## 2. Estructura del Proyecto

La solución se encuentra organizada bajo el directorio `basico/estructura/ejercicio-08/resoluciones/sergio-miranda/`. La estructura final de directorios es la siguiente:

```text
sergio-aju/
├── assets/
│   └── photos/
│       ├── platos/
│       ├── bebidas/
│       └── combos/
├── docs/
│   └── reglas-precios.md
├── menu/
│   ├── platos.json
│   ├── bebidas.json
│   └── combos.json
├── scripts/
│   └── validador.js
└── sergio-aju.md

```

## 3. Comandos de Git Utilizados

Para mantener el flujo de trabajo correcto siguiendo las instrucciones de la rama `dev`, realicé los siguientes pasos:

1. **Creación de rama de trabajo:**
`git checkout dev`
`git checkout -b feature/estructura-menu-sergio-miranda`
2. **Creación de directorios:**
`mkdir -p assets/photos/platos assets/photos/bebidas assets/photos/combos`
`mkdir -p docs menu scripts`
3. **Verificación de estado:**
`git status` (utilizado frecuentemente para asegurar que los archivos estaban en la ruta correcta).
4. **Confirmación de cambios:**
`git add .`
`git commit -m "feat: estructura inicial de directorios y archivos de menu"`


## 5. Justificación: Separación de Imágenes y Datos

No conviene mezclar imágenes con datos por tres razones críticas:

* **Rendimiento del Repositorio:** Los archivos binarios (imágenes) ocupan mucho espacio. Si los mezclamos en las mismas carpetas que el código, el historial de Git se vuelve extremadamente pesado y lento de clonar.
* **Caché y CDN:** En producción, las imágenes suelen servirse desde un almacenamiento en la nube (S3, CDN) optimizado para archivos estáticos, mientras que los archivos JSON se sirven desde una API o servidor de aplicaciones.
* **Mantenibilidad:** Separarlos permite realizar tareas de mantenimiento (como optimizar el peso de las imágenes o cambiar el formato de los JSON) de forma independiente y sin riesgo de romper la estructura del otro.

## 6. Validación

* **Caso normal:** Los datos se leen correctamente desde los archivos JSON, haciendo referencia a los paths de las fotos.
* **Caso límite:** Se verificó que los directorios vacíos contengan un archivo `.gitkeep` (según las reglas) para asegurar que el sistema de control de versiones los rastree correctamente.