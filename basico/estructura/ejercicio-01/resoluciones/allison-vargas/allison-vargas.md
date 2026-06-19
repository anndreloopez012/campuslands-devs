# ✨ 👾 Resolución: Ejercicio 01 - Estructura de Proyecto 👾 ✨

🌟 **Estudiante:** Allison Rocio Vargas Mejias  
⚡ **Dificultad:** Básica retadora  
🎮 **Temática:** Videojuegos de acción y aventura  

---

## 🎀 1. Proceso Analítico y Estrategia de Desarrollo

Para resolver este desafío de maquetación de arquitectura de software, implementé un enfoque súper estructurado basado en las mejores prácticas de Git y desarrollo de videojuegos:

* **🌸 Validación de Entorno y Rutas:** El primer paso consistió en mapear con precisión la ruta obligatoria del proyecto. Para garantizar el aislamiento del código y no interferir con el espacio de otros desarrolladores, mi solución se centralizó exclusivamente en el espacio asignado: `basico/estructura/ejercicio-01/resoluciones/allison-vargas/`.
* **🎨 Modularización de Recursos de Videojuegos:** Los videojuegos de acción y aventura demandan una separación estricta entre la lógica de programación y los elementos multimedia. Diseñé una carpeta raíz de recursos (`assets/`) subdividida estratégicamente en audios para las bandas sonoras, imágenes para las interfaces/sprites y mapas específicos para el diseño de niveles y escenarios (tilesets).
* **🐙 Estrategia de Persistencia (Git):** Dado que Git no rastrea directorios que se encuentran completamente vacíos, se incorporaron archivos `.gitkeep` (estrictamente en minúsculas) en cada terminal del árbol. Esto asegura que la estructura se mantenga intacta en el repositorio remoto y que cualquier miembro del equipo técnico obtenga la misma arquitectura al realizar un `git pull`.

---

## 🗂️ 2. Solución Implementada: Arquitectura del Proyecto

Esta es la nueva distribución estructural generada para el proyecto. Todos los nombres de carpetas y archivos ocultos cumplen con la regla de nomenclatura en minúsculas:

```text
basico/estructura/ejercicio-01/resoluciones/allison-vargas/
├── .gitkeep
├── assets/
│   ├── audio/
│   │   └── .gitkeep
│   ├── images/
│   │   └── .gitkeep
│   └── maps/
│       └── .gitkeep
├── docs/
│   └── .gitkeep
├── src/
│   └── .gitkeep
└── tests/
    └── .gitkeep