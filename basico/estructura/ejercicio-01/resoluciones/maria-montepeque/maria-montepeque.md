# Resolución: Ejercicio 01 - Estructura de Proyecto

**Estudiante:** Maria Jose Montepeque Zet  
**Dificultad:** Básica retadora  
**Temática:** Videojuegos de acción y aventura  

---

## 1. Explicación del Proceso Analítico (Cómo pensé el problema)

Para abordar este reto, dividí la solución en tres etapas siguiendo los consejos de la guía:

1.  **Identificación del Entorno:** Analicé la ruta obligatoria del proyecto para asegurarme de no afectar archivos base y posicionar mi solución exactamente en `basico/estructura/ejercicio-01/resoluciones/Maria-Montepeque/`.
2.  **Arquitectura de un Juego de Acción y Aventura:** Un juego de este género requiere separar de manera estricta el código de los componentes artísticos. Los mapas de niveles (tilesets/escenarios) se aislaron en su propia sección dentro de los recursos visuales, al igual que las bandas sonoras (audio) y las interfaces o sprites (images).
3.  **Persistencia en Git:** Como las carpetas inicialmente no contienen archivos de producción, apliqué la estrategia de incluir archivos `.gitkeep` en minúsculas para obligar a Git a registrar la estructura en el repositorio, asegurando que cualquier compañero del equipo técnico obtenga el mismo árbol al hacer un `git pull`.

---

## 2. Solución Completa: Árbol de Carpetas Implementado

A continuación se detalla la estructura final generada dentro de mi espacio asignado. Todos los nombres de los directorios han sido validados estrictamente en minúsculas:

```text
basico/estructura/ejercicio-01/resoluciones/Maria-Montepeque/
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
├── tests/
│   └── .gitkeep
└── .gitkeep